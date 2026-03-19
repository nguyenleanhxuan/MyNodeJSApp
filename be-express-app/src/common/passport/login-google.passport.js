import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

export const initLoginGooglePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/google/callback",
      },
      function (accessTokenGG, refreshTokenGG, profile, cb) {
        // Hợp lệ
        return cb(null, "tokenGG");
        // Không hợp lệ
        return cb("error", null);
      },
    ),
  );
};
