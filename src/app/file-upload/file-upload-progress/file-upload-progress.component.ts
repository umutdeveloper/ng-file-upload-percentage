import { Component, Input } from '@angular/core';
import { UploadProgress } from '../file-upload.service';

@Component({
  selector: 'app-file-upload-progress',
  templateUrl: './file-upload-progress.component.html',
  styleUrls: ['./file-upload-progress.component.css'],
})
export class FileUploadProgressComponent {
  @Input() progress: UploadProgress = { percentDone: 0, isCompleted: false };

  constructor() {}
}
