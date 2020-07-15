import converter from "../../src/utils/converter/converter";

describe("(H DD° MM´ SS.sss´´) Degrees Minutes Seconds to all", () => {
  it("location: Chile", () => {
    const location = {
      type: "dms",
      latitude: {
        hemisphere: "S",
        degrees: "35",
        minutes: "40",
        seconds: "30.529"
      },
      longitude: {
        hemisphere: "W",
        degrees: "71",
        minutes: "32",
        seconds: "34.685"
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "-35.675147", longitude: "-71.542968", type: "dd" },
      {
        latitude: { degrees: "35", hemisphere: "S", minutes: "40.509" },
        longitude: { degrees: "71", hemisphere: "W", minutes: "32.578" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "35",
          hemisphere: "S",
          minutes: "40",
          seconds: "30.529"
        },
        longitude: {
          degrees: "71",
          hemisphere: "W",
          minutes: "32",
          seconds: "34.685"
        },
        type: "dms"
      }
    ]);
  });

  it("location: Ljubljana", () => {
    const location = {
      type: "dms",
      latitude: {
        hemisphere: "N",
        degrees: "46",
        minutes: "3",
        seconds: "25.006"
      },
      longitude: {
        hemisphere: "E",
        degrees: "14",
        minutes: "30",
        seconds: "20.704"
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "46.056946", longitude: "14.505751", type: "dd" },
      {
        latitude: { degrees: "46", hemisphere: "N", minutes: "3.417" },
        longitude: { degrees: "14", hemisphere: "E", minutes: "30.345" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "46",
          hemisphere: "N",
          minutes: "3",
          seconds: "25.006"
        },
        longitude: {
          degrees: "14",
          hemisphere: "E",
          minutes: "30",
          seconds: "20.704"
        },
        type: "dms"
      }
    ]);
  });

  it("location: New York", () => {
    const location = {
      type: "dms",
      latitude: {
        hemisphere: "N",
        degrees: "40",
        minutes: "44",
        seconds: "30.822"
      },
      longitude: {
        hemisphere: "W",
        degrees: "73",
        minutes: "59",
        seconds: "21.509"
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "40.741895", longitude: "-73.989308", type: "dd" },
      {
        latitude: { degrees: "40", hemisphere: "N", minutes: "44.514" },
        longitude: { degrees: "73", hemisphere: "W", minutes: "59.358" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "40",
          hemisphere: "N",
          minutes: "44",
          seconds: "30.822"
        },
        longitude: {
          degrees: "73",
          hemisphere: "W",
          minutes: "59",
          seconds: "21.509"
        },
        type: "dms"
      }
    ]);
  });

  it("location: Auckland", () => {
    const location = {
      type: "dms",
      latitude: {
        hemisphere: "S",
        degrees: "36",
        minutes: "50",
        seconds: "54.452"
      },
      longitude: {
        hemisphere: "E",
        degrees: "174",
        minutes: "45",
        seconds: "47.992"
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "-36.848459", longitude: "174.763331", type: "dd" },
      {
        latitude: { degrees: "36", hemisphere: "S", minutes: "50.908" },
        longitude: { degrees: "174", hemisphere: "E", minutes: "45.800" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "36",
          hemisphere: "S",
          minutes: "50",
          seconds: "54.452"
        },
        longitude: {
          degrees: "174",
          hemisphere: "E",
          minutes: "45",
          seconds: "47.992"
        },
        type: "dms"
      }
    ]);
  });
});
