import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // @Post()
  // @HttpCode(201)
  // createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   try {
  //     return this.usersService.create(createUserDto);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // @Put(':id')
  // updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  //   try {
  //     return this.usersService.update(updateUserDto, id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // @Get(':id')
  // getById(@Param('id') id: string) {
  //   return this.usersService.getUserById(id);
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  //   return this.usersService.delete(id);
  // }
}
