import {ApolloServer} from 'apollo-server';
import  {mongoose} from 'mongoose';
import {typeDefs} from './graphql/typeDefs.js';
import {resolver} from './resolvers/resolver.js';


const MONGODB = "mongodb+srv://0xmazoutadmin:Freelance0203@maincluster.eyju8st.mongodb.net/?retryWrites=true&w=majority"

const server = new ApolloServer({
    typeDefs,
    resolver,
})

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(()=>{
    console.log("Connected to mongodb")
    return server.listen({port: process.env.PORT || 5000});
}).then(({url})=>{
    console.log(`Server is running on ${url}`)
}).catch(err=>{
    console.log(err)
})