"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celular_1 = require("./celular");
var celular1 = new celular_1.celular('Motorola', 'motoG', 'android');
//console.log(celular1.getMarca());
celular1.mostrarInfo();
celular1.setAlmacenamiento(128);
celular1.setRam(8);
celular1.encenderApagar();
celular1.mostrarInfo();
celular1.setMarca('iphone');
celular1.setModelo('16 pro max');
celular1.setSO('iOS');
celular1.encenderApagar();
celular1.encenderApagar();
celular1.mostrarInfo();
