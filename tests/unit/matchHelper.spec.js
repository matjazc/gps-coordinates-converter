import matchInputWithMask from "../../src/utils/matchHelper";

describe("(DD.dddddd°) Decimal Degrees match tests", () => {
  it("valid format", () => {
    const userInput = "12.1234, -45.6789";

    const result = matchInputWithMask(userInput);

    expect(result).toEqual({
      type: "dd",
      latitude: "12.1234",
      longitude: "-45.6789"
    });
  });

  it("valid format (up to 7 decimals)", () => {
    const userInput = "-123.1234677, -145.6789567";

    const result = matchInputWithMask(userInput);

    expect(result).toEqual({
      type: "dd",
      latitude: "-123.1234677",
      longitude: "-145.6789567"
    });
  });

  it("invalid format (MORE then 7 decimals)", () => {
    const userInput = "-123.1234677234234, -145.678956745645645";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid format (integer more then 180)", () => {
    const userInput = "-181.1234, -145.6789";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid format (no space between values)", () => {
    const userInput = "-181.1234,-145.6789";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid format (no comma between values)", () => {
    const userInput = "-181.1234 -145.6789";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid format (no space and comma between values)", () => {
    const userInput = "-181.1234145.6789";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid format (letters)", () => {
    const userInput = "aaa, -45.bbb6789";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });
});

describe("(H DD° MM.mmm´) Degrees Minutes match tests", () => {
  it("valid format", () => {
    const userInput = "N120 60.000, E96 16.379";

    const result = matchInputWithMask(userInput);

    expect(result).toEqual({
      type: "dm",
      latitude: {
        hemisphere: "N",
        degrees: "120",
        minutes: "60.000"
      },
      longitude: {
        hemisphere: "E",
        degrees: "96",
        minutes: "16.379"
      }
    });
  });

  it("valid format", () => {
    const userInput = "S25 45.123, W133 45.987";

    const result = matchInputWithMask(userInput);

    expect(result).toEqual({
      type: "dm",
      latitude: {
        hemisphere: "S",
        degrees: "25",
        minutes: "45.123"
      },
      longitude: {
        hemisphere: "W",
        degrees: "133",
        minutes: "45.987"
      }
    });
  });

  it("invalid format: degress > 180", () => {
    const userInput = "S181 45.123, W133 45.987";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere E for latitude", () => {
    const userInput = "E180 45.123, W133 45.987";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere W for latitude", () => {
    const userInput = "W180 45.123, E133 45.987";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere S for longitude", () => {
    const userInput = "N180 45.123, S133 45.987";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere N for longitude", () => {
    const userInput = "S180 45.123, N133 45.987";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });
});

describe("(H DD° MM´ SS.sss´´) Degrees Minutes Seconds match its", () => {
  it("valid format", () => {
    const userInput = "N120 45 13.3, E99 60 8.9";

    const result = matchInputWithMask(userInput);

    expect(result).toEqual({
      type: "dms",
      latitude: {
        hemisphere: "N",
        degrees: "120",
        minutes: "45",
        seconds: "13.3"
      },
      longitude: {
        hemisphere: "E",
        degrees: "99",
        minutes: "60",
        seconds: "8.9"
      }
    });
  });

  it("valid format", () => {
    const userInput = "S15 60 44.0, W1 1 59.9";

    const result = matchInputWithMask(userInput);

    expect(result).toEqual({
      type: "dms",
      latitude: {
        hemisphere: "S",
        degrees: "15",
        minutes: "60",
        seconds: "44.0"
      },
      longitude: {
        hemisphere: "W",
        degrees: "1",
        minutes: "1",
        seconds: "59.9"
      }
    });
  });

  it("invalid format: degress > 180", () => {
    const userInput = "S181 60 44.0, W1 1 59.9";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere E for latitude", () => {
    const userInput = "E180 60 44.0, W1 1 59.9";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere W for latitude", () => {
    const userInput = "W180 60 44.0, E1 1 59.9";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere S for longitude", () => {
    const userInput = "N180 60 44.0, S1 1 59.9";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });

  it("invalid hemisphere N for longitude", () => {
    const userInput = "S180 60 44.0, N1 1 59.9";

    expect(() => {
      matchInputWithMask(userInput);
    }).toThrow("Something went wrong! Try different coordinates.");
  });
});
