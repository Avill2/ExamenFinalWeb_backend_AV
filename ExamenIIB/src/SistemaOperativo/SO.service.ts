import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {SOEntity} from './SO.entity';

@Injectable()
export class SOService{

    constructor(@InjectRepository(SOEntity)
    private readonly soRepository: Repository<SOEntity>){}
    arregloSO:SO[]=[];

    crearSO(so:SO){
        const sisope = new SOEntity();
        sisope.nombre=so.nombre;
        sisope.versionApi=so.versionApi;
        sisope.fechaLanzamiento=so.fechaNacimiento;
        sisope.pesoEnGigas=so.pesoEnGigas;
        sisope.instalado=so.instalado;
        sisope.urlFotoSO=so.urlFotoSO;
        sisope.usuarioFK=so.usuarioFKidUsuario;
        this.soRepository.save(sisope);
    }

    async listarTodos():Promise<SOEntity[]>{
        return (await this.soRepository.find());
    }
    obtenerUno(id){
        return this.arregloSO[id];
    }
    editarUno(id,nombre,versionApi, fecha, pesoG,instalado,urlFotosisope){
        let arregloUsua=this.obtenerUno(id);
        arregloUsua.nombre=nombre;
        arregloUsua.versionApi=versionApi;
        arregloUsua.fechaNacimiento=fecha;
        arregloUsua.pesoEnGigas=pesoG;
        arregloUsua.instalado=instalado;
        arregloUsua.urlFotoSO=urlFotosisope;
        return arregloUsua
    };
}

export class SO{
    constructor(
        public idSistemaOperativo:number,
        public nombre:string,
        public versionApi:number,
        public fechaNacimiento:string,
        public pesoEnGigas:number,
        public instalado:boolean,
        public urlFotoSO:string,
        public usuarioFKidUsuario:number,
    ){}
}