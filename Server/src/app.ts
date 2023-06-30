import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes';
import cors from 'cors';
import multer from 'multer';
import sequelize from './db';
import mercadopago from 'mercadopago'

const { Rents, Users, Properties } = sequelize.models

interface CustomError extends Error {
    status?: number;
}

const server: Express = express();

mercadopago.configurations.setAccessToken("TEST-7287226739695489-062410-edcf3670bf07cd7e101763f59926a773-761450099");

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use(
    cors({
      origin: 'https://pf-airbnb.vercel.app',
      credentials: true,
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
      methods: 'GET, POST, OPTIONS, PUT, DELETE',
    })
);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/public/images')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

server.use(upload.any())

server.use('/', router)

server.use((err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    const status: number | undefined = err.status || 500;
    const message: string | undefined = err.message || err.toString();
    console.error(err);
    res.status(status).send(message)
});

server.post('/process_payment', (req, res) => {
    let payment_data = {
      token: req.body.formData.token,
      issuer_id: req.body.formData.issuer_id,
      payment_method_id: req.body.formData.payment_method_id,
      transaction_amount: req.body.formData.transaction_amount,
      installments: req.body.formData.installments,
      payer: req.body.formData.payer
    }
    console.log(payment_data)
    mercadopago.payment.save(payment_data)
      .then(function(response) {
        const { status, status_detail, id } = response.body;
        console.log(response)
        res.status(response.status).json({ status, status_detail, id });
      })
      .catch(function(error) {
        console.error(error);
      });
  })

export default server;