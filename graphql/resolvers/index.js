const Event = require("../../models/event");
const User =require("../../models/user");
const Booking = require("../../models/booking")
const bcrypt = require("bcryptjs");
const {dateToSstring} = require('../../helpers/date')

const transformEvent = event =>{
    return {
        ...event._doc, 
        _id:event.id,
        date: dateToSstring(event._doc.date), 
        creator: user.bind(this,event.creator)
    };
}

const transformBooking = booking => {
    return{...booking._doc,
        _id:booking.id,
        user: user.bind(this, booking._doc.user),
        event: singleEvent.bind(this, booking._doc.event),
        createdAt:dateToSstring(booking._doc.createdAt),
        updatedAt:dateToSstring(booking._doc.updatedAt)}
}

const events = async eventIds =>{
        try{
            const events = await Event.find({_id:{$in: eventIds}})
                    return events.map(event =>{
                        transformEvent(event);
                    });                   
        }
        catch(err){
            throw err;
        }
        }

const user = async userId =>{
    try{

        const user = await User.findById(userId)
            return {...user._doc, 
                _id: user.id, 
                createdEvents: events.bind(this,user._doc.createdEvents)}      
    }catch(err){
        throw err
    }
}
const singleEvent = async eventId =>{
    try {
        const event = await Event.findById(eventId)
        return {...event._doc, id: event.id, creator: user.bind(this, event.creator)}
    } catch (err) {
        throw err
    }
}
/* Contains Resolvers*/
module.exports={

    events: async () => {
        try{
            const events = await Event.find()        
                return events
                .map(event=>{
                    return transformEvent(event);
                    });
        
        }catch(err){
            throw err;
        }
    },
bookings:async()=>{
    try {
        const bookings = await Booking.find();
        return bookings.map(booking=>{
            return transformBooking(booking)
        })
    } catch (err) {
        throw err
    }
},

    createEvent: async args => {
        
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: dateToSstring(args.eventInput.date),
            creator: "62989c584bcc180088cafc22"
        })
        let createdEvent;
        try{
        
            const result = await event.save()
            
            createdEvent = transformEvent(result);
            const creator = await User.findById("62989c584bcc180088cafc22")
                
            if(!creator){
                    throw new Error('User not found')
                }
                creator.createdEvents.push(event);
                await creator.save();
                return createdEvent;
            }
            catch(err){
                console.log(err)
                throw err
            }
        },
    
    createUser: async args => {
        try {
            const existingUser = await User.findOne({email:args.userInput.email}) 
            if(existingUser){
                throw new Error('User exists already')
            }
            const hashedPassword = await bcrypt
            .hash(args.userInput.password, 12)
    
                const user = new User({
                    email: args.userInput.email,
                    password: hashedPassword
                });
                const result = await user.save();            
                return {...result._doc , password:null , _id:result.id};            
        }         
        catch (err) {
            throw err
            }
    },
    bookEvent: async args =>{
        try {
            const fetchedEvent = await Event.findOne({_id: args.eventId})
            const booking = new Booking({
                user: '62989c584bcc180088cafc22',
                event: fetchedEvent
            })
            const result = await booking.save()
            return transformBooking(result)
            }
        catch (err) {
            throw err
        }
    },
    cancelBooking: async args =>{
        try {            
            const booking = await Booking.findById(args.bookingId).populate('event');
            const event = transformEvent(booking._doc.event);
            await Booking.deleteOne({_id: args.bookingId});
            return event;

        } catch (err) {
            throw err
        }
    }

}  