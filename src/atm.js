import rp from 'request-promise';

/** @return {Promise<string>} */
const convertPositionToZip = (lat, long) => {
  return new Promise((resolve, reject) => {
    return resolve('0258');
  });
};

/** @typedef Position
 * @prop {number} lat
 * @prop {number} long
 */

/**
 * @param {string} zipCode string of numbers 
 * @return {Promise<Position[]>}
 */
const findAtmsFromZip = (zipCode) => {
  return new Promise((resolve, reject) => {

    return resolve([{ lat: 10, long: 10 }]);
  });
};

/** @return {Promise<Position>} */
const findClosestAtm = (lat, long, atms) => {
  return new Promise((resolve, reject) => {
    return resolve(atms[0]);
  });
};

const nearestATM = async (ctx) => {
  const long = parseInt(ctx.query.longitude, 10);
  const lat = parseInt(ctx.query.latitude, 10);
  console.log('Lat/long:', lat, long);

  return convertPositionToZip(lat, long)
    .then(findAtmsFromZip)
    .then(atms => findClosestAtm(lat, long, atms))
    .then((atm) => {
      ctx.body = {
        longitude: atm.lat,
        latitude: atm.long,
      };
      return Promise.resolve();
    })
    .catch((err) => {
      ctx.throw(500, 'Failed to find atm', { lat, long, err });      
      console.error(err);
    });
};

export { nearestATM };
