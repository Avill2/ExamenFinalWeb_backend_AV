import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';
import {PeticionInvalidaException} from "../Exceptions/peticionInvalida.exception";
import * as Joi from 'joi';
import {NoEncontradoException} from "../Exceptions/noEncontrado.exception"

@Injectable()
export class UsuarioPipe implements PipeTransform{
    constructor(private readonly schema) {

    }
    transform(valorUsuario: any, metadatos: ArgumentMetadata) {
        const {error} = Joi.validate(
            valorUsuario,
            this.schema
        );
        if (error) {
            throw new NoEncontradoException(
                {
                    erorr: error,
                    mensaje: 'No encontrado',
                },
                10
            );
        }else{
            return valorUsuario;

        }


    }
}
