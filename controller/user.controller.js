const db = require('../models')
const User = db.user;
const Op = require("sequelize");

class UserController {
    async getAllUser() {
        const getUser = await User.findAll()
        return getUser
    }

    async getById(id) {
        const getUser = await User.findByPk(id)

        return getUser
    }

    async search(full_name) {
        const getUser = await User.findAll({
            where: {
                full_name: {
                    [Op.like]: `%${full_name}%`
                }
            }
        })

        return getUser
    }

    async insertData(body) {

        const create = await User.create({
            full_name: body.full_name,
            user: body.user,
            level: body.level,
            status: body.status,
        })

        return create
    }

    async update(id, body) {

        User.update({
            full_name: body.full_name,
            user: body.user,
            level: body.level,
            status: body.status,
        }, {
            where: {
                id: id
            }
        })

        const resp = await this.getById(id)


        return resp
    }

    async deleteData(id) {

        const deleteOne = delete await User.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = UserController