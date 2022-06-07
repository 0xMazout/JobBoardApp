const {dateToSstring} = require('../../helpers/date')
const Event = require("../../models/event");
const {transformEvent} = require("./merge")

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


}  