const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "bigText.txt"), {
  encoding: "utf-8",
});
const ws = fs.createWriteStream(
  path.join(__dirname, "files", "new_bigText.txt")
);

// rs.on("data", (dataChunck) => {
//   ws.write(dataChunck);
// });

rs.pipe(ws);
