/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() SignUpDto: SignUpDto) {
    return this.AuthService.signUp(SignUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() SignInDto: SignInDto) {
    return this.AuthService.signIn(SignInDto);
  }
}
