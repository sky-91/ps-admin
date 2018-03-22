import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IPRecordDetailComponent} from './i-p-record-detail.component';

describe('IPRecordDetailComponent', () => {
  let component: IPRecordDetailComponent;
  let fixture: ComponentFixture<IPRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IPRecordDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
