export const appConfig = {
  whatsappGroupLink: "", // link group
  nameHost: "KuroShop", // nama host 
  feeMin: 50, //minimal fee
  feeMax: 300, // max fee 
  apikey: "Kuroshop", // ga usah di ubah nanti error apikey uda premium 
  emailSender: {
    host: "okfajri45@gmail.com", // Gmail host
    port: 587, // ga usa di ubah, ga guna 
    secure: false, // false in
    auth: {
      user: "", // Gmail buat ngirim ke Gmail buyer 
      pass: "", // sandi aplikasi 
    },
    from: "KuroShop <okfajri45@gmail.com>",
  }, // ganti sendiri 
