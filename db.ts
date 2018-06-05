import * as mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/identity', { useMongoClient: true });