const mongoose = require("mongoose");
const dbConnection = async()=>{
    const URL = process.env.URL_DB;
    console.log(URL);
    const dbConfig = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        await mongoose.connect(URL, dbConfig);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}
module.exports = dbConnection;