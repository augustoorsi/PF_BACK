import sequelize from "../db"
import fs from 'fs';

async function createServices(){
    const { Services } = sequelize.models
    try {
        const filePath = 'src/json/services.json';
        const fileData = await fs.promises.readFile(filePath, 'utf-8');
        const data: any[] = JSON.parse(fileData);
        data.forEach(service => {
            Services.findOrCreate({
                where: service,
                defaults: service
            })
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

export default createServices;