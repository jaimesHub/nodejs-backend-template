const { notify } = require("./src/app");
const app = require("./src/app");

const PORT = 3055;
// khoi tao server
const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce starts with port ${PORT}`);
});

// process phương thức quy trình trong nodejs
// process.on("SIGINT", () => {
//   server.close(() => console.log(`Exit Server Express`));
//   //   notify.send("App crassh");
// });
