import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AppConfigModule } from './configs/app.config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, AuthModule, UserModule],
})
export class AppModule {}
