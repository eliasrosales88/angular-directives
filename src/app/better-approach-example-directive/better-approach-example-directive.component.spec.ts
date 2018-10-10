import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterApproachExampleDirectiveComponent } from './better-approach-example-directive.component';

describe('BetterApproachExampleDirectiveComponent', () => {
  let component: BetterApproachExampleDirectiveComponent;
  let fixture: ComponentFixture<BetterApproachExampleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterApproachExampleDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterApproachExampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
