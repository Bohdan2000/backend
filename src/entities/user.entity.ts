import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 50,
  })
  firstName: string;
  @Column({
    length: 50,
  })
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  sex: boolean;
  @Column()
  role: number;
}
