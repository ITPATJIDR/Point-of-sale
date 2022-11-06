const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const PORT = process.env.PORT || 5000

app.use(cookieParser());
app.use(express.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}));

app.use("/menu",require("./routers/MenuRouter"))
app.use("/order",require("./routers/OrderListRouter"))

app.get("/",(req,res)=>{
	res.send("HI Welcome to Point of sale made by ITPAT...")
})

mongoose.connect(
	keys.mogodbURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) =>{
		if(err) throw err;
		console.log("Connect to MongoDB");
	}
)

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})