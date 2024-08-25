import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('DATABASE_HOST') || '';
  }

  get port(): number {
    return parseInt(
      this.configService.get<string>('DATABASE_PORT', '5432'),
      10,
    );
  }

  get username(): string {
    return this.configService.get<string>('DATABASE_USERNAME') || '';
  }

  get password(): string {
    return this.configService.get<string>('DATABASE_PASSWORD') || '';
  }

  get database(): string {
    return this.configService.get<string>('DATABASE_NAME') || '';
  }
}
