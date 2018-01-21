import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPersonUploadComponent } from './special-person-upload.component';

describe('SpecialPersonUploadComponent', () => {
  let component: SpecialPersonUploadComponent;
  let fixture: ComponentFixture<SpecialPersonUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPersonUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPersonUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
