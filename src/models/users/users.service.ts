import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userModel: Repository<User>) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const { password, role, email } = createUserDto;
  //   if (await this.getUserByEmail(email)) {
  //     throw new HttpException('This email already in use', 400);
  //   }
  //   createUserDto.password = await bcrypt.hash(password, 10);
  //   createUserDto.role = Roles[role];
  //   const createdUser = new this.userModel(createUserDto);
  //   return createdUser.save();
  // }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async delete(id: string) {
    return this.userModel.delete(id);
  }

  // async update(updateUserDto: UpdateUserDto, id: string): Promise<User> {
  //   const user = await this.getUserById(id);
  //   if (!user) {
  //     throw new HttpException('User not found by provided id', 404);
  //   }
  //   const { password, email } = updateUserDto;
  //   if (await this.getUserByEmail(email)) {
  //     throw new HttpException('This email already in use', 400)
  //   }
  //   updateUserDto.password = await bcrypt.hash(password, 10);
  //   await this.userModel.updateOne({ _id: id }, updateUserDto);
  //   return this.getUserById(id);
  // }

  // async getUserById(_id: string) {
  //   return this.userModel.findOne({ _id });
  // }

  // async getUserByEmail(email: string) {
  //   return this.userModel.findOne({ email });
  // }
}
