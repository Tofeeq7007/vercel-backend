// export const cookieOption = {
//     httpOnly:true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite:"lax",
//     maxAge:1000*60*15, // 5 min
//     path:"/"
// }
res.cookie("accessToken", token, {
  httpOnly: true,
  secure: true,           // ✅ required for cross-site cookies over HTTPS
  sameSite: "none",       // ✅ allow cross-site cookies
  path: "/",
  maxAge: 15 * 60 * 1000  // 15 minutes
});
