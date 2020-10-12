import './fix-codesandbox';
import { Animal, Cart } from './cart.service';
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

  it(`should show cart's total price`, () => {
    const cart = TestBed.inject(Cart);

    jest.spyOn(cart, 'getAnimals').mockReturnValue([
      { name: 'Missy', price: 200 },
      { name: 'Doline', price: 100 },
    ] as Animal[]);

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toEqual('€300.00');
  });
});
