import  { Schema, model, models } from "mongoose"

const PromptScehma=new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
    ,
    prompt:{
        type:String,
        required:[true,'prompt required']


    },
    tag:{
        type:String,
        required:[true,'tag required']
    }

})
const Prompt=models.Prompt || model('Prompt',PromptScehma)
export default Prompt;