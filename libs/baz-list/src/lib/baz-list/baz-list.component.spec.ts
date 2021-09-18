import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazListComponent } from './baz-list.component';

describe('BazListComponent', () => {
  let component: BazListComponent;
  let fixture: ComponentFixture<BazListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BazListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
