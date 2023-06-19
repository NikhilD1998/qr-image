import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Enter a URL:", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("File saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Enter a valid URL!");
    }
  });
