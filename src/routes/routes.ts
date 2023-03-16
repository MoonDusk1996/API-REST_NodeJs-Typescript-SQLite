import {
	IConvertParams,
	IResponseSuccess,
	IResponseError,
	ITransactrionsParams
} from '../@types';
import currencyConverter from '../controllers/currencyConverter';
import getTransactions from '../controllers/getTransactions';
import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

//index route
router.get('/', async (req: Request, res: Response) => {
	res.redirect('/api');
});

//convert route
router.get('/api/convert/:user_id/:source_currency/:source_amount/:destination_currency/', async (
	req: Request<IConvertParams>,
	res: Response<IResponseSuccess | IResponseError>) => {
	const { params } = req;
	currencyConverter(params)
		.then((data) => res.status(200).send(data))
		.catch((error) => {
			res.status(error.response.status).send({
				error: {
					status: error.response.status,
					message: error.response.data.error.message
				}
			});
		});
});

//transaction route
router.get('/api/transactions/:user_id/', async (
	req: Request<ITransactrionsParams>,
	res: Response<IResponseSuccess[] | IResponseError>) => {
	const { params } = req;
	getTransactions(params)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send({ 
				error: { 
					status: 500, 
					message: 'internal server error' 
				} 
			});
		});
});

//other routes
router.use(( req:Request, res:Response<IResponseError>)=>{
	res.status(404).send({
		error: {
			status: 404,
			message: 'route not found'
		}});
});

export default router;