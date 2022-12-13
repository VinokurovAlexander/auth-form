import mongoose from 'mongoose';

export const initDb = () => {
    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.DB_URL).then(() => {
        console.log('✅  Successfully connected to database');
    }).catch(e => {
        console.log(`❌  ${e.message}`)
    })
}