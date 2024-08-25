import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return parseInt(this.configService.get<string>('APP_PORT', '3000'), 10);
  }
}
