const fs = require("node:fs/promises");

async function readfile() {
  let data;
  try {
    data = await fs.readFile("./english/folders/most_1000_common.json", {
      encoding: "utf8",
    });
  } catch (err) {
    console.error(err);
  }
  return JSON.parse(data);
}

readfile().then((data) => {
  // console.log(data);

  for (const [word, wordInfo] of Object.entries(data)) {
    // console.log("word:", word, wordInfo);
    const content = wordInfo;
    writeFile(`./english/all_vocabulary2/${word}.json`, content);
  }
});

async function writeFile(path, content) {
  try {
    fs.writeFile(path, JSON.stringify(content));
  } catch (err) {
    console.error(err);
  }
}
