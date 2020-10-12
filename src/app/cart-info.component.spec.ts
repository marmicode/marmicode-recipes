import './fix-codesandbox';
import { CartInfoComponent } from './cart-info.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CartInfoComponent', () => {
  let fixture: ComponentFixture<CartInfoComponent>;
  let component: CartInfoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartInfoComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CartInfoComponent);
    component = fixture.componentInstance;
  });

  xit(`🚧 should show cart's total price`, () => {});
});
