import {SO, SOService} from './SO.service'
import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res,} from '@nestjs/common';
import {UsuarioPipe} from '../Pipes/usuario.pipe';
import {SOSchema} from './SO.schema';
import { getConnection } from 'typeorm';
import {SOPipe} from '../Pipes/SO.pipe';


@Controller('sistemaoperativo')
export class SOController{
    constructor(private _soService:SOService){
    }
    @Get('SO')
    mostrarTodos(){
        return this._soService.arregloSO;
    }
    @Post('registrarSistemaOperativo')
    crearSO(@Body(new UsuarioPipe(SOSchema)) bodyParams,@Res() res, @Req() req){
        const sistemaoperativo = new SO(
            bodyParams.idSO,
            bodyParams.nombre,
            bodyParams.versionApi,
            bodyParams.fechaLanzamiento,
            bodyParams.pesoEnGigas,
            bodyParams.instalado,
            bodyParams.urlFotoso,
            bodyParams.usuarioFKidUsuario);
        return this._soService.crearSO(sistemaoperativo)
    }

    @Get('crearSisOpe')
    registrarEstudiante(@Res() res, @Req() req, @Param() parametros){
        this._soService.creartodos();
        return res.status(202).send('Sistema Operativo Creado.')

    }

    @Get('MostrarSistemaOperativo')listarSistemaOperativo(@Res() res, @Req() req){
        var promise=Promise.resolve(this._soService.listarTodos());
        promise.then(function (value) {
            if (value.length ===0){
                return res.send({
                    mensaje:'No existe Sistema Operativo',
                    estado: HttpStatus.NOT_FOUND+'Not found',
                });
            }
            else{
                return res.status(202).send(value);
            }
        })
    }

    @Get('SO/:id')mostrarSistemaOperativo(@Req() req, @Res()res, @Param()paramtero){
        let arreglosistemaperativo=this._soService.obtenerUno(paramtero.sistemaOperativoId);
        if (arreglosistemaperativo){
            return res.send(arreglosistemaperativo);
        }else{
            return res.status(400).send({
                mensaje:'Sistema Operativo no encontrado',
                estado:HttpStatus.NOT_FOUND+'Not found',
                URL:req.originalUrl,
            });
        }
    }
    @Put('SO/:id')
    editarSistemaOperativo( @Res() res, @Req() req, @Param() parametro, @Body(new SOPipe(SOSchema))body){
        let arreglosistemaoperativo=this._soService.obtenerUno(parametro.id);
        if(arreglosistemaoperativo){
            return res.send(this._soService.editarUno(parametro.sistemaOperativoId,
                body.nombre,
                body.versionApi,
                body.fechaLanzamiento,
                body.pesoEnGigas,
                body.instalado,
                body.urlFotoso));
        }else{
            return res.send({
                mensaje:'Sistema Operativo.No es modificable',estado:HttpStatus.NOT_FOUND+'Not Found',
                url:req.path
,            });
        }
    }
}