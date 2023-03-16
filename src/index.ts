import app from './server';

app.listen(process.env.PORT, () => {
	console.log('⚡️Server online');
});
