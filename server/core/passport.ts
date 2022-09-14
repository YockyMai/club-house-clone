import passport from "passport";
import { VerifyCallback } from "passport-oauth2";

const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/github/callback",
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      cb: VerifyCallback
    ) {
      const user = {
        fullname: profile.displayName,
        avatarUrl: profile.photos?.[0].value,
      };
      console.log(profile, cb);
      cb();
    }
  )
);

export { passport };
