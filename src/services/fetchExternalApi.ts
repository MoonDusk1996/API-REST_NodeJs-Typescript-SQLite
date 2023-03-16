import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { IConvertParams, IResponseSuccess } from '../@types';

export default async function fetchExternalApi(params: IConvertParams): Promise<IResponseSuccess> {
	const externalApi = `https://api.apilayer.com/exchangerates_data/convert?to=${params.destination_currency}&from=${params.source_currency}&amount=${params.source_amount}`;
	try {
		const transaction_id = uuid();
		const response = await axios.get(externalApi, {
			headers: {
				'apikey': process.env.TOKEN
			}
		});
		const { user_id, source_currency, destination_currency, source_amount } = params;
		const conversion_used = source_currency + '/' + destination_currency;
		const destination_amount = response.data.result;
		const date = new Date().toUTCString();
		const responseData: IResponseSuccess = Object.assign({ transaction_id, user_id, source_currency, source_amount, destination_currency, destination_amount, conversion_used, date });
		console.log(responseData);
		return (responseData);
	} catch (error) {
		console.log(error);
		throw error;
	}

}