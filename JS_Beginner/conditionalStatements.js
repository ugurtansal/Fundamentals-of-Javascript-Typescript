let not = 75;

if (not >= 90) {
  console.log("Notun: AA");
} else if (not >= 80) {
  console.log("Notun: BA");
} else if (not >= 70) {
  console.log("Notun: BB");
} else {
  console.log("Kaldın!");
}



let gun = "Pazartesi";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın ilk günü!");
    break;
  case "Cuma":
    console.log("Hafta sonuna az kaldı!");
    break;
  default:
    console.log("Sıradan bir gün.");
}
