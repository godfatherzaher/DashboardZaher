"use server"


import { connectToDB } from "./utils";
import { Product, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


//add user
export const addUser = async (formData) =>{
    const {username,email,password,phone,address,isAdmin,isActive} =
    Object.fromEntries(formData);

    var bcrypt = require('bcryptjs');
    try{
        connectToDB()

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
       
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        })
        await newUser.save()
    }catch(err){
        console.log(err)
        throw new Error("Faild to create user")
    }


    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};



//update user
export const updateUser = async (formData) =>{
    const {id,username,email,password,phone,address,isAdmin,isActive} =
    Object.fromEntries(formData);

    try{
        connectToDB()

        const updateFields = {
            username,email,password,phone,address,isAdmin,isActive
        }

        Object.keys(updateFields).forEach(
            (key) => 
                (updateFields[key]=== "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id,updateFields);

    }catch(err){
        console.log(err)
        throw new Error("Faild to update user!")
    }
 

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

//add product
export const addProduct = async (formData) =>{

    const {title,desc,price,stock,color,size} =
    Object.fromEntries(formData);

    try{
        connectToDB()

    
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        })
        await newProduct.save()
    }catch(err){
        console.log(err)
        throw new Error("Faild to create product")
    }


    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

//update product
export const updateProduct = async (formData) =>{
    const {id,title,desc,price,stock,color,size} =
    Object.fromEntries(formData);

    try{
        connectToDB()

        const updateFields = {
            title,desc,price,stock,color,size
        }

        Object.keys(updateFields).forEach(
            (key) => 
                (updateFields[key]=== "" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id,updateFields);

    }catch(err){
        console.log(err)
        throw new Error("Faild to update product!")
    }
 

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};


//delete user
export const deleteUser = async (formData) =>{

    const {id} =
    Object.fromEntries(formData);

    try{
        connectToDB()


        await User.findByIdAndDelete(id);

    }catch(err){
        console.log(err)
        throw new Error("Faild to delete user")
    }


    revalidatePath("/dashboard/users")
};


//delete product
export const deleteProduct = async (formData) =>{

    const {id} =
    Object.fromEntries(formData);

    try{
        connectToDB()


        await Product.findByIdAndDelete(id);

    }catch(err){
        console.log(err)
        throw new Error("Faild to delete product")
    }


    revalidatePath("/dashboard/products")
};


