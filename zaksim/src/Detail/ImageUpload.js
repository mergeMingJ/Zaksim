import axios from "axios";
import { React, useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import http from "../common/axios/index";

export default function ImageUpload() {
  const [pictures, setPictures] = useState([]);
  const [imgUrl, setImgurl] = useState([]);
  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
    if (picture.length > 0) {
      let index = picture.length - 1;
      let formData = new FormData();
      formData.append("file", picture[index], picture[index].name);
      http
        .post("/img/main", formData)
        .then((res) => {
          setImgurl(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <ImageUploader
      withIcon={true}
      buttonText="인증 사진을 선택하세요."
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
      withPreview={true}
    />
  );
}
