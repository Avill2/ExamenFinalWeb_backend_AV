import {Injectable} from "@nestjs/common";



@Injectable()
export class AplicacionesService{
    arregloAplicaciones:Aplicacion[]=[];

    crearAplicacion(aplicacion:Aplicacion):Aplicacion[]{
        this.arregloAplicaciones.push(aplicacion);
        return this.arregloAplicaciones;
    }
    listarTodos(){
        return this.arregloAplicaciones;
    }
    obtenerUno(id){
        return this.arregloAplicaciones[id];
    }

    editarUni(id,pesoengigas,versionapp,nombreapp,urldescargaapp,fechaLanzamiento,costoapp){
        let arregloU=this.obtenerUno(id);
        arregloU.pesoEnGigas=pesoengigas;
        arregloU.version=versionapp;
        arregloU.nombre=nombreapp;
        arregloU.urlDescarga=urldescargaapp;
        arregloU.fechaLanzamiento=fechaLanzamiento;
        arregloU.costo=costoapp;
        return arregloU;
    };
}
export class Aplicacion {
    constructor(
        public pesoEnGigas:number,
        public version:number,
        public nombre:string,
        public urlDescarga:string,
        public fechaLanzamiento:string,
        public costo:number,
    ){};
}

