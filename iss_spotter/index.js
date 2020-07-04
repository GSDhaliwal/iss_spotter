const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss");
/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work! ", error);
    return;
  }

  console.log("It worked! Returned IP:" , ip);
});


fetchCoordsByIP('70.70.61.120', (error, data) => {
  if (error) {
    return console.log("It didn't work! ", error);
  }

  console.log("It worked! Returned Coords: ", data);
});


fetchISSFlyOverTimes({ latitude: '49.14100', longitude: '-122.85690' }, (error, data) => {
  if (error) {
    return console.log("It didn't work! ", error);
  }

  console.log("It worked! Returned Fly Over Times: \n", data);
});
*/

// iss.js

/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results.
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 */

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});