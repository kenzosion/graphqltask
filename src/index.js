import { message } from './theDom';
import subs, { add } from './math';
import { GraphQLServer } from 'graphql-yoga';

// type definitions (schema)
// There are 5 Scalar types = String, Boolean, Int. Float and ID

const typeDefs = `
    type Query {
        title: String!,
        price: Float!,
        releaseYear: Int,
        rating: Float,
        inStock: Boolean!
    }
`

// Resolver

const resolvers = {
    Query: {
        title () {
            return 'Experience First'
        },
        price () {
            return 8.88
        },
        releaseYear () {
            return 2019
        },
        rating() {
            return 4.8
        },
        inStock() {
            return true
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



// console.log(add(5, 6));
// console.log(subs(10, 5));
// console.log(message);