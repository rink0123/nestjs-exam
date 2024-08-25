import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.repository.manager.transaction(
      async (transactionalEntityManager) => {
        const result = await transactionalEntityManager
          .createQueryBuilder()
          .insert()
          .into(User)
          .values(createUserDto)
          .execute();

        return result.raw[0];
      },
    );
  }
}
