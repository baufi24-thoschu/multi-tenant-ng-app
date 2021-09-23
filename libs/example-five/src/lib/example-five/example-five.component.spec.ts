import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFiveComponent } from './example-five.component';

describe('ExampleFiveComponent', () => {
  let component: ExampleFiveComponent;
  let fixture: ComponentFixture<ExampleFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
