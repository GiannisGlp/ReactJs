import React, { useState, ReactNode } from 'react';
import Card from '../../../shared/card/Card';
import MainButton from '../../../shared/buttons/MainButton';
import classes from './PlacesCard.module.css';
import { PlacesIF } from '../../../redux/initialState';
import MapIcon from '@mui/icons-material/Map';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import useMap from '../../../CustomHooks/useMap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import StarIcon from '@mui/icons-material/Star';
import { LayoutText, LayoutBackground } from '../../../utilities/layout';

type LikesIconsWrapperProps = {
  children: ReactNode;
  active: boolean;
};
const PlacesCard = (props: {
  data: PlacesIF;
  onClickMap: () => void;
  onClickDelete: (id: string, title: string) => void;
  onClickEdit: (title: string, description: string, id: string) => void;
  mapRef: any;
}) => {
  const { data, onClickMap, onClickDelete, onClickEdit, mapRef } = props;
  const [imageNumber, setImageNumber] = useState<number>(0);
  const [colorClass, setColorClass] = useState<string>('red');

  const googlePlaceImage = useMap(data.location, 12, mapRef, data.placeId);

  const LikesIconWraper = ({ children, active }: LikesIconsWrapperProps) => {
    return (
      <div
        className={active ? classes.imagesLikesRed : classes.imagesLikesGrey}
        onClick={() => console.log('clicked')}
      >
        {children}
      </div>
    );
  };

  const onClickNextImageHandler = () => {
    setImageNumber((prevState) => prevState + 1);
  };
  const onClickPrevImageHandler = () => {
    setImageNumber((prevState) => prevState - 1);
  };
  console.log(data);
  return (
    <Card>
      <h1 className={LayoutText(classes.title)}>{data.title}</h1>
      <p className={LayoutText(classes.paragraph)}>{data.description}</p>
      <p className={LayoutText(classes.paragraph)}>{data.address}</p>
      <div className={classes.imagesLikesWrapper}>
        <LikesIconWraper active={data.preferences.check}>
          <LibraryAddCheckIcon fontSize="small" />
        </LikesIconWraper>
        <LikesIconWraper active={data.preferences.favorite}>
          <FavoriteIcon fontSize="small" />
        </LikesIconWraper>
        <LikesIconWraper active={data.preferences.like}>
          <StarIcon fontSize="small" />
        </LikesIconWraper>
      </div>

      <img
        className={classes.image}
        src={
          googlePlaceImage
            ? googlePlaceImage[imageNumber].getUrl({
                maxWidth: 450,
                maxHeight: 450,
              })
            : ''
        }
        alt={data.title}
      />
      <div className={classes.arrowWrapper}>
        <button
          className={LayoutBackground(classes.arrow)}
          type="button"
          onClick={onClickPrevImageHandler}
          disabled={imageNumber === 0}
        >
          <ArrowCircleLeftIcon />
        </button>
        <p className={LayoutText(classes.paragraph)}>{imageNumber + 1}</p>
        <button
          className={LayoutBackground(classes.arrow)}
          type="button"
          onClick={onClickNextImageHandler}
          disabled={imageNumber === 9}
        >
          <ArrowCircleRightIcon />
        </button>
      </div>

      {/* </div> */}
      <div className={classes.cardFooter}>
        <MainButton onClick={onClickMap} title={<MapIcon />} />
        <MainButton
          onClick={() => onClickEdit(data.title, data.description, data.id)}
          title={<EditIcon />}
        />
        <MainButton
          onClick={() => onClickDelete(data.id, data.title)}
          title={<DeleteOutlineIcon />}
        />
      </div>
    </Card>
  );
};

export default PlacesCard;
