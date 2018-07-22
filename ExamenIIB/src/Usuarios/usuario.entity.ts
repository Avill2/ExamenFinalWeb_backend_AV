import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SOEntity} from '../SistemaOperativo/SO.entity';
@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    UsuarioId:number;
    @Column()
    username:string;
    @Column()
    urlFoto:string;

    @OneToMany(
        type => SOEntity,
        usuarioEntity => usuarioEntity.usuarioFK)sitemaOperativoId:number;
}