import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupSummaryEditComponent} from './group-summary-edit.component';

describe('GroupSummaryEditComponent', () => {
  let component: GroupSummaryEditComponent;
  let fixture: ComponentFixture<GroupSummaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupSummaryEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSummaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
