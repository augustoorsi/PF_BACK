import sequelize from "../../../db";

const { Ratings } = sequelize.models

const getRatingController = (id: any, active:any = false) =>{
    if(active){
        const ratings = Ratings.findAll({
            where: {
                id_property :id,
                is_active: true
            }
        })
        return ratings
    }
    else if(id){
        const ratings = Ratings.findAll({
            where: {id_property :id}
        })
        return ratings
    }
}

export default getRatingController