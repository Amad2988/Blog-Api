const mongoose = require('mongoose')
const skyscraperSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        height_in_feet: {
            type: Number,
            required: true
        },
        height_in_meters: {
            type: Number,
            required: true
        },
        number_of_stories: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now()
        }
    } 
)

module.exports = mongoose.model('skyscrapers', skyscraperSchema)