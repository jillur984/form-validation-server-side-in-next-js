import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
 // for add user

 export const addUser=async(formData)=>{
    "use server";

    const name=formData.get("name")
    const email=formData.get("email")

    const userData={
        name,
        email
    }
try{
await connectMongo()

// insert into database
await new User(userData).save()

// revalidate users
revalidatePath("/")

}
catch(err){
console.error(err)
}
       
}

// for get user
export const getUsers=async()=>{
    "use server";
   await connectMongo()
  
  // get user from Database

 const users= await User.find()
 return users
    
}
