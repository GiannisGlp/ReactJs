import React from 'react';
import Card from '../../../shared/card/Card';
import MainButton from '../../../shared/buttons/MainButton';
import classes from './PlacesCard.module.css';
import { PlacesIF } from '../pages/Places';
import MapIcon from '@mui/icons-material/Map';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const PlacesCard = (props: {
  data: PlacesIF;
  onClickMap: (location: PlacesIF['location']) => void;
  onClickDelete: (id: string) => void;
  onClickEdit: (id: string) => void;
}) => {
  const { data, onClickMap, onClickDelete, onClickEdit } = props;
  return (
    <Card>
      <h1 className={classes.title}>{data.title}</h1>
      <p className={classes.paragraph}>{data.description}</p>
      <p className={classes.paragraph}>{data.address}</p>
      <img className={classes.image} src={data.image} alt={data.title} />
      <div className={classes.cardFooter}>
        <MainButton
          onClick={() => onClickMap(data.location)}
          title={<MapIcon />}
        />
        <MainButton onClick={() => onClickEdit(data.id)} title={<EditIcon />} />
        <MainButton
          onClick={() => onClickDelete(data.id)}
          title={<DeleteOutlineIcon />}
        />
      </div>
    </Card>
  );
};

export default PlacesCard;
