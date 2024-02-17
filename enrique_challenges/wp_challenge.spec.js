const getCleanValue = (details) =>
  details
    ? details
        .replace(/(^<p>|<\/p>$)/, "")
        .replace(/(<p>|<\/p>|<br>)+/g, " ")
        .replace(/&nbsp;/g, "")
        .trim()
    : null;

describe.skip("get clean value from rich text tests", function () {
  test("rich text cleaned up correctly", () => {
    const richText1 = "<p>Unlimited access to <em>aaaa</em> on any device</p>";
    const richText2 =
      "<p>You consent to the use of cookies and tracking by us and third parties to provide you with personalized ads</p><p><br></p>";
    const richText3 =
      "<p>Unlimited access to&nbsp;<em>washingtonpost.com</em>&nbsp;on any device</p>";
    const cleanText1 = "Unlimited access to <em>aaaa</em> on any device";
    const cleanText2 =
      "You consent to the use of cookies and tracking by us and third parties to provide you with personalized ads";
    const cleanText3 =
      "   Unlimited access to<em>washingtonpost.com</em>on any device";
    expect(getCleanValue(richText1)).toEqual(cleanText1);
    expect(getCleanValue(richText2)).toEqual(cleanText2);
    expect(getCleanValue(richText3)).toEqual(cleanText3);
  });
});

const getCyclesCurrentRate = (rate) => {
  const { amount, billingCount, billingFrequency, durationCount, duration } =
    rate;
  let durationMultiplier;
  if (billingFrequency === "Week" && duration === "Month") {
    durationMultiplier = 4;
  }
  if (billingFrequency === duration) {
    durationMultiplier = 1;
  }
  if (duration === "UntilCancelled") {
    durationMultiplier = 1;
  }
  const cyclesForCurrentRate = [];
  for (let i = 0; i < durationCount * durationMultiplier; i++) {
    cyclesForCurrentRate.push({
      amount: amount,
      billingCount: billingCount,
      billingFrequency: billingFrequency,
    });
  }
  return cyclesForCurrentRate;
};

const getNextRate = (currentCycle, rates) => {
  let allCyclesInPrice = [];

  for (const rate in rates) {
    const cyclesCurrentRate = getCyclesCurrentRate(rates[rate]);
    allCyclesInPrice = [...allCyclesInPrice, ...cyclesCurrentRate];
    if (rates[rate].duration === "UntilCancelled") {
      break;
    }
  }
  
  return allCyclesInPrice[currentCycle];
};

describe("get amount to be collected the next cycle", function () {
  test("get amount to be collected the next cycle ", () => {
    const ratesPrice = [
      {
        amount: 5,
        billingCount: 1,
        billingFrequency: "Week",
        durationCount: 1,
        duration: "Month",
      }, //4
      {
        amount: 10,
        billingCount: 1,
        billingFrequency: "Month",
        durationCount: 2,
        duration: "Month",
      },
      {
        amount: 15,
        billingCount: 1,
        billingFrequency: "Year",
        durationCount: 1,
        duration: "UntilCancelled",
      },
    ];
    const nextRate1 = {
      amount: 5,
      billingCount: 1,
      billingFrequency: "Week",
    };
    const nextRate4 = {
      amount: 10,
      billingCount: 1,
      billingFrequency: "Month",
    };
    const nextRate10 = {
      amount: 15,
      billingCount: 1,
      billingFrequency: "Year",
    };
    expect(getNextRate(1, ratesPrice)).toEqual(nextRate1);
    expect(getNextRate(4, ratesPrice)).toEqual(nextRate4);
    expect(getNextRate(10, ratesPrice)).toEqual(nextRate10);
  });
});
