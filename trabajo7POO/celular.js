"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celular = void 0;
var celular = /** @class */ (function () {
    function celular(pMarca, pModelo, pSO, pRam, pAlmacenamiento, pEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.SO = pSO;
        this.ram = pRam !== null && pRam !== void 0 ? pRam : 4;
        this.almacenamiento = pAlmacenamiento !== null && pAlmacenamiento !== void 0 ? pAlmacenamiento : 64;
        this.encendido = pEncendido !== null && pEncendido !== void 0 ? pEncendido : false;
    }
    //sets y gets
    // marca
    celular.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    celular.prototype.getMarca = function () {
        return this.marca;
    };
    //Modelo
    celular.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    celular.prototype.getModelo = function () {
        return this.modelo;
    };
    //sistema operativo
    celular.prototype.setSO = function (pSO) {
        this.SO = pSO;
    };
    celular.prototype.getSO = function () {
        return this.SO;
    };
    //ram
    celular.prototype.setRam = function (pRam) {
        this.ram = pRam;
    };
    celular.prototype.getRam = function () {
        return this.ram;
    };
    //almacenamiento
    celular.prototype.setAlmacenamiento = function (pAlmacenamiento) {
        this.almacenamiento = pAlmacenamiento;
    };
    celular.prototype.getAlmacenamiento = function () {
        return this.almacenamiento;
    };
    //Encendio
    celular.prototype.getEncendido = function () {
        return this.encendido;
    };
    // funcion prender apagar
    celular.prototype.encenderApagar = function () {
        if (this.encendido == true) {
            console.log("apagando....");
            this.encendido = false;
        }
        else {
            console.log("prendiendo....");
            this.encendido = true;
        }
    };
    //info
    celular.prototype.mostrarInfo = function () {
        console.log("\n            marca: ".concat(this.getMarca(), "\n            modelo: ").concat(this.getModelo(), "\n            Sistema Operativo: ").concat(this.getSO(), "\n            Memoria Ram: ").concat(this.getRam(), "gb\n            Almacenamiento: ").concat(this.getAlmacenamiento(), "gb\n            esta Prendido: ").concat(this.getEncendido(), "\n        "));
    };
    return celular;
}());
exports.celular = celular;
