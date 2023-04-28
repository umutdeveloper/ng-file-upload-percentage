import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadBodyComponent } from './file-upload-body.component';

describe('FileUploadBodyComponent', () => {
  let component: FileUploadBodyComponent;
  let fixture: ComponentFixture<FileUploadBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
