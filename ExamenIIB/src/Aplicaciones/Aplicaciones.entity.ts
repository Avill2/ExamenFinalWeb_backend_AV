import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {SOEntity} from '../SistemaOperativo/SO.entity';

@Entity('aplicaciones')
export class AplicacionesEntity{
    @PrimaryGeneratedColumn() id: number;
    @Column()
    pesoEnGigas: number;
    @Column()
    version: number;
    @Column({length: 500})
    nombre: string;
    @Column({length: 500})
    urlDescarga: string;
    @Column({length: 100})
    fechaLanzamiento: string;
    @Column()
    costo: number;
    @Column()
    estado: boolean;
    @Column({length: 500})
    urlAplicacion: string;

    @ManyToOne(type => SOEntity,
        so=>so.aplicacionId)
    so:SOEntity;
}