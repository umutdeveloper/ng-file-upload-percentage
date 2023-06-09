import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'realtime-file-upload-progress-tracker';

  onFileSelected(file: File | undefined): void {
    console.log(file);
  }

  onUploadButtonClicked(event: Event): void {
    console.log(event);
  }
}
