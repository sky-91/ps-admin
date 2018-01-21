import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImportantPersonUploadComponent} from './important-person-upload.component';

describe('ImportantPersonUploadComponent', () => {
  let component: ImportantPersonUploadComponent;
  let fixture: ComponentFixture<ImportantPersonUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantPersonUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantPersonUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
