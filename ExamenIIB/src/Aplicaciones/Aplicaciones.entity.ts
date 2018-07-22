import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {SOEntity} from '../SistemaOperativo/SO.entity';

@Entity('aplicaciones')
export class AplicacionesEntity{
    @PrimaryGeneratedColumn()
    id_app: number;

    @Column()
    pesoEnGigas: number;

    @Column()
    version: number;

    @Column()
    nombres: string;

    @Column()
    urlDescarga: string;

    @Column()
    fechaLanzamiento: Date;

    @Column()
    costo: number;

    @Column()
    urlFotoApp: string;

    @ManyToOne(
        type => SOEntity,
        soEntity=>soEntity.aplicacionId)
    sistemaOperativoId:number;

}