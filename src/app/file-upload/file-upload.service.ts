import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export type UploadProgress = {
  percentDone: number;
  isCompleted: boolean;
  isError?: boolean;
}

@Injectable()
export class FileUploadService {
  constructor(private readonly http: HttpClient) {}

  uploadFormData(file: File): Observable<UploadProgress> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:3000/upload', formData, {
      reportProgress: true,
      observe: 'events',
    }).pipe(
      map((event: HttpEvent<Object>) => {
        let percentDone = 0;
        let isCompleted = false;
        if (event.type === HttpEventType.UploadProgress) {
          percentDone = event.total ? Math.round(100 * event.loaded / event.total) : 0;
        } else if (event instanceof HttpResponse) {
          percentDone = 100;
          isCompleted = true;
        }
        return { percentDone, isCompleted };
      }),
      catchError(() => of({ percentDone: 100, isCompleted: true, isError: true }))
    );
  }
}
