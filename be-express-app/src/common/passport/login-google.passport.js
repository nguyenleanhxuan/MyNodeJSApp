import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "../prisma/generated/connect.prisma.js";
import { tokenService } from "../../services/token.service.js";

export const initLoginGooglePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/google/callback",
      },
      async function (accessTokenGG, refreshTokenGG, profile, cb) {
        try {
          const fullName = profile.displayName;
          const googleId = profile.id;
          const email = profile.emails?.[0]?.value;
          const avatar = profile.photos?.[0]?.value;

          if (!email) {
            return cb(new Error("Google account does not include email"), null);
          }

          let user = await prisma.users.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) {
            user = await prisma.users.create({
              data: {
                full_name: fullName,
                email: email,
                googleId: googleId,
                avatar: avatar,
              },
            });
          }

          const accessToken = await tokenService.createAccessToken(user);
          const refreshToken = await tokenService.createRefreshToken(user);

          return cb(null, { accessToken, refreshToken });
        } catch (error) {
          return cb(error, null);
        }
      },
    ),
  );
};
