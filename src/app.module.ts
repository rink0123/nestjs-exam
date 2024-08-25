import { Module } from '@nestjs/common';
import { ConfigModule } from './configs/config.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule],
})
export class AppModule {}
