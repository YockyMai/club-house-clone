import passport from "passport";
import { VerifyCallback } from "passport-oauth2";
import { User } from "../models/models";
import createJwtToken from "../utils/createJwtToken";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

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
            phone: profile.phone || "",
            username: profile.username,
          });

          return done(null, {
            ...user.toJSON(),
            token: createJwtToken(user.toJSON()),
          });
        }

        return done(null, {
          ...candidate.toJSON(),
          token: createJwtToken(candidate.toJSON()),
        });
      } catch (e) {
        console.log(e);
        e instanceof Error && done(e);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      done("User not found");
    }
    done(null, user);
  } catch (e) {
    console.log(e);
    done(e);
  }
});

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ where: { id: jwt_payload.id } });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (e) {
      console.log(e);
      done(e);
    }
  })
);

const cookieExtractor = (req: any) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};

export { passport };
