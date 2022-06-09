const authResolver = require("../resolvers/auth")
const eventResolver = require("../resolvers/events")
const bookingResolver = require("../resolvers/bookings")

const rootResolver = {
    ...authResolver,
    ...eventResolver,
    ...bookingResolver
}

module.exports = rootResolver;