import express from "express"
const app = express();
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});



app.get("/",async(req,res)=>{

    const data = await prisma.user.findMany();
    res.json({
        "message": "get endpoint"
    })
})

app.post("/",async(req,res)=>{
        await prisma.user.create({
            data:{
                username:Math.random().toString(),
                password:Math.random().toString()
            }
        })
    res.json({
        "message":"post endpont"
    })
})

app.listen(3000 ,()=>{
    console.log("you are on server 3000")
});