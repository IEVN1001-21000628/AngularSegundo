import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Empl{
  matricula: number,
  nombre: string,
  correo: string,
  edad: number,
  horas: number
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export default class EmpleadosComponent implements OnInit{
  formGroup!: FormGroup;

  matriculaBuscar:number=0;

  modulo: Empl[]=[{
    matricula: 0,
    nombre: '',
    correo: '',
    edad: 0,
    horas: 0
  }]

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      matricula:[0],
      nombre:[''],
      correo:[''],
      edad:[0],
      horas:[0]
    })
  }
  registrarEmpleado(){
    const { matricula, nombre, correo, edad, horas } = this.formGroup.value;

    const nuevoEmpleado: Empl = {
      matricula: matricula,
      nombre: nombre,
      correo: correo,
      edad: edad,
      horas: horas
    };
  
    let empleadosGuardados = localStorage.getItem('empleado');
    let listaModulos: Empl[] = empleadosGuardados ? JSON.parse(empleadosGuardados) : [];
  
    listaModulos.push(nuevoEmpleado);

    localStorage.setItem('empleado', JSON.stringify(listaModulos));
  
    this.modulo = listaModulos;
    const salario = this.calcularSalario(nuevoEmpleado.horas);

    
  }

  calcularSalario(horas: number): {pagoBase: number, pagoExtras: number, total: number} {

  
    let pagoBase = 0;
    let pagoExtras = 0;

    if (horas <= 40) {

      pagoBase = horas * 70;
    } else {

      pagoBase = 40 * 70;

      const horasExtras = horas - 40;
      pagoExtras = horasExtras * 140;
    }

    const total = pagoBase + pagoExtras;

    return { pagoBase, pagoExtras, total };
  }
  

  imprimirTabla(){

    const datosGuardado = localStorage.getItem('empleado');
    if (datosGuardado) {
      const usuarioRecuperado: Empl[] = JSON.parse(datosGuardado);

      usuarioRecuperado.forEach((empleado, index)=>{
        this.modulo[index]=empleado
        const salario = this.calcularSalario(empleado.horas);
      });

      this.modulo = usuarioRecuperado;
    }

  }

  // Función para cargar los datos del empleado
cargarEmpleado()
{
    const { matricula } = this.formGroup.value;
    const empleado = this.modulo.find(emp => emp.matricula === matricula);

    if (empleado) {
        this.formGroup.patchValue({
            nombre: empleado.nombre,
            correo: empleado.correo,
            edad: empleado.edad,
            horas: empleado.horas
        });
    } else {
        alert('Empleado no encontrado');
    }
}

// Función para modificar los datos del empleado existente
modificarEmpleado()
{
    const { matricula, nombre, correo, edad, horas } = this.formGroup.value;
    const index = this.modulo.findIndex(emp => emp.matricula === matricula);

    if (index !== -1) {
        // Actualizamos el empleado existente
        this.modulo[index] = {
            matricula,
            nombre,
            correo,
            edad,
            horas
        };
        localStorage.setItem('empleado', JSON.stringify(this.modulo));
    } else {
        alert('No se encontró el empleado para modificar.');
    }
}



 

  borrarEmpleado(){
    const{ matricula }=this.formGroup.value;
    const index=this.modulo.findIndex(emp=>emp.matricula===matricula)
    if (index !==-1) {
      this.modulo.splice(index, 1)
      localStorage.setItem('empleado', JSON.stringify(this.modulo))
    }
  }

  sumarSubtotales() {
    return this.modulo.reduce((total, empleado) => {
      const subtotal = this.calcularSalario(empleado.horas).total;  // Calcula el subtotal de cada empleado
      return total + subtotal;  // Suma los subtotales
    }, 0);  // Inicializamos la suma en 0
  }
}
