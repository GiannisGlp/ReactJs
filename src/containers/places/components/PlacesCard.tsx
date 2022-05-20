import React, { useState, memo } from 'react';
import Card from '../../../shared/card/Card';
import MainButton from '../../../shared/buttons/MainButton';
import classes from './PlacesCard.module.css';
import { PlacesIF } from '../../../redux/initialState';
import MapIcon from '@mui/icons-material/Map';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import useMap from '../../../shared/map/useMap';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PlacesCard = (props: {
  data: PlacesIF;
  onClickMap: () => void;
  onClickDelete: (id: string) => void;
  onClickEdit: (title: string, description: string, id: string) => void;
  mapRef: any;
}) => {
  const { data, onClickMap, onClickDelete, onClickEdit, mapRef } = props;
  const [imageNumber, setImageNumber] = useState<number>(0);

  const googlePlaceImage = useMap(data.location, 12, mapRef, data.placeId);

  const onClickNextImageHandler = () => {
    setImageNumber((prevState) => prevState + 1);
  };
  const onClickPrevImageHandler = () => {
    setImageNumber((prevState) => prevState - 1);
  };

  return (
    <Card>
      <h1 className={classes.title}>{data.title}</h1>
      <p className={classes.paragraph}>{data.description}</p>
      <p className={classes.paragraph}>{data.address}</p>
      <div className={classes.imagesWrapper}>
        <button
          className={classes.arrowWrapper}
          type="button"
          onClick={onClickPrevImageHandler}
          disabled={imageNumber === 0}
        >
          <ArrowBackIosIcon />
        </button>

        <img
          className={classes.image}
          src={
            googlePlaceImage
              ? googlePlaceImage[imageNumber].getUrl({
                  maxWidth: 500,
                  maxHeight: 500,
                })
              : ''
          }
          alt={data.title}
        />

        <button
          className={classes.arrowWrapper}
          type="button"
          onClick={onClickNextImageHandler}
          disabled={imageNumber === 9}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className={classes.cardFooter}>
        <MainButton onClick={onClickMap} title={<MapIcon />} />
        <MainButton
          onClick={() => onClickEdit(data.title, data.description, data.id)}
          title={<EditIcon />}
        />
        <MainButton
          onClick={() => onClickDelete(data.id)}
          title={<DeleteOutlineIcon />}
        />
      </div>
    </Card>
  );
};

export default PlacesCard;
