const {DataTypes, INTEGER} =require("sequelize");
// sequelize is defined in dbconnect we need to export it
const sequelize=new require("./dbconnect");
// defining the table here that is fields-col
const User =sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    phone_number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    createdAt:{
        type: DataTypes.TIME
    },
    updatedAt:{
        type: DataTypes.TIME
    },
});

// defining the menu here 
const Menu = sequelize.define("Menu",{
    item_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    item_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    item_description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    item_price:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    item_rating:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    item_availability:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    is_veg:{
        type:DataTypes.BOOLEAN,
        allowNull:false,

    },
    restaurant_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    createdAt:{
        type: DataTypes.TIME
    },
    updatedAt:{
        type: DataTypes.TIME
    },
});


// defining the restaurant here
const Restaurant = sequelize.define("Restaurant",{
    restaurant_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rest_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rest_address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rest_phone:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    rest_rating:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    rest_status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,

    },
    createdAt:{
        type: DataTypes.TIME,
    },
    updatedAt:{
        type: DataTypes.TIME,
    },
});

const Order = sequelize.define("Order",{
    order_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    restaurant_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    item_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    order_status:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    createdAt:{
        type: DataTypes.TIME,
    },
    updatedAt:{
        type: DataTypes.TIME,
    },
});

const Order_details = sequelize.define("Order_details",{
    order_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    price:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    item_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    payment_method:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    createdAt:{
        type: DataTypes.TIME,
    },
    updatedAt:{
        type: DataTypes.TIME,
    },
});


// relation menu belongs to a particular restaurant 
Menu.belongsTo(Restaurant,{foreignKey:"restaurant_id"});
// restaurant can have many items 
Restaurant.hasMany(Menu,{foreignKey:"restaurant_id"});
User.hasMany(Order,{foreignKey:"id"});
Order.belongsTo(User,{foreignKey:"id"});
Order_details.belongsTo(Order,{foreignkey:"order_id"});
Order.hasMany(Order_details,{foreignKey:"order_id"});
// export this user so that we can access it from other modules
// module.exports={ User, Menu, Restaurant};
module.exports= {User:User ,
    Restaurant:Restaurant,
    Menu:Menu,
    Order:Order,Order_details:Order_details};

// table is constructed now navigate to filling up the data in table