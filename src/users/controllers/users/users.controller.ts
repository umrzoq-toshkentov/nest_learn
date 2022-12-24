import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from 'src/users/guard/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Umrzoq',
        email: 'umrzoq@gmail.com',
        posts: [
          {
            id: 1,
            title: 'post 1',
          },
          {
            id: 2,
            title: 'post 2',
          },
        ],
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) payload: CreateUserDto) {
    return this.userService.createUser(payload);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    return {
      id,
    };
  }
}
