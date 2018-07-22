import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {NoEncontradoException} from "../Exceptions/noEncontrado.exception"

import * as Joi from 'joi';
@Injectable()
export class AppPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(valorAPP: any, metadata: ArgumentMetadata){
        const  {error}= Joi.validate(valorAPP, this._schema)
        if(error){
            //botar un error
            throw  new NoEncontradoException(
                {
                    erorr: error,
                    mensaje: 'Json de Materia no valido',
                },
                10
            )
        } else{
            return valorAPP;
        }
    }
}