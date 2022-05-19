export interface StateIF {
  users: {
    error: string | null;
    usersData: [];
    loggedIn: boolean;
  };
  places: {
    error: string | null;
    createdPlace: object;
    placesData: [];
  };
  products: {
    error: string | null;
    productsData: [];
  };
}

const initialState: StateIF = {
  users: {
    error: '',
    usersData: [],
    loggedIn: false,
  },
  places: {
    error: '',
    createdPlace: {},
    placesData: [],
  },
  products: {
    error: '',
    productsData: [],
  },
};

export default initialState;
