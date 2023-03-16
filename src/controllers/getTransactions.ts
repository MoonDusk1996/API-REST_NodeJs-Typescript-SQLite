import { IResponseSuccess, ITransactrionsParams } from '../@types';
import db from '../database/db';

export default async function getTransactions({ user_id }: ITransactrionsParams) {
	return new Promise<IResponseSuccess[]>((resolve, reject) => {
		db.serialize(() => {
			db.all('SELECT transaction_id, user_id, source_currency, source_amount, destination_currency, destination_amount, conversion_used, date FROM transactions WHERE user_id = ?',
				[user_id], (err: Error, row: IResponseSuccess[]) => {
					if (err) {
						console.error(err.message);
						reject(err);
					} else {
						resolve(row);
					}
				});
		});
	});
}