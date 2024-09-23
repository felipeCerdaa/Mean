import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink,
            ReactiveFormsModule,
            CommonModule,],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {


  productoForm : FormGroup;


//inyectamos el FormBuilder y el Router en el constructor
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { 
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],

    })
  }

  //creamos un método para agregar un producto
  agregarProducto(){

    console.log(this.productoForm);

    //creo un objeto de tipo producto con los datos del formulario
    const PRODUCTO: producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO);

    //mostramos un mensaje de éxito con toastr
    this.toastr.success('Producto Registrado exitosamente ', 'Producto Registrado');

    //redirigimos a la página principal
    this.router.navigate(['/']);
  }

}
