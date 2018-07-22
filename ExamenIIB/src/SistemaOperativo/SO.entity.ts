import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {type} from 'os';
import {UsuarioEntity} from '../Usuarios/usuario.entity';
import {AplicacionesEntity} from '../Aplicaciones/Aplicaciones.entity';
export class SOEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column({length: 500})
    nombre: string;

    @Column()
    versionApi: string;

    @Column({length: 500})
    fechaLanzamiento: Date;

    @Column()
    pesoEnGigas: number;

    @Column({length: 10})
    instalado: boolean;

    @Column({length: 500})
    urlFotoSO: string;

    @ManyToOne(
        type => UsuarioEntity,
        SOEntity => SOEntity.sistemaOperativoId)
    usuarioFK: number;

    @OneToMany(
        type => AplicacionesEntity,
        SOEntity => SOEntity.sistemaOperativoId)
    aplicacionId:number;
}