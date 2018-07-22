///<reference path="SO.entity.ts"/>
import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import {SOEntity} from './SO.entity';
import {SOData} from './so.data';

@Injectable()
export class SOService{

    constructor(@InjectRepository(SOEntity)
    private readonly soRepository: Repository<SOEntity>){}
    arregloSO:SO[]=[];


    async listarTodos():Promise<SOEntity[]>{
        return (await this.soRepository.find());
    }


    crearSO(so:SO){
        const sisope = new SOEntity();
        sisope.nombre=so.nombre;
        sisope.versionApi=so.versionApi;
        const fecha = new Date(so.fechaLanzamiento);
        sisope.fechaLanzamiento = fecha;
        sisope.pesoEnGigas=so.pesoEnGigas;
        sisope.instalado=so.instalado;
        sisope.urlFotoSO=so.urlFotoSO;
        sisope.usuarioFK=so.usuarioFKidUsuario;
        this.soRepository.save(sisope);
    }

    creartodos(){
        for (var index in SOData){
            const sistema= new SOEntity();
            sistema.nombre=SOData[index].nombres;
            sistema.versionApi=SOData[index].versionApi;
            sistema.fechaLanzamiento= new Date(SOData[index].fechaLanzamiento);
            sistema.pesoEnGigas=SOData[index].pesoGigas;
            sistema.instalado=SOData[index].instalado;
            sistema.urlFotoSO=SOData[index].urlFotoSO;
            sistema.usuarioFK=parseInt(SOData[index].usuarioFKIdUsuario);

            this.soRepository.save(sistema);
        }
    }


    obtenerUno(idso){
        return this.arregloSO[idso];
    }
    editarUno(idso,nombre,versionApi, fecha, pesoG,instalado,urlFotosisope){
        let soactualizar=this.obtenerUno(idso);
        soactualizar.nombre=nombre;
        soactualizar.versionApi=versionApi;
        soactualizar.fechaLanzamiento=fecha;
        soactualizar.pesoEnGigas=pesoG;
        soactualizar.instalado=instalado;
        soactualizar.urlFotoSO=urlFotosisope;
        return soactualizar
    };
}

export class SO{
    constructor(
        public idSistemaOperativo:number,
        public nombre:string,
        public versionApi:string,
        public fechaLanzamiento:string,
        public pesoEnGigas:number,
        public instalado:boolean,
        public urlFotoSO:string,
        public usuarioFKidUsuario:number,
    ){}
}