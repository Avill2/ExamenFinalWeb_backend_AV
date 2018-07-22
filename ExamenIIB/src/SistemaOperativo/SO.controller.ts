import {SO, SOService} from './SO.service'
import {Body, Controller, Get, Param, Post, Put, Req, Res} from '@nestjs/common';
import {UsuarioPipe} from '../Pipes/usuario.pipe';
import {SOSchema} from './SO.schema';
import {SOEntity} from './SO.entity';
import { getConnection } from 'typeorm';
@Controller()
export class SOController{
    constructor(private _soService:SOService){
    }
    @Get('SO')
    mostrarTodos(){
        return this._soService.arregloSO;
    }
    @Post('SO')
    crearSO(@Body(new UsuarioPipe(SOSchema)) bodyParams,@Res() res, @Req() req){
        const so = new SO(bodyParams.idSO, bodyParams.nombre,bodyParams.versionApi,bodyParams.fechaLanzamiento,bodyParams.pesoEnGigas,bodyParams.instalado);
        const userRepository= getConnection().getRepository(SOEntity);
        const sistema = userRepository.create(req.body);
        return userRepository.save(sistema)
    }

    @Get('SO/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros){
        const existeParametro= parametros.id;
        if(existeParametro!=null){
            const sistema=this._soService.obtenerUno(parametros.id);
            return res.send(sistema);
        }else{
            return res.send({mensaje: 'Id de paciente no encontrado'})
        }
    }

    @Put('SO/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param() parametro){
        const resultado=this._soService.editarUno(parametro.id,bodyParams.nombre,bodyParams.versionApi,bodyParams.fechaLanzamiento,bodyParams.pesoEnGigas,bodyParams.instalado);
        return res.send(resultado);
    }
}