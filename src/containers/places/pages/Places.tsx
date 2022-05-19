import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placesSelector } from '../../../redux/reducers/placesReducer';
import {
  getPlacesByUserId,
  createPlace,
  deletePlace,
} from '../../../redux/actions/placesActions';
import classes from './Places.module.css';
import Map from '../../../shared/map/Map';
import Modal from '../../../shared/modal/Modal';
import PlacesCard from '../components/PlacesCard';
import MainButton from '../../../shared/buttons/MainButton';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '../../../shared/pagination/Pagination';
import usePagination from '../../../shared/pagination/usePagination';
import AddModalContent from '../components/AddModalContent';
import { PlacesIF } from '../../../redux/initialState';

const Places = () => {
  const dispatch = useDispatch();
  const { placesData } = useSelector(placesSelector);
  const [displayMapModal, setDisplayMapModal] = useState<boolean>(false);
  const [displayAddModal, setDisplayAddModal] = useState<boolean>(false);
  const [mapLocation, setMapLocation] = useState<PlacesIF['location']>({
    lat: 0,
    lng: 0,
  });

  const [titleValue, setTitleValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [descriptionValue, setDesciptionValue] = useState('');

  const onClickMapHandler = (location: PlacesIF['location']) => {
    setMapLocation(location);
    setDisplayMapModal(true);
  };

  const onClickEdit = (id: string) => {
    console.log(id);
  };

  const dataLimit = 10;
  const pageLimit = Math.ceil(placesData.length / dataLimit);

  const {
    goToNextPage,
    goToPreviousPage,
    changePage,
    pages,
    currentPage,
    paginatedData,
    paginatedGroup,
  } = usePagination(placesData, dataLimit, pageLimit);

  const MapModalContent = () => {
    return (
      <div className={classes.mapContainer}>
        <Map center={mapLocation} zoom={14} />
      </div>
    );
  };
  console.log('placesdata', placesData);
  const clearAddPlaceForm = () => {
    setDisplayAddModal(false);
    setTitleValue('');
    setAddressValue('');
    setDesciptionValue('');
  };

  const addNewPlaceHandler = () => {
    dispatch(
      createPlace({
        address: addressValue,
        title: titleValue,
        description: descriptionValue,
        creator: '62194ddcbc640c5dad53639d',
      })
    );
    clearAddPlaceForm();
  };
  const onClickDeleteHandler = (id: string) => {
    dispatch(deletePlace({ pid: id }));
  };

  useEffect(() => {
    dispatch(getPlacesByUserId({ uid: '62194ddcbc640c5dad53639d' }));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.addButtonContainer}>
        <MainButton
          onClick={() => setDisplayAddModal(true)}
          title={<AddIcon />}
        />
      </div>
      {/* Add Modal */}
      <Modal
        showModal={displayAddModal}
        setShowModal={setDisplayAddModal}
        firstButtonAction={clearAddPlaceForm}
        firstButtonTitle="Cancel"
        secondButtonTitle="Create"
        secondButton={true}
        okButton={addNewPlaceHandler}
        content={
          <AddModalContent
            titleValue={titleValue}
            addressValue={addressValue}
            descriptionValue={descriptionValue}
            setAddressValue={setAddressValue}
            setDescriptionValue={setDesciptionValue}
            setTitleValue={setTitleValue}
          />
        }
      />
      {/*Map Modal  */}
      <Modal
        showModal={displayMapModal}
        setShowModal={setDisplayMapModal}
        firstButtonAction={() => setDisplayMapModal(false)}
        firstButtonTitle="Ok"
        content={<MapModalContent />}
      />

      {placesData.length > 0 ? (
        <>
          <Pagination
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            changePage={changePage}
            pages={pages}
            currentPage={currentPage}
            paginatedGroup={paginatedGroup}
          >
            <div className={classes.cardsWrapper}>
              {paginatedData?.map((place: PlacesIF) => {
                return (
                  <PlacesCard
                    key={place.id}
                    data={place}
                    onClickMap={onClickMapHandler}
                    onClickDelete={onClickDeleteHandler}
                    onClickEdit={onClickEdit}
                  />
                );
              })}
            </div>
          </Pagination>
        </>
      ) : null}
    </div>
  );
};

export default Places;
