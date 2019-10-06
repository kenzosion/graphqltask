import { message } from './theDom';
import subs, { add } from './math';
import { GraphQLServer } from 'graphql-yoga';

// type definitions (schema)

const typeDefs = `
    type Query {
        hello: String!
    }
`

// Resolver

const resolvers = {
    Query: {
        hello () {
            return 'This is a resolver!'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=> {
    console.log('this is from the server')
})



console.log(add(5, 6));
console.log(subs(10, 5));
console.log(message);