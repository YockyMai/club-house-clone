import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
	path: './server/.env',
});

import { passport } from './core/passport';

const app = express(); //инициализируем сервер с помощью express!q

app.get('/test', (req, res) => {
	// принимает url и функцию
	res.send('Hello'); // send отправляет html броаузеру
});

app.get('/auth/github', passport.authenticate('github'));

app.get(
	'/auth/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	(req, res) => {
		// Successful authentication, redirect home.
		res.redirect('/');
	},
);

app.listen(3001, () => {
	console.log('Server launched...');
});
