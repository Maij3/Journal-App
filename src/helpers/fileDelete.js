import cloudinary from "cloudinary/lib/cloudinary";

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET
})

export const fileDelete = (file) => {
  if (!file) throw new Error("No tenemos archivos a subir");
}

