import { join } from 'path';

export = {
  type: 'mysql',
  url: process.env.DB_URL,
  logging: ['error'],
  synchronize: true,
  entities: [join(__dirname, './**/*.entity.{ts,js}')],
  migrations: [join(__dirname, './migrations/*.{ts,js}')],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
