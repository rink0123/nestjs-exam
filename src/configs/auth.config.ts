import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret: process.env.JWT_SECRET_KEY,
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRESIN,
  accessExpiresIn: process.env.JWT_ACCESS_EXPIRESIN,
  saltOrRounds: process.env.BCRYPTO_SALT_OR_ROUNDS,
}));
