import fs1 from "fs"
import fs from "fs/promises"
import path from "path"

let basepath = ("E:\\Documents\\JavaScript Code to Arrange Files According to their Extension")

let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    if (ext != "js" && ext != "json" && item.split(".").length>1){
        if (fs1.existsSync(path.join(basepath, ext))){
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}