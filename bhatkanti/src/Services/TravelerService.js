// TravelerService.js
import axios from 'axios';
import { TRAVELER_API } from './constants';

export const getTravelerBookings = () => {
    return axios.get(TRAVELER_API.BOOKINGS);
};

export const getTravelerLocations = () => {
    return axios.get(TRAVELER_API.LOCATIONS);
};
