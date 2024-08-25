import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { AppConfigService } from './app.config.service';
import { DatabaseConfigService } from './database.config.service';

@Module({
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ['src/configs/.env'],
    }),
  ],
  providers: [AppConfigService, DatabaseConfigService],
  exports: [AppConfigService, DatabaseConfigService],
})
export class ConfigModule {}
