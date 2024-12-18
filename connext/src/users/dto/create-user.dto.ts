import {
  IsString,
  IsEmail,
  IsOptional,
  IsEnum,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { Role } from 'src/common/enum/role-enum';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  userName?: string;

  @IsString()
  passwordHashed: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  nickName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsBoolean()
  @IsOptional()
  isOnline?: boolean;

  @IsEnum(Role)
  role: Role;
}
