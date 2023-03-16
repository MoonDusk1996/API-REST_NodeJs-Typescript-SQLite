import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:', (err) => {
	if (err) {
		return console.error(err.message);
	}
	db.run('CREATE TABLE transactions (transaction_id TEXT,user_id NUMBER, source_currency TEXT, source_amount NUMBER, destination_currency TEXT, destination_amount TEXT, conversion_used TEXT, date TEXT)');

	console.log('Connected to the in-memory SQlite database.'); 
});

export default db;