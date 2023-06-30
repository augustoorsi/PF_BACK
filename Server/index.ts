import dotenv from 'dotenv';
import server from "./src/app";
import sequelize from './src/db';
import createServices from './src/controllers/createServices';
import createLocations from './src/controllers/createLocations'

dotenv.config();
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');

    await createServices();
    console.log('Services created');

    await createLocations();
    console.log('Locations created')

    server.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();