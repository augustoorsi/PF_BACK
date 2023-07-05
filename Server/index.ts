import server from "./src/app";
import sequelize from './src/db';
import createServices from './src/controllers/createServices';
import createLocations from './src/controllers/createLocations'
import {Server} from 'socket.io'
import http from 'http'

const PORT = 3001;

const socketServer = http.createServer(server)
const io = new Server(socketServer, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {

  socket.on('message', (message, props) => {
    const name = props.props
    socket.broadcast.emit('message', {
      body: message,
      from: name,
    })
  })

})

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

    socketServer.listen(3000, () => {
      console.log('Socket Server listen at 3000');

})
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
