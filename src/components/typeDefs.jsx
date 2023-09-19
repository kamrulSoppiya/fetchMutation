const { gql } = require('apollo-server');
export const typeDefs =gql`
    type Query{
        users:
    }

    type User{
        id:ID!
        name:
    }
`