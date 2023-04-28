import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  filter,
  map,
  merge,
  of,
  shareReplay,
  switchMap,
  zip,
} from 'rxjs';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  @Input() headingTitle: string = '';
  @Input() inputLabel: string = '';
  @Input() uploadButtonText: string = '';
  @Output() selectFile = new EventEmitter<File | undefined>();
  @Output() clickUploadButton = new EventEmitter<Event>();

  selectedFile$ = new BehaviorSubject<File | undefined>(undefined);
  buttonClick$ = new Subject<Event>();
  uploadProgress$ = this.selectedFile$.pipe(
    switchMap((file) =>
      merge(
        of(undefined),
        zip(this.buttonClick$, of(file)).pipe(
          filter(([_, file]) => !!file),
          switchMap(([_, file]) =>
            this.fileUploadService.uploadFormData(file as File)
          )
        )
      )
    ),
    shareReplay(1)
  );
  buttonDisabled$ = this.selectedFile$.pipe(
    switchMap((file) =>
      this.uploadProgress$.pipe(map((progress) => !(!progress && file)))
    )
  );

  constructor(private readonly fileUploadService: FileUploadService) {}

  onFileSelected(file: File | undefined): void {
    this.selectedFile$.next(file);
    this.selectFile.emit(file);
  }

  onUploadButtonClicked(event: Event): void {
    this.buttonClick$.next(event);
    this.clickUploadButton.emit(event);
  }
}
