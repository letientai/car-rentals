import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="imageUpload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          // onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div
              className="drop__image"
              style={isDragging ? { color: "red" } : undefined}
              {...dragProps}
            >
              <CloudUploadIcon className="icon__upload" />
              <p>DROP HERE</p>
              <div className="listImg">
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item mx-2 my-2 position-relative"
                    >
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <HighlightOffIcon
                          onClick={() => onImageRemove(index)}
                          className="btn-delete"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <button onClick={onImageUpload} className="btn btn__upload">
              Upload image
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll} className="btn btn__removeAll">
              Remove all images
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
