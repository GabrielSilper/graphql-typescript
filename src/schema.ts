import { makeSchema } from 'nexus';
import { join } from 'path';

import * as types from './graphql';

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(__dirname, './nexus/schema.graphql'),
    typegen: join(__dirname, './nexus/nexus-typegen.ts'),
  },
});
