import * as Joi from 'joi';
export const SOSchema = Joi.object().keys({
    id: Joi.number(),
    nombre:Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
    versionApi:Joi.number().integer().greater(0).required(),
    fechaLanzamiento:Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
    pesoEnGigas :Joi.number().required(),
    instalado:Joi.string(),
});