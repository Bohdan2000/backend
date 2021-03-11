import { join } from 'path';
// import { User } from './entities/user.entity';

export = {
  type: 'mysql',
  url: process.env.DB_URL,
  logging: ['error'],
  synchronize: false,
  entities: [join(__dirname, './entity.{ts,js}')],
  migrations: [join(__dirname, './migrations/*.{ts,js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
