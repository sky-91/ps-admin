import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSummaryListComponent } from './group-summary-list.component';

describe('GroupSummaryListComponent', () => {
  let component: GroupSummaryListComponent;
  let fixture: ComponentFixture<GroupSummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSummaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
