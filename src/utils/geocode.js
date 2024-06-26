const request=require('request');



const geocode = (address, callback) => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      encodeURIComponent(address) +
      ".json?access_token=pk.eyJ1IjoiaGFzZWViemFmYXIiLCJhIjoiY2x0eTM3dTI1MGNhODJwczdldDBhdXo1eSJ9.zfDjKTCavQzrbp1uvdfYqA&limit=1";
    request({ url: url, json: true }, (error,{body}) => {
      if (error) {
        callback("unable to connect to locatin services", undefined);
      } else if (body.features.length === 0) {
        callback("unable to find location.try another search", undefined);
      
      } else {
        callback(undefined,{
          latitude:body.features[0].center[1],
          longitude:body.features[0].center[0],
          location:body.features[0].place_name
        })
      }
    });
  };

  module.exports=geocode;