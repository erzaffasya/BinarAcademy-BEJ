const db = require('../models')
const Pokemon = db.pokemon;
const Op = require("sequelize");

class PokemonController {
    async getAllPokemon() {
        const getPokemon = await Pokemon.findAll()
        return getPokemon
    }

    async getById(id) {
        const getPokemon = await Pokemon.findByPk(id)

        return getPokemon
    }

    async search(nama_barang) {
        const getPokemon = await Pokemon.findAll({
            where: {
                nama_barang: {
                    [Op.like]: `%${nama_barang}%`
                }
            }
        })

        return getPokemon
    }

    async insertData(body) {

        const create = await Pokemon.create({
            user_id: body.user_id,
            pokemon_id: body.pokemon_id,
            status: body.status,
            total_harga: body.total_harga,
        })

        return create
    }

    async update(id, body) {

        Pokemon.update({
            user_id: body.user_id,
            pokemon_id: body.pokemon_id,
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

        const deleteOne = delete await Pokemon.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = PokemonController