import BigNumber from "bignumber.js";
const ONE_SECOND_IN_MINUTES = BigNumber(0.01666667);

const calculateToMin = ({ hemisphere, degrees, minutes, seconds }) => {
  return {
    hemisphere,
    degrees: degrees.toString(),
    minutes: BigNumber(seconds)
      .multipliedBy(ONE_SECOND_IN_MINUTES)
      .plus(BigNumber(minutes))
      .toFixed(3)
  };
};

export default function dmsToDm({ latitude, longitude }) {
  return {
    type: "dm",
    latitude: calculateToMin(latitude),
    longitude: calculateToMin(longitude)
  };
}
