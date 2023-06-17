const Order = require("../models/Order");
const Restaurant = require("../models/Restaurant");

exports.getOrders = async(req, res)=>{
    const orders = await Order.find({})
    .populate("restaurant", { Restaurant });

    res.status(200).json({
        orders: orders.reverse()
    });
}

exports.makeOrder = async(req, res)=>{
    // const { _id } = req.query;
    const {
        name,
        description,
        phone,
        orders,
        ordersPaid,
        total,
        balance,
        restaurant
    } = req.body;

    const _order = new Order({
        name,
        description,
        phone,
        orders,
        ordersPaid,
        total,
        balance,
        restaurant
    });

    if (await _order.save()) {
            res.send({
            success: true,
            message: "Order placed"
        });
    }
}
