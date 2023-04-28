import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadHeadingComponent } from './file-upload-heading.component';

describe('FileUploadHeadingComponent', () => {
  let component: FileUploadHeadingComponent;
  let fixture: ComponentFixture<FileUploadHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
