import { IConvertParams, IResponseSuccess } from '../@types';
import fetchExternalApi from '../services/fetchExternalApi';
import TransactionSchema from '../database/TransactionSchema';

export default async function currencyConverter(params: IConvertParams): Promise<IResponseSuccess> {
	//tratament
	params.source_currency = params.source_currency.toLocaleUpperCase();
	params.destination_currency = params.destination_currency.toLocaleUpperCase();

	//handle
	const data = await fetchExternalApi(params);
	const query = new TransactionSchema(data);
	query.create();
	return data;
}