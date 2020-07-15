import BigNumber from "bignumber.js";

const signs = {
  N: 1,
  S: -1,
  E: 1,
  W: -1
};

const calculateToDegrees = (
  { hemisphere, degrees, minutes, seconds },
  getSign
) => {
  const convertedSeconds = BigNumber(seconds).div(3600);
  const convertedMinutes = BigNumber(minutes).div(60);
  const hemisphereSign = BigNumber(getSign[hemisphere]);

  return BigNumber(degrees)
    .plus(convertedMinutes)
    .plus(convertedSeconds)
    .multipliedBy(hemisphereSign)
    .toFixed(6);
};

export default function dmsToDd({ latitude, longitude }) {
  return {
    type: "dd",
    latitude: calculateToDegrees(latitude, signs),
    longitude: calculateToDegrees(longitude, signs)
  };
}
