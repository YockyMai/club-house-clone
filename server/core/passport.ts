import passport from "passport";
import { VerifyCallback } from "passport-oauth2";
import { User } from "../models";
import { userModel } from "../../types/models/user";

const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/github/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: VerifyCallback
    ) => {
      try {
        const candidate = await User.findOne({
          where: {
            username: profile.username,
          },
        });

        if (!candidate) {
          const user = await User.create({
            fullname: profile.displayName,
            avatarUrl: profile.photos?.[0].value,
            phone: "892763713",
            username: profile.username,
          } as Omit<userModel, "isActive" | "createdAt" | "updatedAt" | "id">);

          return done(null, user);
        }

        return candidate;
      } catch (error) {
        error instanceof Error && done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

export { passport };
