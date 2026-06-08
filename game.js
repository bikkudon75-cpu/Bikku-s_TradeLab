let balance = 10000;
let xp = 0;
let level = 1;
let crypt = 0;

let price = 100;
let prices = [];

let winStreak = 0;
let missionProgress = 0;
let missionTarget = 3;

let target = 12000;
let maxLoss = 8000;

function updateUI() {
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
  document.getElementById("crypt").innerText = crypt;

  document.getElementById("missionProgress").innerText =
    missionProgress + " / " + missionTarget;
}

function buy() {
  trade();
}

function sell() {
  trade();
}

function trade() {
  let result = Math.random() > 0.45; // win chance

  if (result) {
    let profit = price * (Math.random() * 0.5);
    balance += profit;
    xp += 20;
    crypt += 5;
    winStreak++;
    missionProgress++;

    msg("PROFIT TRADE ✅ +" + profit.toFixed(2));
  } else {
    let loss = price * (Math.random() * 0.5);
    balance -= loss;
    xp += 5;
    winStreak = 0;

    msg("LOSS TRADE ❌ -" + loss.toFixed(2));
  }

  checkLevel();
  checkMission();
  checkChallenge();
  updateUI();
}

function checkLevel() {
  if (xp >= level * 120) {
    level++;
    crypt += 20;
    msg("LEVEL UP 🚀");
  }
}

function checkMission() {
  if (missionProgress >= missionTarget) {
    crypt += 50;
    missionProgress = 0;
    msg("MISSION COMPLETE 🎯 +50 Crypt");
  }
}

function checkChallenge() {
  if (balance >= target) {
    document.getElementById("challengeStatus").innerText = "PASSED 🎉";
  }

  if (balance <= maxLoss) {
    document.getElementById("challengeStatus").innerText = "FAILED ❌";
  }
}

function msg(t) {
  console.log(t);
}
