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

export interface StateIF {
  users: {
    error: string | null;
    usersData: [];
    loggedIn: boolean;
  };
  places: {
    error: string | null;
    placesData: PlacesIF[];
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
    placesData: [],
  },
  products: {
    error: '',
    productsData: [],
  },
};

export default initialState;
