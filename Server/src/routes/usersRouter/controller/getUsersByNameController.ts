import { Op } from 'sequelize'
import  sequalize  from '../../../db'

const { Users} = sequalize.models

const getUsersByName = async (name: string) => {

    const response = await Users.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%`}
        }
    })
    if(response.length > 0){
        return response
    }
    return 'No hay propiedades con ese nombre'
};

export default getUsersByName;