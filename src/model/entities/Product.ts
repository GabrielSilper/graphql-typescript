import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export default class Product {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;
}
