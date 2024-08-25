import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'src/configs/database.config.service';
import { User } from './entities/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: DatabaseConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.host,
      port: this.configService.port,
      username: this.configService.username,
      password: this.configService.password,
      database: this.configService.database,
      entities: [User],
      synchronize: true,
      logging: true,
    };
  }
}
