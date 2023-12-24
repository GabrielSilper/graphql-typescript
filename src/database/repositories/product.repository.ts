import Product from '../../model/entities/Product';
import db from '../config';

export const ProductRepository = db.getRepository(Product);
