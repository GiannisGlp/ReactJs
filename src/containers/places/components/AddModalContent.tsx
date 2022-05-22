import React from 'react';
import classes from './AddModalContent.module.css';
import {
  LayoutText,
  LayoutBackground,
  LayoutInput,
} from '../../../utilities/layout';

interface AddModalContentProps {
  titlePlaceholder?: string;
  descriptionPlaceholder?: string;
  modalTitle: string;
  titleValue: string;
  address?: boolean;
  addressValue?: string;
  descriptionValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
  setAddressValue?: React.Dispatch<React.SetStateAction<string>>;
  setDescriptionValue: React.Dispatch<React.SetStateAction<string>>;
}
const AddModalContent = ({
  titleValue,
  address = true,
  addressValue,
  descriptionValue,
  setDescriptionValue,
  setAddressValue = () => {},
  setTitleValue,
  modalTitle,
  titlePlaceholder = 'Title',
  descriptionPlaceholder = 'Description',
}: AddModalContentProps) => {
  return (
    <div className={classes.container}>
      <h3 className={LayoutText(classes.modalTitle)}>{modalTitle}</h3>

      <form className={classes.form}>
        <input
          className={LayoutInput(classes.input)}
          maxLength={30}
          placeholder={titlePlaceholder}
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue}
        />
        {address && (
          <input
            className={LayoutInput(classes.input)}
            maxLength={30}
            placeholder="Address"
            type="text"
            id="address"
            name="address"
            onChange={(e) => setAddressValue(e.target.value)}
            value={addressValue}
          />
        )}

        <textarea
          className={LayoutInput(classes.textArea)}
          id="subject"
          name="subject"
          placeholder={descriptionPlaceholder}
          onChange={(e) => setDescriptionValue(e.target.value)}
          value={descriptionValue}
        />
      </form>
    </div>
  );
};

export default AddModalContent;
