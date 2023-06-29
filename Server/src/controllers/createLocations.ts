import sequelize from "../db"
import fs from 'fs';

async function createLocations(){
    const { Locations } = sequelize.models
    try {
        const filePath = 'src/json/locations.json';
        const fileData = await fs.promises.readFile(filePath, 'utf-8');
        const data: any[] = JSON.parse(fileData);
        data.forEach(province => {
            Locations.findOrCreate({
                where: province,
                defaults: province
            })
        })
    } catch (error) {
        console.error('La cagaste mano', error)
    }
}

export default createLocations;