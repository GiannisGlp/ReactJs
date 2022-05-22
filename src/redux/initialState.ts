export interface PlacesIF {
  address: string;
  creator: string;
  description: string;
  id: string;
  placeId: string;
  location: {
    lat: number;
    lng: number;
  };
  preferences: {
    like: boolean;
    check: boolean;
    favorite: boolean;
  };
  title: string;
}
export type ColorMode = 'dark' | 'light';

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
  layout: {
    colorMode: ColorMode;
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
  layout: {
    colorMode: 'light',
  },
};

export default initialState;
