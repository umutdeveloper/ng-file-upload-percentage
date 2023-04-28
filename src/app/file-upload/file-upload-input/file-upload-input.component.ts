import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload-input',
  templateUrl: './file-upload-input.component.html',
  styleUrls: ['./file-upload-input.component.css'],
})
export class FileUploadInputComponent {
  @Input() label: string = '';
  @Input() buttonText: string = '';
  @Input() buttonDisabled: boolean | null = true;
  @Output() clickButton = new EventEmitter<Event>();
  @Output() selectFile = new EventEmitter<File>();

  constructor() {}

  onButtonClicked(event: Event): void {
    this.clickButton.emit(event);
  }

  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.selectFile.emit(element.files?.[0]);
  }
}
