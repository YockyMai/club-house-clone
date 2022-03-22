import passport from 'passport';

const GitHubStrategy = require('passport-github').Strategy;

passport.use(
	'github',
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: 'http://localhost:3001/auth/github/callback',
		},
		function (accessToken, refreshToken, profile, cb) {
			const user = {
				fullname: profile.displayName,
				username: profile.username,
				avatarUrl: profile.photos?.[0].value,
			};
			console.log(profile, cb);
		},
	),
);

export { passport };
