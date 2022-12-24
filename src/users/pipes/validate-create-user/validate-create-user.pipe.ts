import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import {
  ArgumentMetadata,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, _metadata: ArgumentMetadata) {
    console.log('Inside Validate Create User Pipe!');
    const parseAgeToInt = parseInt(value.age.toString());

    if (isNaN(parseAgeToInt)) {
      console.log('Invalid user age input');
      throw new HttpException('Invalid user age input', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: parseAgeToInt };
  }
}
