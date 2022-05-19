import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placesSelector } from '../../../redux/reducers/placesReducer';
import {
  getPlacesByUserId,
  createPlace,
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

export interface PlacesIF {
  address: string;
  creator: string;
  description: string;
  id: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  title: string;
}
const Places = () => {
  const dispatch = useDispatch();
  const { placesData } = useSelector(placesSelector);
  const [displayMapModal, setDisplayMapModal] = useState<boolean>(false);
  const [displayAddModal, setDisplayAddModal] = useState<boolean>(false);
  const [mapLocation, setMapLocation] = useState<PlacesIF['location']>({
    lat: 0,
    lng: 0,
  });

  const onClickMapHandler = (location: PlacesIF['location']) => {
    setMapLocation(location);
    setDisplayMapModal(true);
  };
  const onClickDelete = (id: string) => {
    console.log(id);
  };
  const onClickEdit = (id: string) => {
    console.log(id);
  };

  const dataLimit = 3;
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
  // let testData = {
  //   address: 'Washington DC',
  //   title: 'The Capital of the United States',
  //   creator: '62194ddcbc640c5dad53639d',
  //   description: 'White House Is in the Capitol',
  // };

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
        firstButtonTitle="Cancel"
        secondButtonTitle="Create"
        secondButton={true}
        okButton={() => console.log('hi')}
        content={<AddModalContent />}
      />
      {/*Map Modal  */}
      <Modal
        showModal={displayMapModal}
        setShowModal={setDisplayMapModal}
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
              {paginatedData?.map((item: PlacesIF) => {
                return (
                  <PlacesCard
                    key={item.id}
                    data={item}
                    onClickMap={onClickMapHandler}
                    onClickDelete={onClickDelete}
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
