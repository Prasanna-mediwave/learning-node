const path = require("path");
// const { add, sub, mul, divi } = require("./math");
// const fs = require("fs");
const fsPromises = require("fs/promises");

// console.log(path.parse(__filename));
// console.log(add(3, 3), sub(5, 3), mul(3, 3), divi(9, 9));

/*callback hell*/

// fs.readFile(
//   path.join(__dirname, "files", "start.txt"),
//   "utf-8",
//   (error, data) => {
//     if (error) throw error;
//     console.log(data);
//   }
// );
// fs.writeFile(
//   path.join(__dirname, "files", "newText.txt"),
//   "hello world new text page",
//   (error) => {
//     if (error) throw error;
//     console.log("new file add with given text");
//     fs.appendFile(
//       path.join(__dirname, "files", "newText.txt"),
//       "\n\nUpdate text ",
//       (error) => {
//         if (error) throw error;
//         console.log("text updated");
//         fs.rename(
//           path.join(__dirname, "files", "newText.txt"),
//           path.join(__dirname, "files", "renameText.txt"),
//           (error) => {
//             if (error) throw error;
//             console.log("text file rename");
//           }
//         );
//       }
//     );
//   }
// );

const file = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "start.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "newText.txt"),
      "hello world new text page"
    );
    console.log("new file add with given text");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "newText.txt"),
      "\n\nUpdate text "
    );
    console.log("text updated");
    await fsPromises.rename(
      path.join(__dirname, "files", "newText.txt"),
      path.join(__dirname, "files", "renameText.txt")
    );
    console.log("text file rename");
    await fsPromises.unlink(
      path.join(__dirname, "files", "start.txt"),
      "utf-8"
    );
    console.log("start file is deleted");
  } catch (error) {
    console.error(error);
  }
};

file();

/* to uncaught error*/
process.on("uncaughtException", (error) => {
  console.error(`There was an uncaught error : ${error}`);
  process.exit(1);
});
