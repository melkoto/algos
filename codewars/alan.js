function alan(x) {
  const stations = {
    Rejection: 1,
    Disappointment: 2,
    "Backstabbing Central": 3,
    "Shattered Dreams Parkway": 4,
  };

  for (let station of x) {
    if (station in stations) delete stations[station];
    if (Object.keys(stations).length === 0) {
      return "Smell my cheese you mother!";
    }
  }

  return "No, seriously, run. You will miss it.";
}

console.log(
  alan([
    "Norwich",
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
    "London",
  ])
);
console.log(alan(["London", "Norwich"]));
console.log(
  alan([
    "Norwich",
    "Tooting",
    "Bank",
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Exeter",
    "Shattered Dreams Parkway",
    "Belgium",
    "London",
  ])
);
console.log(
  alan([
    "Backstabbing Central",
    "London",
    "Disappointment",
    "Rejection",
    "Disappointment",
    "Tiverton",
    "Disappointment",
    "Shattered Dreams Parkway",
    "Backstabbing Central",
  ])
);
