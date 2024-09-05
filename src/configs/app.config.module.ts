import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';
import databaseConfig from './database.config';
import jwtConfig from './auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ['src/configs/.env'],
      load: [appConfig, databaseConfig, jwtConfig],
    }),
  ],
})
export class AppConfigModule {}
