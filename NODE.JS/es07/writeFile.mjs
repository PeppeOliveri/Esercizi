import { writeFile } from "node:fs";

writeFile("message.txt", "Hello Node.js this is a text file", "utf8", (err) => {
  if (err) throw err;
  console.log("file created");
});
