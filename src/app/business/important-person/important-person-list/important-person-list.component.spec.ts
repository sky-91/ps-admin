import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantPersonListComponent } from './important-person-list.component';

describe('ImportantPersonListComponent', () => {
  let component: ImportantPersonListComponent;
  let fixture: ComponentFixture<ImportantPersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantPersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
