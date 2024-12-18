require("dotenv").config();

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;
const dbSecret = process.env.MONGO_DB_SECRET;

module.exports = {
    database: `mongodb+srv://${username}:${password}@${dbName}`,
    secret: dbSecret,
};
