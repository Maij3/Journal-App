export const fileUpload = async (file) => {
  if (!file) throw new Error("No tenemos archivos a subir");
  const cloudUrl = "https://api.cloudinary.com/v1_1/dcpb3uam1/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    console.log({ resp });
    if (!resp.ok) throw new Error("No se pudo subir el archivo");
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
