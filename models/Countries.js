import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    title: { type: String},
    description: { type: String},
    size: { type: String}
});

countrySchema.virtual('links').get(function(){
    return {
        self: `/countries/${this._id}`
    }
})

const Country = mongoose.model("Country", countrySchema);

export default Country;