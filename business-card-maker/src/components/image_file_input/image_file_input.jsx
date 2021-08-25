import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ImageUploader, name, onFileChange}) => {
  const inputRef = useRef();

  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    console.log(event.target.files[0]);
    const uploaded = await ImageUploader.upload(event.target.files[0]);
    console.log(uploaded);

    // onFileChange({
    //   name: 'fileName',
    //   url: 'url'
    // });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
}

export default ImageFileInput;
