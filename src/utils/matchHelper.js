import config from "./config";

export default function matchInputWithMask(userInput) {
  const matchDD = config.regex.dd.exec(userInput);
  const matchDM = config.regex.dm.exec(userInput);
  const matchDMS = config.regex.dms.exec(userInput);

  if (matchDD) {
    return {
      type: "dd",
      latitude: `${matchDD[1]}.${matchDD[3]}`,
      longitude: `${matchDD[4]}.${matchDD[6]}`
    };
  }

  if (matchDMS) {
    return {
      type: "dms",
      latitude: {
        hemisphere: matchDMS[1],
        degrees: matchDMS[2],
        minutes: matchDMS[4],
        seconds: `${matchDMS[6]}.${matchDMS[8]}`
      },
      longitude: {
        hemisphere: matchDMS[9],
        degrees: matchDMS[10],
        minutes: matchDMS[12],
        seconds: `${matchDMS[14]}.${matchDMS[16]}`
      }
    };
  }

  if (matchDM) {
    return {
      type: "dm",
      latitude: {
        hemisphere: matchDM[1],
        degrees: matchDM[2],
        minutes: `${matchDM[4]}.${matchDM[6]}`
      },
      longitude: {
        hemisphere: matchDM[7],
        degrees: matchDM[8],
        minutes: `${matchDM[10]}.${matchDM[12]}`
      }
    };
  }
  throw new Error("Something went wrong! Try different coordinates.");
}
