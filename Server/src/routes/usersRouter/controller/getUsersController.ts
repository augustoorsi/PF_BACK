import  sequalize  from '../../../db'

const { Users } = sequalize.models

const getUsers =  async () => {
        //Es una prueba, cuando tengamos toda la bd se hace con  User.findAll().
        const response = await Users.findAll()
        return response;
    }

export default getUsers;