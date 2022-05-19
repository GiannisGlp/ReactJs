import React from 'react';
import classes from './AddModalContent.module.css';

interface AddModalContentProps {
  titleValue: string;
  addressValue?: string;
  descriptionValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
  setAddressValue: React.Dispatch<React.SetStateAction<string>>;
  setDescriptionValue: React.Dispatch<React.SetStateAction<string>>;
}
const AddModalContent = ({
  titleValue,
  addressValue,
  descriptionValue,
  setDescriptionValue,
  setAddressValue,
  setTitleValue,
}: AddModalContentProps) => {
  return (
    <div className={classes.container}>
      <h3>Create New Place</h3>

      <form className={classes.form}>
        <input
          className={classes.input}
          maxLength={30}
          placeholder="Title"
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue}
        />
        <input
          className={classes.input}
          maxLength={30}
          placeholder="Address"
          type="text"
          id="address"
          name="address"
          onChange={(e) => setAddressValue(e.target.value)}
          value={addressValue}
        />

        <textarea
          className={classes.textArea}
          id="subject"
          name="subject"
          placeholder="Description"
          onChange={(e) => setDescriptionValue(e.target.value)}
          value={descriptionValue}
        />
      </form>
    </div>
  );
};

export default AddModalContent;
