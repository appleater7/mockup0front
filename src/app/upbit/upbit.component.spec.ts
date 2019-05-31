import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbitComponent } from './upbit.component';

describe('UpbitComponent', () => {
  let component: UpbitComponent;
  let fixture: ComponentFixture<UpbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
