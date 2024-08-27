const {Sequelize} =require("sequelize");

const sequelize =new Sequelize("firstdb","root","2004",{
    host: "localhost",
    dialect:"mysql",

});
sequelize.authenticate().then(()=>{
    console.log("connected to mysql successfully");
})
.catch((err) => {
      console.log("Unable to connect to mysql "+err);
});

// in order to use this in all other modules first export 
module.exports =sequelize;


