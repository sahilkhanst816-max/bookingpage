const { ImageKit } = require("@imagekit/nodejs/index.js")

const imagekit = new ImageKit({
    privateKey: "private_gLxSk8f0VDEH01uCZkhAZJ2Znbs=",
});

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: 'image-jpg',
    });
    return result
}

module.exports = uploadFile