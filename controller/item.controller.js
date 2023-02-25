const db = require('../models')
const Item = db.item;
const Op = require("sequelize");

class ItemController {
    async getAllItem() {
        const getItem = await Item.findAll()
        return getItem
    }

    async getById(id) {
        const getItem = await Item.findByPk(id)

        return getItem
    }

    async search(nama_barang) {
        const getItem = await Item.findAll({
            where: {
                name: {
                    [Op.like]: `%${nama_barang}%`
                }
            }
        })

        return getItem
    }

    async insertData(body) {

        const create = await Item.create({
            nama_barang: body.nama_barang,
            stok: body.stok,
            harga: body.harga,
        })

        return create
    }

    async update(id, body) {

        Item.update({
            nama_barang: body.nama_barang,
            stok: body.stok,
            harga: body.harga,
        }, {
            where: {
                id: id
            }
        })

        const resp = await this.getById(id)


        return resp
    }

    async deleteData(id) {

        const deleteOne = delete await Item.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = ItemController