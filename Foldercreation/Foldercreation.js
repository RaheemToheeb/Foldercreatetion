const fs = require("fs");
const os = require("os");

if (!fs.existsSync("../Foldercreation/set06")) {
  fs.mkdir("../Foldercreation/set06", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("folder created successfully");
    }
  });
} else {
  fs.rename("../Foldercreation/set06", "../Foldercreation/set05", (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("folder rename successfuuly");
    }
  });
}
