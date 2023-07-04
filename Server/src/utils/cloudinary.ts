import Cloudinary from "cloudinary";


const cloudinary = Cloudinary.v2;



cloudinary.config({
    cloud_name: "dpwcorihe",
    api_key: "263672788952279",
    api_secret: "U6GpSUyO1a9t8FTnyF29XTb9u7k",
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


