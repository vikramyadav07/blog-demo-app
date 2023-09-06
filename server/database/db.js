import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-kx3aug3-shard-00-00.15ygvl0.mongodb.net:27017,ac-kx3aug3-shard-00-01.15ygvl0.mongodb.net:27017,ac-kx3aug3-shard-00-02.15ygvl0.mongodb.net:27017/?ssl=true&replicaSet=atlas-8nwxbz-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
        
    }
};

export default Connection;