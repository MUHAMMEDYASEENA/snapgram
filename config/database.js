const mongoose = require('mongoose')
const uri = //enter you connection string here;

exports.connectDb = function(){
    mongoose.connect(uri).then(()=>{
        console.log('database connected')
    }).catch((e)=>{
        console.log('an error occured during connecting to the database')
        console.log(e)
    })
}
