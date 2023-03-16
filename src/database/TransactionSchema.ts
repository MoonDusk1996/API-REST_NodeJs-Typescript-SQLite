import { IResponseSuccess } from '../@types';
import db from './db';

export default class TransactionSchema {
	transaction_id: string;
	user_id: string;
	source_currency: string;
	source_amount: string;
	destination_currency: string;
	destination_amount: string;
	conversion_used: string;
	date: string;

	constructor(data: IResponseSuccess) {
		this.transaction_id = data.transaction_id;
		this.user_id = data.user_id;
		this.source_currency = data.source_currency;
		this.source_amount = data.source_amount;
		this.destination_currency = data.destination_currency;
		this.destination_amount = data.destination_amount;
		this.conversion_used = data.conversion_used;
		this.date = data.date;
	}
	create() {
		db.serialize(() => {
			db.run('INSERT INTO transactions (transaction_id, user_id, source_currency, source_amount, destination_currency, destination_amount, conversion_used, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [this.transaction_id, this.user_id, this.source_currency, this.source_amount, this.destination_currency, this.destination_amount, this.conversion_used, this.date]);
		});
		console.log(('🗂️New transaction saved in the database'));
	}

}

