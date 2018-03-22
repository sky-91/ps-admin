import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpecialPersonDetailComponent} from './special-person-detail.component';

describe('SpecialPersonDetailComponent', () => {
  let component: SpecialPersonDetailComponent;
  let fixture: ComponentFixture<SpecialPersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialPersonDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
