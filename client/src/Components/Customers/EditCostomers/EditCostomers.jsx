import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageList = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];

      reader.onloadend = () => {
        imageList.push(reader.result); // Lưu đường dẫn hình ảnh được chọn
        if (imageList.length === files.length) {
          setSelectedImages([...imageList]); // Cập nhật danh sách hình ảnh
        }
      };

      reader.readAsDataURL(file); // Đọc hình ảnh dưới dạng Data URL
    }
  };

  return (
    <div>
      <input type='file' onChange={handleImageChange} multiple />
      {selectedImages.map((image, index) => (
        <img key={index} src={image} alt={`Selected ${index}`} />
      ))}
    </div>
  );
};

export default ImageUploader;
