import { MinLength, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;
  fullName: string;
  @MinLength(8)
  password: string;
}
