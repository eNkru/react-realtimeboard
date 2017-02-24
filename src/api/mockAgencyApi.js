import delay from './delay';

const agencies = [
  {
    "agency_id": "NZBGW",
    "agency_name": "Go West",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "SLPH",
    "agency_name": "SeaLink Pine Harbour",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "ABEXP",
    "agency_name": "SkyBus",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "AM",
    "agency_name": "AT Metro",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "RTH",
    "agency_name": "Ritchies Transport",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "BFL",
    "agency_name": "Belaire Ferries",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "FGL",
    "agency_name": "Fullers Ferries",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "UE",
    "agency_name": "Urban Express",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "GBT",
    "agency_name": "Go Bus",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "BAYES",
    "agency_name": "Bayes Coachlines",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "PBC",
    "agency_name": "The Party Bus Company",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "360D",
    "agency_name": "360 Discovery",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "NZBML",
    "agency_name": "Metrolink",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "BTL",
    "agency_name": "Birkenhead Transport",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "HE",
    "agency_name": "Howick and Eastern",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "NZBNS",
    "agency_name": "NorthStar",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  },
  {
    "agency_id": "WBC",
    "agency_name": "Waiheke Bus Company",
    "agency_url": "http://www.aucklandtransport.govt.nz",
    "agency_timezone": "Pacific/Auckland",
    "agency_lang": "en",
    "agency_phone": "(09)355-3553",
    "agency_fare_url": null
  }
];

class AgencyApi {
  static getAllAgencies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], agencies));
      }, delay);
    });
  }
}

export default AgencyApi;
