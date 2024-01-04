import { products } from "./constants/data.js";
import Product from "./model/productShema.js";

const DefaultData = async () => {
    try {
      await  Product.insertMany(products);
        console.log("Data Imported Successfully..");
    } catch (error) {
        console.log("error while inserting default data");
        
    }

}


export default DefaultData;