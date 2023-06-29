import Cloudinary from "cloudinary";
import dotenv from 'dotenv';
dotenv.config()

const cloudinary = Cloudinary.v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET } = process.env;


cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET,
    secure: true
});

export const imageUpdate = async (filePath: any) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Argentina'
    })
}

export const imageDestroy = async (id: string) => {
    return await cloudinary.uploader.destroy(id)
}


