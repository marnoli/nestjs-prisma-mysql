/* eslint-disable */
import { IsEmail, IsString, MinLength } from "class-validator";

/* eslint-disable */
export class AuthLoginDTO {

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string
}