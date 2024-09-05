import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/database/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        ...createUserDto,
        password: await this.authService.hashPassword(createUserDto.password),
      })
      .returning('*')
      .execute();
  }

  async delete(id: number) {
    return !!(await this.userRepository.delete({ id })).affected;
  }

  async login(email: string, password: string) {
    const result: UserEntity | null = await this.userRepository.findOneBy({
      email,
    });
    if (!result) {
      return null;
    }

    const hash: boolean = await this.authService.comparePassword(
      password,
      result.password,
    );
    if (!hash) {
      return null;
    }

    return {
      accessToken: await this.authService.createAccessToken({
        id: result.id,
      }),
      refreshToken: await this.authService.createRefreshToken({
        id: result.id,
      }),
    };
  }
}
