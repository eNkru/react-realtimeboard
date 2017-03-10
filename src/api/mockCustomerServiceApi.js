import delay from './delay';

const customerServices = [
  {
    "id": "1",
    "name": "Newmarket Train Station",
    "address": "48A Remuera Rd",
    "suburb": "Newmarket",
    "phone": "09 366 6400",
    "openHours": "Mon- Fri: 7am-6pm\nSat: 8am-4.30pm\nClosed Sunday",
    "hopServices": false,
    "latitude": -36.8692188,
    "longitude": 174.7768141
  },
  {
    "id": "2",
    "name": "AUT City Campus",
    "address": "55 Building WA 4/11, Hikuwai Plaza, Wellesley St East",
    "suburb": "CBD",
    "phone": "09 366 6400",
    "openHours": "Mon – Fri: 8.30am-5pm\nClosed Saturday and Sunday",
    "hopServices": true,
    "latitude": -36.8532194,
    "longitude": 174.7651301
  },
  {
    "id": "3",
    "name": "New Lynn Train Station",
    "address": "2 Clark Street",
    "suburb": "New Lynn",
    "phone": "09 366 6400",
    "openHours": "Mon-Fri: 7am-6pm\nSat: 8am-4:30pm\nClosed Sunday",
    "hopServices": false,
    "latitude": -36.9094439,
    "longitude": 174.6823591
  },
  {
    "id": "4",
    "name": "Albany Customer Service Centre",
    "address": "Northern Busway, corner of Elliot Rose Ave and Cornerstone Drive.",
    "suburb": "Albany",
    "phone": "09 366 6400",
    "openHours": "Monday to Friday: 6.30am - 7pm\nClosed for lunch 1:30pm - 2pm\nClosed Saturday and Sunday",
    "hopServices": true,
    "latitude": -36.722473,
    "longitude": 174.7092774
  },
  {
    "id": "5",
    "name": "Papakura Train Station",
    "address": "Platform 3 Railway Street West",
    "suburb": "Papakura",
    "phone": "09 366 6400",
    "openHours": "Mon-Fri: 7:30am-6pm\nClosed Saturday and Sunday",
    "hopServices": true,
    "latitude": -37.0644591,
    "longitude": 174.9433928
  },
  {
    "id": "6",
    "name": "Botany Customer Service Centre",
    "address": "Opposite bus stops near Briscoes and Rebel Sport Town Centre Drive",
    "suburb": "Botany",
    "phone": "09 4475401",
    "openHours": "Monday to Friday: 7am - 6pm\nSaturday: 8am - 4:30pm\nClosed Sunday",
    "hopServices": false,
    "latitude": -36.9326344,
    "longitude": 174.9106499
  },
  {
    "id": "7",
    "name": "Constellation Park and Ride",
    "address": "62 Parkway Drive",
    "suburb": "Mairangi Bay",
    "phone": "09 366 6400",
    "openHours": "Mon-Fri: 7:30am-6pm \nClosed for lunch: 1pm-1:30pm\nClosed Saturday and Sunday\n",
    "hopServices": true,
    "latitude": -36.7509171,
    "longitude": 174.7275003
  },
  {
    "id": "8",
    "name": "Smales Farm",
    "address": "150 Shakespeare Road",
    "suburb": "Takapuna",
    "phone": "09 366 6400",
    "openHours": "Mon – Fri: 7.00am-6pm\nSaturday: 8am-4:30pm\nClosed Sunday",
    "hopServices": true,
    "latitude": -36.7818534,
    "longitude": 174.7513133
  },
  {
    "id": "9",
    "name": "Britomart Transport Centre",
    "address": "12 Queen Street",
    "suburb": "CBD",
    "phone": "09 366 6400",
    "openHours": "Monday – Sat\n7:30am-8pm\nSun\n8:30am-5pm",
    "hopServices": false,
    "latitude": -36.8440934,
    "longitude": 174.7652094
  },
  {
    "id": "10",
    "name": "Manukau Customer Service Centre",
    "address": "Ground Floor, MIT Building, 57 Manukau Station Rd, ",
    "suburb": "Manukau",
    "phone": "09 366 6400",
    "openHours": "Mon - Fri: 7am - 6pm\nClosed Saturday and Sunday and Public Holidays\n ",
    "hopServices": true,
    "latitude": -36.9939561,
    "longitude": 174.8750093
  }
];

class CustomerServiceApi {
  static getAllCustomerServices() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], customerServices));
      }, delay);
    });
  }
}

export default CustomerServiceApi;
