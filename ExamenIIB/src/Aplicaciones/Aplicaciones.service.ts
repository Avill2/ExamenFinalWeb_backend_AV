import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {AplicacionesEntity} from './Aplicaciones.entity';
import {AplicacionesData} from './Aplicaciones.data';



@Injectable()
export class AplicacionesService{
    constructor(@InjectRepository(AplicacionesEntity)
    private readonly aplicacionRepository:Repository<AplicacionesEntity>){}
    arregloAplicaciones:Aplicacion[]=[];

    crearAplicacion(aplicacion:Aplicacion){
        const app= new AplicacionesEntity();
        app.nombres=aplicacion.nombre;
        app.pesoEnGigas=aplicacion.pesoEnGigas;
        app.version=aplicacion.version;
        app.urlDescarga=aplicacion.urlDescarga;
        app.fechaLanzamiento=new Date(aplicacion.fechaLanzamiento);
        app.costo=aplicacion.costo;
        app.urlFotoApp=aplicacion.urlFotoApp;
        app.aplicacionId=aplicacion.sistemaOperativoIdIdsistemaOperativo;
        this.aplicacionRepository.save(app);

    }

    async listarTodos():Promise<AplicacionesEntity[]>{
        return (await this.aplicacionRepository.find());
    }

    creartodos(){
        for(var index in AplicacionesData){
            const app = new AplicacionesEntity();
            app.nombres=AplicacionesData[index].nombre;
            app.pesoEnGigas=AplicacionesData[index].pesoGigas;
            app.version=AplicacionesData[index].version;
            app.urlDescarga=AplicacionesData[index].urldescarga;
            app.costo=AplicacionesData[index].costo;
            app.urlFotoApp=AplicacionesData[index].urlFotoApp;
            app.fechaLanzamiento= new Date (AplicacionesData[index].fechaLanzamiento);
            app.aplicacionId=parseInt(AplicacionesData[index].sistemaOperativoIdIdsistemaOperativo);
            this.aplicacionRepository.save(app);
        }
    }

    obtenerUno(appid){
        return this.arregloAplicaciones[appid];
    }

    editarUni(idapp,pesoengigas,versionapp,nombreapp,urldescargaapp,fechaLanzamientoapp,costoapp,urlFotoApp,SistemaOperativoId){
        let appactualizar=this.obtenerUno(idapp);
        appactualizar.pesoEnGigas=pesoengigas;
        appactualizar.version=versionapp;
        appactualizar.nombre=nombreapp;
        appactualizar.urlDescarga=urldescargaapp;
        appactualizar.fechaLanzamiento=fechaLanzamientoapp;
        appactualizar.costo=costoapp;
        appactualizar.urlFotoApp=urlFotoApp;
        appactualizar.sistemaOperativoIdIdsistemaOperativo=SistemaOperativoId;
        return appactualizar;
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
        public sistemaOperativoIdIdsistemaOperativo:number,
        public urlFotoApp:string,
    ){};
}

