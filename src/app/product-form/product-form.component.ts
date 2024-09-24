import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{

  formGroupProduct: FormGroup; //antes precisa adicionar o form. reativo no app.module (reactiveModule)

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private service: ProductService,
              private formBuilder: FormBuilder //serve para criar um formGroup.
            ){

    this.formGroupProduct = formBuilder.group({
          id : [''], //lembrando que esses nomes devem ser iguais aos nomes do json.
          name : [''],
          price : [''],
          category : [''] // Nosso formgroup esta agrupando essas 4 informações, depois preciso adicionar ao imput, no product
    })
  }

  ngOnInit() {
      const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
      this.loadProduct(id);
  }

  loadProduct(id: number) {
    this.service.getProductById(id).subscribe({
      next: data => this.formGroupProduct.setValue(data) //aqui faz com que,o que foi solicitado via http, retorne e carregue no formGroupProduct(mostrará na pág.Web)
      //essa é ultima etapa do formulário. (mostrando as informações de cada item na pág.web)
    });
  }

  update(){
    this.service.update(this.formGroupProduct.value).subscribe({ //se tem um subscribe deve ter um observable no product.service.ts
        next: () => this.router.navigate(['products'])
    })
  }

}
