import { celular} from "./celular";

let celular1 = new celular('Motorola','motoG','android');

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
