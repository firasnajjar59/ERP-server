const mongoose=require("mongoose")

mongoose.set('strictQuery', true);
module.exports= mongoose.connect(process.env.API_DB_URL)