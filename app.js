const express = require("express");
const bodyParser = require("body-parser");
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');

const { create } = require("./models/event");
const res = require("express/lib/response");
const app = express();
const rootResolver = require("./graphql/resolvers/index")
// const events = [];

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')
const isAuth =require('./middleware/is-auth')


app.use(bodyParser.json());

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
    schema:graphQlSchema,
    rootValue:graphQlResolvers,
    graphiql: true
})
);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD
}@cluster0.0qn7g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3000);
})
.catch(err =>{
    console.log(process.env.MONGO_USER)
    console.log(err)
})
