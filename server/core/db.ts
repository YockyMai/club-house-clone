const {MongoClient} = require('mongodb');

const URL =
    'mongodb+srv://ValeriyGrigorev:Dfkthf15102003@cluster0.1tyia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(URL);

(async () => {
    try {
        await client.connect();
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.error('Unable to connect to the database:', e);
    }
})();

export {client};
