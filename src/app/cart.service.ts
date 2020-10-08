import { Injectable } from '@angular/core';

export interface Animal {
  id: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class Cart {
  /**
   * @deprecated 🚧 Work in progress.
   */
  getAnimals(): Animal[] {
    throw new Error('🚧 Work in progress.');
  }
}
