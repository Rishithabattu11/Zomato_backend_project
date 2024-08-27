const express=require("express");
// in order to create the user,first get the body from model
const {User,Restaurant,Menu,Order,Order_details,}=require("./model");
// in order to create the restaurant get the body first
// const Restaurant=require("./model");
// const { CLIENT_RENEG_LIMIT } = require("tls");
// whatever functions are available in express they are now used via app
const app=express();
const PORT=8080;

app.listen(PORT,(err)=>{
      if(err) console.log("Error"+err);
      else console.log("server started successfully  " +PORT);
});
app.use(express.json());
// create a single get api that gives some data in response
// it is like end point which on accessing i should get data
// app.get('/test',(req,res)=>{
    // sending response as a string 
    // res.status(200).send("hello from me!!");
    // sending response as an object-it will give proper structure and also multiple data can be sent in response
    // res.status(200).send({msg:"hello hi from me!!"});
// });

// post api to transfer data from frontend to backend 
// app.post('/login',(req,res)=>{
//      console.log(req.body);
//      res.status(200).send("logged in succesffuly");
// });


// 1.entering data into dbms
// trying to enter the data into the databse through api
app.post("/registerUser",async(req,res)=>{
    // ill receive the below ones from the backend
    const {name,email,password,phone_number}= req.body;
    console.log({name,email});
try{
const newUser= await User.create({
    name,email, password, phone_number
});
   res.status(201).send("user created successfully");
}
// console.log(newUser);
catch (err)
{
    console.log(err);
}   
});

// 2.login now !!
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const findUser=await User.findOne({where:{email:email}});
    if(findUser)
    {
        // console.log(req.body);
        const data=JSON.parse(JSON.stringify(findUser));
        // whole data is getting printed in terminal
        // console.log(data);
        // to get only password
        console.log(data.password);

        if(data.password== password)
        {
            res.status(200).send("logged in succesfully");
        }
        else{
            res.status(401).send("Invalid username or password");
        }
    }
    else{
        res.status(200).send("doesnt exist,kindly register");
    }
});

// 3.creating an post api to like enter the data into restaurant ..
app.post("/registerRestaurant", async(req,res)=>{
    const {rest_name,rest_address,rest_phone,rest_rating,rest_status}=req.body;
    console.log(req.body);
    try{
        const newRestaurant = await Restaurant.create({rest_name,rest_address,rest_phone,rest_rating,rest_status});
        if(newRestaurant)
        {
            res.status(201).send("restaurant added successfully");
        }

    }
    catch(err){
        console.log(err);
        res.status(400).send("something went wrong");
    }
});

// 4.creating api for menu!!
app.post("/addmenu",async(req,res)=>{
    const {restaurant_id,item_name,item_description,item_price,item_rating,item_availability,is_veg}=req.body;
    try{
       const newItem=await Menu.create({
        restaurant_id,item_name,item_description,item_price,item_rating,item_availability,is_veg
       })
       if(newItem)
        {
            res.status(201).send("menu added successfully");
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send("something went wrong");
    }
});

// order creation api
app.post("/createOrder",async(req,res)=>
{
    const {id,order_status,item_id,quantity,price,payment_method}=req.body;
    try{
       const newOrder=await Order_details.create({
        id,order_status,item_id,quantity,price,payment_method
       });
       if(newOrder)
       {
        //    when order is placed only then the order deatils table is filled if not no
         try{
            //find the restaurant id from item id 
            // from restaurant id get the menu and from that get the restaurant
            const restaurant_id_data=await Menu.findByPk(item_id); //here itemid is the pk of menu
            // console.log(menu); 
            const obj=JSON.parse(JSON.stringify(restaurant_id_data));
            // here from itemid i should get the restaurant id  
            // console.log(obj.restaurant_id);
            const restaurant_id=obj.restaurant_id;
            const order_id_obj= JSON.parse(JSON.stringify(newOrder));
            console.log(order_id_obj);
            const order_id= order_id_obj.order_id;
            // now im creating order
            const createOrder=await Order.create({
                order_id,restaurant_id,item_id,id,order_status,
            });
            if(createOrder){
                res.status(200).send("order placed successfully");
            }
        }
         catch(err){
            console.log(err);
            res.status(400).send("error occurred");
         }
       }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send("something went wrong");
    }
});