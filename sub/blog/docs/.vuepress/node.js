const fs = require("fs");

fs.readdir("../blog", (err, files) => {
  if (!err) {
    const sidebarList = [];
    files.map(fileName => {
      if (fileName !== "README.md") {
        const fileNameSplit = fileName.replace(/\.md$/, "");
        sidebarList.push({
          title: fileNameSplit,
          path: fileNameSplit,
        });
      }
    });
    console.log(sidebarList);
  }
});
