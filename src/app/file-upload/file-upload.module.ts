import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadBodyComponent } from './file-upload-body/file-upload-body.component';
import { FileUploadHeadingComponent } from './file-upload-heading/file-upload-heading.component';
import { FileUploadInputComponent } from './file-upload-input/file-upload-input.component';
import { FileUploadProgressComponent } from './file-upload-progress/file-upload-progress.component';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadService } from './file-upload.service';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadHeadingComponent,
    FileUploadBodyComponent,
    FileUploadInputComponent,
    FileUploadProgressComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [FileUploadService],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
