const fs = require("fs")
const path = require("path")

const pictureFolder = path.resolve(__dirname, "./src/assets/pictures");
const pictureFolderFromComponent = "../../assets/pictures";

const videoFolder = path.resolve(__dirname, "./src/assets/videos");
const videoFolderFromComponent = "../../assets/videos";

let picNames = fs.readdirSync(pictureFolder);
picNames = picNames.map(name => {
  return pictureFolderFromComponent + "/" + name;
})

let vidNames = fs.readdirSync(videoFolder);
vidNames = vidNames.map(name => {
  return videoFolderFromComponent + "/" + name;
})

fs.writeFileSync(path.resolve(__dirname, "./src/assets/pictureNames.json"), JSON.stringify(picNames));
fs.writeFileSync(path.resolve(__dirname, "./src/assets/videoNames.json"), JSON.stringify(vidNames));
