import mongoose from "mongoose";
let isConnected=false;
export const connectDB=async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('mongodb already connected')
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'Share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true

        })
        isConnected=true
        console.log('Mongodb connected')

    }catch(error){
        console.log('err in db connect.........',error)

    }



}