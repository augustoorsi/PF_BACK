import  sequalize  from '../../../db'

const { Properties, Ratings, Services, Rents, Users } = sequalize.models

const getPropById = async(id: number) => {
    const response = await Properties.findAll({
        include: [{
            model: Services,
            attributes: ['name','icon'],
            through: {
                attributes: []
            }},
            {
                model: Rents,
            
            },
            {
                model: Users
            },
            {
                model: Ratings,
                include: {
                    model: Users
                }
            }
        ]
            
        ,
        where: {
            id_property: id,
            is_active: true
        }
    })
    return response;
};

export default getPropById;