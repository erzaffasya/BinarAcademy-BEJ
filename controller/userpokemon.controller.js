const db = require('../models')
const UserPokemon = db.item;
const Op = require("sequelize");

class UserPokemonController {
    async getAllUserPokemon() {
        const getUserPokemon = await UserPokemon.findAll()
        return getUserPokemon
    }

    async getById(id) {
        const getUserPokemon = await UserPokemon.findByPk(id)

        return getUserPokemon
    }

    async search(nama_barang) {
        const getUserPokemon = await UserPokemon.findAll({
            where: {
                nama_barang: {
                    [Op.like]: `%${nama_barang}%`
                }
            }
        })

        return getUserPokemon
    }

    async insertData(body) {

        const create = await UserPokemon.create({
            user_id: body.user_id,
            item_id: body.item_id,
            status: body.status,
            total_harga: body.total_harga,
        })

        return create
    }

    async update(id, body) {

        UserPokemon.update({
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

        const deleteOne = delete await UserPokemon.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = UserPokemonController