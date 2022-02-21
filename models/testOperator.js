import mongoose   from "mongoose";

const  testOperatorSchema = mongoose.Schema({
   id : { type : String },
   operator : { type : String }
});

export default mongoose.model( 'testOperator', testOperatorSchema );
