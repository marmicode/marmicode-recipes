import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mc-cart-info',
  template: `🚧 &lt;mc-cart-info&gt;`,
})
export class CartInfoComponent {}

@NgModule({
  declarations: [CartInfoComponent],
  exports: [CartInfoComponent],
  imports: [CommonModule],
})
export class CartInfoModule {}
