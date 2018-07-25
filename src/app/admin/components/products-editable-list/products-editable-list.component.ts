import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../../models/ProductModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-editable-list',
  templateUrl: './products-editable-list.component.html',
  styleUrls: ['./products-editable-list.component.css']
})
export class ProductsEditableListComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onProductEdit(product: Product) {
    this.router.navigate(['./admin/edit-product/', product.name]);
  }

  onProductRemove(product: Product) {

  }

}
