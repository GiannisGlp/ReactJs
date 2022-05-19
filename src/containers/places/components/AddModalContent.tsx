import React from 'react';
import classes from './AddModalContent.module.css';

const AddModalContent = () => {
  return (
    <div className={classes.container}>
      <h3>Create New Place</h3>

      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          id="title"
          name="title"
          value="Title"
        />
        <input
          className={classes.input}
          type="text"
          id="address"
          name="address"
          value="Address"
        />

        <textarea
          className={classes.textArea}
          id="subject"
          name="subject"
          placeholder="Description"
        />
      </form>
    </div>
  );
};

export default AddModalContent;
