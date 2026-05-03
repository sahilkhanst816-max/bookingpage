const ImageKit = require("imagekit"); // Sahi import

// Vercel me ye teeno chizein env me add karni padengi
const imagekit = new ImageKit({
    publicKey: "public_gc4eDipbf9ArNvfQ06T8xrtGbhc=",
    privateKey: "private_yVd+kKHszAgfI6P249RgHsVA4R0=",
    urlEndpoint: "https://ik.imagekit.io/1t527mz5tt"
});

async function uploadFile(buffer) {
    try {
        const result = await imagekit.upload({ // .files.upload nahi, sirf .upload hota hai
            file: buffer.toString("base64"),
            fileName: 'booking-image.jpg',
        });
        return result;
    } catch (error) {
        console.log("ImageKit Error: ", error);
        throw new Error("ImageKit upload failed");
    }
}

module.exports = uploadFile;