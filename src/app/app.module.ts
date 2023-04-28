import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploadModule } from './file-upload/file-upload.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FileUploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
