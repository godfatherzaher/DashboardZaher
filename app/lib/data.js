
import {Product, User} from "./models"
import {connectToDB} from "./utils"

//fetch data for users
export const fetchUsers = async (q,page) => {
 
    const regex = new RegExp(q,"i")

    const ITEM_PER_PAGE = 2;


    try{
        connectToDB();
        const count = await User.find({username:{ $regex:regex }}).count();
        const users = await User.find({username:{ $regex:regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
        return {count,users}
       
    }catch(err){
       console.log(err);
       throw new Error("Faild to fetch users")
    }
} 


//fetch data for single user
export const fetchUser = async (id) => {
    try{
        connectToDB();
        const user = await User.findById(id)
        return user
    }catch(err){
       console.log(err);
       throw new Error("Faild to fetch user")
    }
} 


//fetch data for single product
export const fetchproduct = async (id) => {
    try{
        connectToDB();
        const product = await Product.findById(id)
        return product
    }catch(err){
       console.log(err);
       throw new Error("Faild to fetch product")
    }
} 





//fetch data for products
export const fetchProducts = async(q,page) =>{

    const regex = new RegExp(q,"i")

    const ITEM_PER_PAGE = 2;
    
    try{
        connectToDB()
        const count = await Product.find({ title: { $regex: regex } }).count()
        const products = await Product.find({title:{ $regex:regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
        return {count,products}
    }catch(err){
        console.log(err);
        throw new Error("Faild to fetch proucts")
    }
}


//fetch data for one product
export const fetchProduct = async (id) => {
    try{
        connectToDB();
        const product = await Product.findById(id)
        return product
    }catch(err){
       console.log(err);
       throw new Error("Faild to fetch product")
    }
} 