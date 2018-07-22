import * as Joi from 'joi';

export const APLICACION_SCHEMA=Joi.object().keys({
    nombres:Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
    pesoEnGigas :Joi.number().required(),
    version:Joi.number().integer().greater(0).required(),
    urlDescarga:Joi.string().min(3).max(100).required(),
    fechaLanzamiento:Joi.date().required(),
    costo:Joi.number().integer().required(),
    sistemaOperativoIdIdsistemaOperativo:Joi.number().required(),
    urlFotoApp:Joi.string().regex(/^[a-zA-Z0-9 ]{4,300}$/).required(),

});