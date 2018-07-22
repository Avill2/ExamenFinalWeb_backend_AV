import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {Aplicacion, AplicacionesService} from './Aplicaciones.service';
import {UsuarioPipe} from '../Pipes/usuario.pipe';
import {APLICACION_SCHEMA} from './Aplicaciones.schema';

@Controller()
export  class AplicacionesController {
    constructor(private aplicacionService: AplicacionesService) {

    }
    @Get('Aplicacion')
    mostrarTodos(@Res() response){
        this.aplicacionService.listarTodos(response)
    }

    @Post('Aplicacion')
    crearAplicacion(
        @Body('id')id,
        @Body('pesoEnGigas')pesoEnGigas,
        @Body('version')version,
        @Body('nombres')nombre,
        @Body('urlDescarga')urlDescarga,
        @Body('fechaLanzamiento')fechaLanzamiento,
        @Body('costo')costo,
        @Body('sistemaOperativoId')sistemaOperativoId,
        @Res() res, @Req() req){
        this.aplicacionService.crearAplicacion(new )
    }
}