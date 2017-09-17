import rp from 'request-promise';

/** @return {Promise<string>} */
const convertPositionToZip = (lat, long) => {
  return new Promise((resolve, reject) => {
    // TODO use some lat-long-2-zip api
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
    // TODO query DNB API
    return resolve([{ lat: 59.907578, long: 10.760129 }]);
  });
};

/** @return {Promise<Position>} */
const findClosestAtm = (lat, long, atms) => {
  return new Promise((resolve, reject) => {
    // TODO some simple distance algorithm
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
