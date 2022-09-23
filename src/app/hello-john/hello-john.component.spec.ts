import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloJohnComponent } from './hello-john.component';

describe('HelloJohnComponent', () => {
  let component: HelloJohnComponent;
  let fixture: ComponentFixture<HelloJohnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloJohnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloJohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
