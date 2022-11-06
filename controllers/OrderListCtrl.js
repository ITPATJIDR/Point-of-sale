const OrderList = require('../models/OrderListModel')

const OrderListCtrl = {
	addOrder: async (req,res) =>{
		try{
			const OrderData = req.body
			const NewOrder = new OrderList({
				MenuList: OrderData,
			})
			await NewOrder.save()
			res.send("Add New Order Successfuly !!!")
		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	getOrder: async (req,res) =>{
		try{
			const {id} = req.body.id
			const fetchOrder = await OrderList.findById({_id:id})	
			res.json(fetchOrder)
		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	deleteOrder: async (req,res) =>{
		try{
			const id = req.body.id
			const fetchOrder = await OrderList.find({_id:id})
			if (fetchOrder.length != 0){
				await OrderList.deleteOne({_id:id})
				res.send("Delete Order Successfuly!!!")
			}else{
				res.send("ID not exists ?")
			}
		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	getAllOrder: async (req,res) =>{
		try{
			const fetchAllOrder = await OrderList.find() 
			res.json(fetchAllOrder)
		}catch(err){
			res.json({
				msg: err.message
			})
		}
	}
}

module.exports = OrderListCtrl;