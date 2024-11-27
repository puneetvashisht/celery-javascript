const mongoose = require('mongoose');

//1. Connect to DB
var conn;
async function connectToDb(){
   conn = await mongoose.connect('mongodb://127.0.0.1:27017/eclerx_db')
   console.log('Connected!')


   // 2. Create a Schema
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number
    });


    // 3. Create a Model 
    const Product = mongoose.model('Product', productSchema);
    const product = new Product({ name: 'iPad', price: 33333.33 });

    // 4. Db Operation 
    const p  = await product.save();
    console.log(p);
}

connectToDb();




