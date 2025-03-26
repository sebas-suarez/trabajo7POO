export class celular {
    private marca:string;
    private modelo:string;
    private SO:string;
    private ram:number;
    private almacenamiento:number;
    private encendido:boolean;

    constructor(pMarca:string,pModelo:string,pSO:string,pRam?:number,pAlmacenamiento?:number,pEncendido?:boolean){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.SO = pSO;
        this.ram = pRam ?? 4;
        this.almacenamiento = pAlmacenamiento ?? 64;
        this.encendido = pEncendido ?? false;
    }



//sets y gets
// marca
    setMarca(pMarca:string):void{
        this.marca = pMarca;
    }
    getMarca():string{
        return this.marca;
    }

//Modelo
    setModelo(pModelo:string):void{
        this.modelo = pModelo;
    }

    getModelo():string{
        return this.modelo;
    }

//sistema operativo

    setSO(pSO:string):void{
        this.SO = pSO;
    }

    getSO():string{
        return  this.SO;
    }
//ram
    setRam(pRam:number){
        this.ram = pRam;
    }
    getRam():number{
        return this.ram;
    }

//almacenamiento
    setAlmacenamiento(pAlmacenamiento:number):void{
        this.almacenamiento = pAlmacenamiento;
    }
    getAlmacenamiento():number{
        return this.almacenamiento;
    }

//Encendio
    getEncendido():boolean{
        return this.encendido;
    }

// funcion prender apagar
    encenderApagar():void{
        if(this.encendido == true){
            console.log("apagando....");           
            this.encendido = false;  
        }else{
            console.log("prendiendo....");
            this.encendido = true;
        }       
    }

//info
    mostrarInfo(){
        console.log(
        `
            marca: ${this.getMarca()}
            modelo: ${this.getModelo()}
            Sistema Operativo: ${this.getSO()}
            Memoria Ram: ${this.getRam()}gb
            Almacenamiento: ${this.getAlmacenamiento()}gb
            esta Prendido: ${this.getEncendido()}
        `);
        
    }


}
