import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch2Assignment3Component } from './ch2-assignment3.component';

describe('Ch2Assignment3Component', () => {
  let component: Ch2Assignment3Component;
  let fixture: ComponentFixture<Ch2Assignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ch2Assignment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch2Assignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
