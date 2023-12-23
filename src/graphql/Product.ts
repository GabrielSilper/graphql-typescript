import { extendType, floatArg, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenFieldTypes } from '../nexus/nexus-typegen';
import { randomUUID } from 'crypto';

export const ProductType = objectType({
  name: 'Product',
  definition(t) {
    t.nonNull.id('id'), t.nonNull.string('name'), t.nonNull.float('price');
  },
});

const products: NexusGenFieldTypes['Product'][] = [
  {
    id: randomUUID(),
    name: 'Product 1',
    price: 30.99,
  },
  {
    id: randomUUID(),
    name: 'Product 2',
    price: 53.99,
  },
];

export const getProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('getProducts', {
      type: 'Product',
      resolve: () => products,
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
        const product: NexusGenFieldTypes['Product'] = {
          id: randomUUID(),
          name,
          price,
        };

        products.push(product);
        return product;
      },
    });
  },
});
