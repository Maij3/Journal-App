
import { v2 as cloudinary } from "cloudinary";

const { VITE_APP_API_SECRET , VITE_APP_CLOUD_NAME , VITE_APP_API_KEY } = import.meta.env;


cloudinary.config({
  cloud_name: dcpb3uam1,
  api_key: 398436662387658,
  api_secret: RFxhp-G29YLtu82Mfb5fObT8,
  secure: true
});

export const fileDelete = async () => {
  await cloudinary.v2.api.destroy(["uwo9xzclksmz6o3ccfpz.jpg"])
};
