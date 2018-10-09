import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExampleDirectiveComponent } from './basic-example-directive.component';

describe('BasicExampleDirectiveComponent', () => {
  let component: BasicExampleDirectiveComponent;
  let fixture: ComponentFixture<BasicExampleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicExampleDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
