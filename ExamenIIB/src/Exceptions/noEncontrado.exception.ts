import {HttpException, HttpStatus} from '@nestjs/common';

export class NoEncontradoException extends HttpException{
    constructor(private _detalle, private _nivelError){
        super(
            {
                mensaje:'ERROR',
                detalle: _detalle,
                nivelError: _nivelError,
                status: HttpStatus.NOT_FOUND
            },
            HttpStatus.NOT_FOUND
        );
    }

}