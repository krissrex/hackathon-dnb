const nearestATM = (ctx) => {
  console.log(parseInt(ctx.query.longitude, 10));
  console.log(parseInt(ctx.query.latitude, 10));
  ctx.body = {
    longitude: 59.910945,
    latitude: 10.751762,
  };
};

export { nearestATM };
