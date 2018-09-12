const axios = require('axios');

const getLugarLatLng = async direccion => {


  let encodedUrl= encodeURI(direccion);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

  if (resp.data.status === 'ZERO_RESULTS'){
    throw new Error (`No hay resultados para ciudad ${direccion}`); //aquí se detiene y no sigue
  }

  let location = resp.data.results[0];
  let {lat , lng} = location.geometry.location;

  return {
    direccion: location.formatted_address ,
    lat,
    lng
  }
};

module.exports = {
  getLugarLatLng
}

