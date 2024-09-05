import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, comment: '유저 아이디' })
  email: string;

  @Column({ comment: '유저 비밀번호' })
  password: string;

  @Column({ comment: '유저 핸드폰' })
  phone: string;

  @Column({ type: 'date', comment: '생년월일' })
  birthday: Date;

  @Column({ comment: '유저 이름' })
  name: string;

  @Column({ comment: '유저 닉네임' })
  nickname: string;

  @CreateDateColumn({ comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '수정일' })
  updatedAt: Date;
}
