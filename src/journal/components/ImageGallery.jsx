import { ImageList, ImageListItem, Skeleton } from "@mui/material";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {preloaderImage} from "../../store/journal";

//ImageGallery

export const ImageGallery = ({ images = [] }) => {

  const dispatch = useDispatch()

  const { isLoading }  = useSelector(state => state.journal)

  useEffect(() => {
    setTimeout(() => {
      dispatch(preloaderImage()) 
    }, 3000);
  }, []);

  return (
    <ImageList sx={{ width: "100%", height: 450 }} cols={3} >
      {images.map((image, index) => (
        <ImageListItem key={index}>
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          ) : (
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={image}
              loading="lazy"
              style={{ objectFit: "contain" }}
            />
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
};
