import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  // @IsNumber()
  age: number;
}
