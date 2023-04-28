import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload-heading',
  templateUrl: './file-upload-heading.component.html',
  styleUrls: ['./file-upload-heading.component.css'],
})
export class FileUploadHeadingComponent {
  @Input() title = '';
}
