import sqlite3 from 'sqlite3';
import { DbSchema, ConvertParams } from '../@types';

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});
db.run('CREATE TABLE transactions (user_id NUMBER, source_currency TEXT, source_amount NUMBER, destination_currency TEXT,conversion_used TEXT, date TEXT)');

export async function saveToDatabase(DbSchema: DbSchema) {
    db.serialize(() => {
        db.run('INSERT INTO transactions (user_id, source_currency, source_amount, destination_currency, conversion_used, date) VALUES (?, ?, ?, ?, ?, ?)', [DbSchema.user_id, DbSchema.source_currency, DbSchema.source_amount, DbSchema.destination_currency, DbSchema.conversion_used, DbSchema.date]);
    });
    console.log(("🗂️New transaction saved in the database"));
}
export async function getTransactions(user_id: string) {
    return new Promise<DbSchema[]>((resolve, reject) => {
        db.serialize(() => {
            db.all('SELECT user_id, source_currency, source_amount, destination_currency, conversion_used, date FROM transactions WHERE user_id = ?', [user_id], (err: Error, row: DbSchema[]) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        })
    });
}