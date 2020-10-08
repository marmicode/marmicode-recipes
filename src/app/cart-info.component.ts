import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import { Animal, Cart } from './cart.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mc-cart-info',
  template: `{{ totalPrice | currency: 'EUR' }}`,
})
export class CartInfoComponent implements OnInit {
  totalPrice: number;
  constructor(private _cart: Cart) {}

  ngOnInit(): void {
    this.totalPrice = this._cart
      .getAnimals()
      .reduce((total, animal) => total + animal.price, 0);
  }
}

@NgModule({
  declarations: [CartInfoComponent],
  exports: [CartInfoComponent],
  imports: [CommonModule],
})
export class CartInfoModule {}
