import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Umrzoq',
      email: 'umrzoq@gmail.com',
    },
    {
      username: 'Umrzoq1',
      email: 'umrzoq1@gmail.com',
    },
    {
      username: 'Umrzoq2',
      email: 'umrzoq2@gmail.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(payload: CreateUserDto) {
    console.log(payload, 'body');
  }
}
