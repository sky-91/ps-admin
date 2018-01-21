import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPersonListComponent } from './special-person-list.component';

describe('SpecialPersonListComponent', () => {
  let component: SpecialPersonListComponent;
  let fixture: ComponentFixture<SpecialPersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
