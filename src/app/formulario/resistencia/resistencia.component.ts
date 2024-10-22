
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Res {
  color1: string;
  color2: string;
  color3: string;
  opc1: string;
 /*  res?:number;
  min?:number;
  max?:number; */

  //tol:number
}

interface Res2{
  color1: string;
  color2: string;
  color3: string;
  opc1: string;
  res:number;
  min:number;
  max:number;
}

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css'],
})
export class ResistenciaComponent implements OnInit {
  formGroup!: FormGroup;

  colorValores: any = {
    Negro: { dato: 0, multiplicador: 1 },
    Cafe: { dato: 1, multiplicador: 10 },
    Rojo: { dato: 2, multiplicador: 100 },
    Naranja: { dato: 3, multiplicador: 1000 },
    Amarillo: { dato: 4, multiplicador: 10000 },
    Verde: { dato: 5, multiplicador: 100000 },
    Azul: { dato: 6, multiplicador: 1000000 },
    Violeta: { dato: 7, multiplicador: 10000000 },
    Gris: { dato: 8, multiplicador: 100000000 },
    Blanco: { dato: 9, multiplicador: 1000000000 },
    dorado: { tolerancia: .05 },
    plata: { tolerancia: .10 },
  };

  modulo: Res = {
    color1: '',
    color2: '',
    color3: '',
    opc1: '',
/*     res:0,
    min:0,
    max:0
    //tol:0, */
  };

  modulo2: Res2[] =[{
    color1: '',
    color2: '',
    color3: '',
    opc1: '',
    res:0,
    min:0,
    max:0
  }]

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      color1: ['negro'],
      color2: ['negro'],
      color3: ['negro'],
      opc1: [''],
      //tolerancia:['']

      res:[0],
      min:[0],
      max:[0]

    });
  }

  registrarColores() {
    const { color1, color2, color3, opc1} = this.formGroup.value; //tolerancia
    if (this.colorValores[color1] && this.colorValores[color2] && this.colorValores[color3]) { //&& this.colorValores[tolerancia]
        const valor1 = this.colorValores[color1].dato;
        const valor2 = this.colorValores[color2].dato;
        const multiplicador = this.colorValores[color3].multiplicador;
        const valores=this.colorValores[opc1].tolerancia;
        const resistencia:number = (valor1 * 10 + valor2) * multiplicador;

        const min:number=(resistencia*valores)-resistencia;
        const max:number=(resistencia*valores)+resistencia;


        //const ohms=this.colorValores[tolerancia].tol;

        /* const variacion:number=tolerancia*resistencia;
        const toleranciaMinima:number=resistencia-variacion;
        const toleranciaMaxima:number=resistencia+variacion */

        this.modulo = { color1, color2, color3, opc1}; //tol: tolerancia res: resistencia, min: min, max: max

        let datosGuardados = localStorage.getItem('dato');
        let listaModulos = datosGuardados ? JSON.parse(datosGuardados) : [];
        listaModulos.push(this.modulo);
        localStorage.setItem('dato', JSON.stringify(listaModulos));

        console.log(`la resistencia ${this.modulo2}`)
    }
  }

  imprimiRes(){
    const datosGuardado = localStorage.getItem('dato');
    if (datosGuardado) {
      const listaModulos = JSON.parse(datosGuardado);
      this.modulo2 = listaModulos; 


this.modulo2.forEach((modulo, index) => {
  const color1Valido = this.colorValores[modulo.color1];
  const color2Valido = this.colorValores[modulo.color2];
  const color3Valido = this.colorValores[modulo.color3];
  const opc1Valido = this.colorValores[modulo.opc1];


  if (color1Valido && color2Valido && color3Valido && opc1Valido) {
    const valor1 = color1Valido.dato;
    const valor2 = color2Valido.dato;
    const multiplicador = color3Valido.multiplicador;
    const valores = opc1Valido.tolerancia;

    const resistencia = (valor1 * 10 + valor2) * multiplicador;
    const min = resistencia - (resistencia * valores);
    const max = resistencia + (resistencia * valores);

    this.modulo2[index].res = resistencia;
    this.modulo2[index].min = min;
    this.modulo2[index].max = max;
  }
});
      }
    }
  }


