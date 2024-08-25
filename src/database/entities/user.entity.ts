import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ unique: true, comment: '유저 아이디' })
  id: string;

  @Column({ comment: '유저 비밀번호' })
  password: string;

  @Column({ comment: '유저 닉네임' })
  nickname: string;

  @CreateDateColumn({ name: 'created_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', comment: '수정일' })
  updatedAt: Date;
}
