import { extendType, floatArg, nonNull, objectType, stringArg } from 'nexus';
import { ProductRepository } from '../database/repositories/product.repository';

export const ProductType = objectType({
  name: 'Product',
  definition(t) {
    t.nonNull.id('id'), t.nonNull.string('name'), t.nonNull.float('price');
  },
});

export const getProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('getProducts', {
      type: 'Product',
      resolve: async () => await ProductRepository.find(),
    });
  },
});

export const createProductMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createProduct', {
      type: 'Product',
      args: {
        name: nonNull(stringArg()),
        price: nonNull(floatArg()),
      },
      resolve: (_source, { name, price }) => {
        const product = ProductRepository.save({
          name,
          price,
        });
        return product;
      },
    });
  },
});
