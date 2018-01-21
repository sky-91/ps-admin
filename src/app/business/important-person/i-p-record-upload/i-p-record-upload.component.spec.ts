import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IPRecordUploadComponent} from './i-p-record-upload.component';

describe('IPRecordUploadComponent', () => {
  let component: IPRecordUploadComponent;
  let fixture: ComponentFixture<IPRecordUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPRecordUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPRecordUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
