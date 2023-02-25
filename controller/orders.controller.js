const db = require('../models')
const Order = db.item;
const Op = require("sequelize");

class OrderController {
    async getAllOrder() {
        const getOrder = await Order.findAll()
        return getOrder
    }

    async getById(id) {
        const getOrder = await Order.findByPk(id)

        return getOrder
    }

    async search(nama_barang) {
        const getOrder = await Order.findAll({
            where: {
                nama_barang: {
                    [Op.like]: `%${nama_barang}%`
                }
            }
        })

        return getOrder
    }

    async insertData(body) {

        const create = await Order.create({
            user_id: body.user_id,
            item_id: body.item_id,
            status: body.status,
            total_harga: body.total_harga,
        })

        return create
    }

    async update(id, body) {

        Order.update({
            user_id: body.user_id,
            item_id: body.item_id,
            status: body.status,
            total_harga: body.total_harga,
        }, {
            where: {
                id: id
            }
        })

        const resp = await this.getById(id)


        return resp
    }

    async deleteData(id) {

        const deleteOne = delete await Order.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = OrderController