import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import dbConfig from './database/config';

const start = async () => {
  const apolloServer = new ApolloServer({
    schema,
  });

  const PORT = process.env.SERVER_PORT || 4000;

  try {
    await dbConfig.initialize();
    console.log('DB connection occurred successfully');
    const { url } = await apolloServer.listen(PORT);
    console.log(`Server started at ${url}`);
  } catch (error) {
    console.error(error);
  }
};

start();
