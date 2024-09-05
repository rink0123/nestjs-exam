import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async createRefreshToken(payload: object) {
    return await this.jwtService.signAsync(payload, {
      expiresIn: this.configService.get<string>('auth.refreshExpiresIn'),
    });
  }

  async createAccessToken(payload: object) {
    return await this.jwtService.signAsync(payload, {
      expiresIn: this.configService.get<string>('auth.accessExpiresIn'),
    });
  }

  async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(
      password,
      Number(this.configService.get<string>('auth.saltOrRounds')),
    );
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }
}
