import { MongoClient } from 'mongodb';

 const mongoDBConnector = async ()=>{
    const dbURL = process.env.MONGODB_URL
    const client = await MongoClient.connect(dbURL);
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
    return {meetupsCollection, client}
}


export default mongoDBConnector;