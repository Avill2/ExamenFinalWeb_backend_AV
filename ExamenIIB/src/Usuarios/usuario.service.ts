import {Injectable,} from "@nestjs/common";
import {InjectConnection, InjectEntityManager, InjectRepository} from "@nestjs/typeorm";
import {Connection, EntityManager, Repository} from "@nestjs/typeorm";
import {UsuarioEntity} from './usuario.entity';
import {UsuarioData} from './usuario.data';

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async findAll(): Promise<UsuarioEntity[]>{
        return (await this.usuarioRepository.find());
    }
    crearUsuario(usuario: Usuario){
        const user = new UsuarioEntity();
        user.username = usuario.nombre;
        user.urlFoto = usuario.urlFoto;
        this.usuarioRepository.save(user);
    }

    crearTodosUsuarios(){

        for (var indice in UsuarioData){
            const user = new UsuarioEntity();
            user.username = UsuarioData[indice].username;
            user.urlFoto = UsuarioData[indice].urlFoto;
            this.usuarioRepository.save(user);
        }
    }
}

export class Usuario {

    constructor(
        public nombre:string,
        public urlFoto:string,
    ){};

}