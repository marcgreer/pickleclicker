let rate = 1;
let autoRateChange = 0;
let totalpickles = 0;

// Tier 1 Button Stats
let tier1RateThreshold = 10;
//let tier1RateCost = 10;
let tier1RateMultiplier = 2; // multiply times 2
let tier1RateIncrease = 0.1;

// Tier 2 Button Stats
let tier2RateThreshold = 1000;
//let tier1RateCost = 10;
let tier2RateMultiplier = 2; // multiply times 2
let tier2RateIncrease = 0.3;

// Tier 3 Button Stats
let tier3RateThreshold = 10000;
//let tier1RateCost = 10;
let tier3RateMultiplier = 2; // multiply times 2
let tier3RateIncrease = 0.5;

// Tier 4 Button Stats
let tier4RateThreshold = 50000;
//let tier1RateCost = 10;
let tier4RateMultiplier = 2; // multiply times 2
let tier4RateIncrease = 1;

document.getElementById("clickme").onclick = function () {
  clickFunction();
};
function clickFunction() {
  totalpickles = totalpickles + rate;
  //boxValue = Number(document.getElementById("counter2").innerHTML);
  //boxValue = boxValue + rate;
  //document.getElementById("counter").innerHTML = numberWithCommas(
  //  Math.round(boxValue)
  // );
  document.getElementById("counter").innerHTML = numberWithCommas(
    Math.round(totalpickles)
  );
  document.getElementById("counter2").innerHTML = boxValue;
  //autoStartCheck(boxValue);
  autoStartCheck(totalpickles);
  console.log(Math.round(totalpickles * 10) / 10);
}

myInterval = setInterval(startTime, 10);

function startTime() {
  //boxValue = Number(document.getElementById("counter2").innerHTML);
  totalpickles = totalpickles + autoRateChange;
  console.log(Math.round(totalpickles * 10) / 10);
  //boxValue = boxValue + autoRateChange;
  //document.getElementById("counter").innerHTML = numberWithCommas(
  //  Math.round(boxValue)
  // );
  document.getElementById("counter").innerHTML = numberWithCommas(
    Math.round(totalpickles)
  );
  //document.getElementById("counter2").innerHTML = boxValue;
  // Added this to show or disable
  if (totalpickles < tier1RateThreshold) {
    document.getElementById("tier1button").disabled = true;
  }
  if (totalpickles > tier1RateThreshold) {
    document.getElementById("tier1button").disabled = false;
  }
  if (totalpickles < tier2RateThreshold) {
    document.getElementById("tier2button").disabled = true;
  }
  if (totalpickles > tier2RateThreshold) {
    document.getElementById("tier2button").disabled = false;
  }
  if (totalpickles < tier3RateThreshold) {
    document.getElementById("tier3button").disabled = true;
  }
  if (totalpickles > tier3RateThreshold) {
    document.getElementById("tier3button").disabled = false;
  }
  if (totalpickles < tier4RateThreshold) {
    document.getElementById("tier4button").disabled = true;
  }
  if (totalpickles > tier4RateThreshold) {
    document.getElementById("tier4button").disabled = false;
  }
}

// Check to see when clicked if threshold = boxvalue
function autoStartCheck(val) {
  if (val == tier1RateThreshold) {
    document.getElementById("tier1button").disabled = false;
  }
  if (val == tier2RateThreshold) {
    document.getElementById("tier2button").disabled = false;
  }
  if (val == tier3RateThreshold) {
    document.getElementById("tier3button").disabled = false;
  }
  if (val == tier4RateThreshold) {
    document.getElementById("tier4button").disabled = false;
  }
}

document.getElementById("tier2button").onclick = function () {
  // added so can only click once.
  document.getElementById("tier2button").disabled = true;
  //console.log("tett");
  //beginTime();
  autoRateChange = autoRateChange + tier2RateIncrease;

  document.getElementById("rateAdded").innerHTML =
    Math.round(autoRateChange * 100) / 100;
  //document.getElementById("counter").innerHTML = Math.round(
  //  boxValue - tier2RateThreshold
  // );
  document.getElementById("counter").innerHTML = Math.round(
    totalpickles - tier2RateThreshold
  );
  //document.getElementById("counter2").innerHTML = boxValue - tier2RateThreshold;
  tier2RateThreshold = tier2RateThreshold * tier2RateMultiplier;
  document.getElementById("counter2").innerHTML =
    totalpickles - tier2RateThreshold;
  tier2RateThreshold = tier2RateThreshold * tier2RateMultiplier;
  document.getElementById("tier2cost").innerHTML = tier2RateThreshold;
};

document.getElementById("tier3button").onclick = function () {
  // added so can only click once.
  document.getElementById("tier3button").disabled = true;
  //console.log("tett");
  //beginTime();
  autoRateChange = autoRateChange + tier3RateIncrease;

  document.getElementById("rateAdded").innerHTML =
    Math.round(autoRateChange * 100) / 100;
  //document.getElementById("counter").innerHTML = Math.round(
  //  boxValue - tier3RateThreshold
  // );
  document.getElementById("counter").innerHTML = Math.round(
    totalpickles - tier3RateThreshold
  );
  //document.getElementById("counter2").innerHTML = boxValue - tier3RateThreshold;
  document.getElementById("counter2").innerHTML =
    totalpickles - tier3RateThreshold;
  tier3RateThreshold = tier3RateThreshold * tier3RateMultiplier;
  document.getElementById("tier3cost").innerHTML = tier3RateThreshold;
};

document.getElementById("tier4button").onclick = function () {
  // added so can only click once.
  document.getElementById("tier4button").disabled = true;
  //console.log("tett");
  //beginTime();
  autoRateChange = autoRateChange + tier4RateIncrease;

  document.getElementById("rateAdded").innerHTML =
    Math.round(autoRateChange * 100) / 100;
  // document.getElementById("counter").innerHTML = Math.round(
  //   boxValue - tier4RateThreshold
  //  );
  document.getElementById("counter").innerHTML = Math.round(
    totalpickles - tier4RateThreshold
  );
  //document.getElementById("counter2").innerHTML = boxValue - tier4RateThreshold;
  tier4RateThreshold = tier4RateThreshold * tier4RateMultiplier;
  document.getElementById("tier4cost").innerHTML = tier4RateThreshold;
};

document.getElementById("tier1button").onclick = function () {
  // added so can only click once.
  document.getElementById("tier1button").disabled = true;
  //console.log("tett");
  //beginTime();
  autoRateChange = autoRateChange + tier1RateIncrease;

  document.getElementById("rateAdded").innerHTML =
    Math.round(autoRateChange * 100) / 100;
  // document.getElementById("counter").innerHTML = Math.round(
  //  boxValue - tier1RateThreshold
  // );
  document.getElementById("counter").innerHTML = Math.round(
    totalpickles - tier1RateThreshold
  );
  //document.getElementById("counter2").innerHTML = boxValue - tier1RateThreshold;
  tier1RateThreshold = tier1RateThreshold * tier1RateMultiplier;
  document.getElementById("tier1cost").innerHTML = tier1RateThreshold;
};

document.getElementById("stop").onclick = function () {
  clearInterval(myInterval);
};

document.getElementById("reset").onclick = reset;

function reset() {
  document.getElementById("counter").innerHTML = 0;
  document.getElementById("counter2").innerHTML = 0;
  document.getElementById("tier1button").disabled = true;
  document.getElementById("tier2button").disabled = true;
  document.getElementById("tier3button").disabled = true;
  document.getElementById("tier4button").disabled = true;

  if (myInterval) {
    clearInterval(myInterval);
  }
  location.reload();
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
