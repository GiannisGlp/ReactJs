import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placesSelector } from '../../../redux/reducers/placesReducer';
import {
  getPlacesByUserId,
  createPlace,
  deletePlace,
  updatePlace,
} from '../../../redux/actions/placesActions';
import classes from './Places.module.css';
import Modal from '../../../shared/modal/Modal';
import PlacesCard from '../components/PlacesCard';
import MainButton from '../../../shared/buttons/MainButton';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '../../../shared/pagination/Pagination';
import usePagination from '../../../shared/pagination/usePagination';
import AddModalContent from '../components/AddModalContent';
import { PlacesIF } from '../../../redux/initialState';

interface Placeholders {
  title: string;
  description: string;
  id: string;
}

const Places = () => {
  const dispatch = useDispatch();
  const { placesData } = useSelector(placesSelector);
  const mapRef = useRef<any>(null);
  const [displayMapModal, setDisplayMapModal] = useState<boolean>(false);
  const [displayAddModal, setDisplayAddModal] = useState<boolean>(false);
  const [displayEditModal, setDisplayEditModal] = useState<boolean>(false);
  const [editModalValues, setEditModalValues] = useState<Placeholders>({
    title: '',
    description: '',
    id: '',
  });

  const [titleValue, setTitleValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [descriptionValue, setDesciptionValue] = useState('');

  const onClickMapHandler = useCallback(() => {
    setDisplayMapModal(true);
  }, []);

  const onClickEditHandler = (
    title: string,
    description: string,
    id: string
  ) => {
    setEditModalValues({ title, description, id });
    setDisplayEditModal(true);
  };

  const onClickOKEditHandler = () => {
    dispatch(
      updatePlace(
        { pid: editModalValues.id },
        { title: titleValue, description: descriptionValue }
      )
    );
    setAllModalStateNull();
    setDisplayEditModal(false);
  };

  const dataLimit = 2;

  const {
    goToNextPage,
    goToPreviousPage,
    changePage,
    pages,
    currentPage,
    paginatedData,
    paginatedGroup,
  } = usePagination(placesData, dataLimit);

  const MapModalContent = useCallback(() => {
    return (
      <div className={classes.mapContainer}>
        {/* <Map center={mapLocation} zoom={14} /> */}
        <div ref={mapRef} className={classes.map}></div>
      </div>
    );
  }, []);
  const setAllModalStateNull = useCallback(() => {
    setTitleValue('');
    setAddressValue('');
    setDesciptionValue('');
  }, []);

  const clearAddPlaceForm = useCallback(() => {
    setDisplayAddModal(false);
    setAllModalStateNull();
  }, [setAllModalStateNull]);

  const onClickCloseEditModal = () => {
    setAllModalStateNull();
    setDisplayEditModal(false);
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
            modalTitle="Create New Place"
            titleValue={titleValue}
            addressValue={addressValue}
            descriptionValue={descriptionValue}
            setAddressValue={setAddressValue}
            setDescriptionValue={setDesciptionValue}
            setTitleValue={setTitleValue}
          />
        }
      />

      {/* Edit Modal */}
      <Modal
        showModal={displayEditModal}
        setShowModal={setDisplayEditModal}
        firstButtonAction={onClickCloseEditModal}
        firstButtonTitle="Cancel"
        secondButtonTitle="Ok"
        secondButton={true}
        okButton={onClickOKEditHandler}
        content={
          <AddModalContent
            modalTitle="Edit Place"
            titleValue={titleValue}
            address={false}
            titlePlaceholder={editModalValues.title}
            descriptionPlaceholder={editModalValues.description}
            descriptionValue={descriptionValue}
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
                    mapRef={mapRef}
                    key={place.id}
                    data={place}
                    onClickMap={onClickMapHandler}
                    onClickDelete={onClickDeleteHandler}
                    onClickEdit={onClickEditHandler}
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
