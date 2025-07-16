// export const cookieOption = {
//     httpOnly:true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite:"lax",
//     maxAge:1000*60*15, // 5 min
//     path:"/"
// }
export const cookieOption = {
  httpOnly: true,
  secure: true,           // ✅ required on Vercel + Render (HTTPS)
  sameSite: "None",       // ✅ required for cross-site cookies
  maxAge: 1000 * 60 * 15, // 15 minutes
  path: "/"
};
