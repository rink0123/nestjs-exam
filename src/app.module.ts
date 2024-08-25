import { Module } from '@nestjs/common';
import { ConfigModule } from './configs/config.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule],
})
export class AppModule {}
