import { IsDate, IsEmail, IsStrongPassword, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: '유효하지 않은 이메일 형식입니다.' })
  email: string;

  @IsStrongPassword(
    { minLength: 8, minUppercase: 0, minNumbers: 1, minSymbols: 1 },

    {
      message:
        '비밀번호는 최소 8자 이상이어야 하며, 숫자 1개와 특수문자 1개 이상을 포함해야 합니다.',
    },
  )
  password: string;

  @Matches(/^[0-9]+$/, { message: '휴대폰 번호는 숫자만 포함할 수 있습니다.' })
  phone: string;

  @IsDate({ message: '유효하지 않은 생년월일 형식입니다.' })
  birthday: Date;

  @Matches(/^[a-z가-힣]+$/i, {
    message: '이름은 한글과 영어만 포함할 수 있습니다.',
  })
  name: string;

  @Matches(/^[a-z0-9가-힣]+$/i, {
    message: '닉네임은 영문자, 숫자, 한글만 포함할 수 있습니다.',
  })
  nickname: string;
}
