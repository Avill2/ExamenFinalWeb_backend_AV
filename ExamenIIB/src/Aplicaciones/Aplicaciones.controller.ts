import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {Aplicacion, AplicacionesService} from './Aplicaciones.service';
import {AppPipe} from '../Pipes/App.pipe';
import {APLICACION_SCHEMA} from './Aplicaciones.schema';

@Controller('aplicacion')
export  class AplicacionesController {
    constructor(private aplicacionService: AplicacionesService) {

    }

    @Post('RegistrarAplicacion')crearApp(@Body(new AppPipe(APLICACION_SCHEMA))bodyParams) {
        const apli = new Aplicacion(bodyParams.nombre,
            bodyParams.pesoEnGigas,
            bodyParams.version,
            bodyParams.urlDescarga,
            bodyParams.fechaLanzamiento,
            bodyParams.costo,
            bodyParams.sistemaOperativoIdIdsistemaOperativo,
            bodyParams.urlFotoApp);
        return this.aplicacionService.crearAplicacion(apli);
    }

    @Get('crearApp')registrarTodosApp(@Res() res, @Req() req){
        this.aplicacionService.creartodos()
        return res.status(202).send('Las aplicaciones fueron creadas')
    }


    @Get('MostrarApp')listarTodosApp(@Req() req, @Res() res){
        var promise = Promise.resolve(this.aplicacionService.listarTodos())

        promise.then(function (value) {
            if(value.length === 0){
                return res.send({
                    mensaje:'No existe ninguna Materia',
                    estado: HttpStatus.NOT_FOUND + ' Not found',
                });
            }
            else{
                return res.status(202).send(value);
            }
        });
    }
    @Get('/:id')
    mostrarApp(@Res () res, @Req () req, @Param() params){
        let arregloAplicacion = this.aplicacionService.obtenerUno(params.id);
        if(arregloAplicacion){
            return res.send(arregloAplicacion);
        } else{
            console.log('no encontrado');
            return res.status(400).send({
                mensaje:'Aplicacion no encontrado',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                URL:req.originalUrl,
            });
        }
    }



    @Put('/:id')
    modificarMateria(@Res () res, @Req () req, @Param() params, @Body(new AppPipe(APLICACION_SCHEMA)) body){
        let arregloapp = this.aplicacionService.obtenerUno(params.id);
        if(arregloapp){
            return res.send(
                this.aplicacionService.editarUni(
                    params.id,
                    body.pesoEnGigas,
                    body.nombre,
                    body.version,
                    body.costo,
                    body.fechaLanzamiento,
                    body.urlDescarga,
                    body.urlFotoApp,
                    body.aplicacionId,
                ));
        } else{
            return res.send({
                mensaje:'Aplicacion no encontrado. No se puede modificar',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                url:req.path,
            });
        }
    }
}
