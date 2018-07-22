import * as Joi from 'joi';

export const USUARIO_SCHEMA=Joi.object().keys({
    username:Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
    urlFoto:Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
});