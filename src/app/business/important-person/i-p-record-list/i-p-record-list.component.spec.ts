import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IPRecordListComponent} from './i-p-record-list.component';

describe('IPRecordListComponent', () => {
  let component: IPRecordListComponent;
  let fixture: ComponentFixture<IPRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IPRecordListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
