import Product from '../model/entities/Product';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  logging: true,
  synchronize: true,
  entities: [Product],
});
