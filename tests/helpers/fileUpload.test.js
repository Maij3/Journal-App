import {fileUpload} from "../../src/helpers";

describe('fileUpload.test', () => {
  it('Debe de subir el archivo correctamente a cloudinary',async () => {
    const imageUrl = "https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg"
    const resp  = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([blob] , 'example.jpg');
    const url = await fileUpload(file);
    expect( typeof url ).toBe('string')
  })
})
