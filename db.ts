import * as mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/Tododb', { useMongoClient: true });