const mongoose = require('mongoose');

const DiscussionSchema = mongooose.model('discussion', new.mongoose.Schema({
    id: {
        type: [String | Number]
    },
    name: {
        type: String
    },
    users: {
        type: Array,
        required: [true, 'users needed to start a discussion']
    },
    messages: {
        type: Object
    },
    createdAt: {
        type: Date
    }
}))

module.exports = DiscussionSchema;