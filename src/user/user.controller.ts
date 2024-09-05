import {
  Controller,
  Post,
  Body,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Delete()
  async delete(@Body() body: { id: number }) {
    return await this.userService.delete(body.id);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const result = await this.userService.login(body.email, body.password);

    if (!result) {
      throw new UnauthorizedException(
        '아이디 또는 비밀번호가 일치하지 않습니다.',
      );
    } else {
      return result;
    }
  }
}
