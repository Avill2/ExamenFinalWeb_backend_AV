import * as Joi from 'joi';
export const SOSchema = Joi.object().keys({
    nombre:Joi.string().regex(/^[a-zA-Z ]{4,30}$/).required(),
    versionApi: Joi.string().regex(/^[a-zA-Z ]{4,30}$/).required(),
    fechaLanzamiento:Joi.date().required(),
    pesoEnGigas:Joi.number().integer().min(0).max(8).required(),
    instalado:Joi.boolean().required(),
    urlFotoso: Joi.string(),
    usuarioFKIdUsuario: Joi.number().integer().required(),
});