import * as Joi from 'joi';

export const APLICACION_SCHEMA=Joi.object().keys({
    pesoEnGigas :Joi.number().required(),
    version:Joi.number().integer().greater(0).required(),
    nombre:Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
    urlDescarga:Joi.string().min(3).max(100).required(),
    fechaLanzamiento:Joi.string().required(),
    costo:Joi.number().integer().required(),
    sistemaOperativoId:Joi.number().required(),
});