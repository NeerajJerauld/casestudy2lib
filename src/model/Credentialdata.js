const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.333')) ;


const Schema=mongoose.Schema;
const CredentialSchema=new Schema({
    username:{type:String,unique: true},
    password:String,
    name:String,
    email:String,
    
    
});

var Credentialdata=mongoose.model('credentialdata',CredentialSchema);
module.exports=Credentialdata;