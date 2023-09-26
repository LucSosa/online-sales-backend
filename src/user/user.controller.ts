import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/creatUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
