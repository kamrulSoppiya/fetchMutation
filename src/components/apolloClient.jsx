import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink =  new HttpLink({
    uri: 'http://graph.soppiya.biz/user',
})
 
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client;