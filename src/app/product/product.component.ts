import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products : Product[] = [
      { "id": 1,
        "name": "Computador i7",
        "price": 6000.00,
        "category": "Eletrônicos"
      },
      { "id": 2,
        "name": "Computador i5",
        "price": 5000.00,
        "category": "Eletrônicos"
      },
      { "id": 3,
        "name": "Mouse",
        "price": 640.00,
        "category": "Eletrônicos"
      },

    ];
}
