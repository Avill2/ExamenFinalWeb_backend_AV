import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioEntity} from './usuario/usuario.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AplicacionesEntity} from './Aplicaciones/Aplicaciones.entity';
import {SOEntity} from './SistemaOperativo/SO.entity';
import {SOController} from './SistemaOperativo/SO.controller';
import {UsuarioController} from './usuario/usuario.controller';
import {AutorizacionController} from './autorizacion.controller';
import {SOService} from './SistemaOperativo/SO.service';
import {AplicacionesService} from './Aplicaciones/Aplicaciones.service';
import {UsuarioService} from './usuario/usuario.service';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'web2018examen.mysql.database.azure.com',
      port: 3306,
      username: 'JorgeCarrillo@web2018examen',
      password: 'Web2018A',
      database: 'WebExamen',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true
  }),
      TypeOrmModule.forFeature([
          AplicacionesEntity,
          UsuarioEntity,
          SOEntity,
      ]),],
  controllers: [AppController,AppController,SOController,UsuarioController,AutorizacionController],
  providers: [AppService,SOService,AplicacionesService,UsuarioService],
})
export class AppModule {}
