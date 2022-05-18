const soldier = {
  name: "John",
  health: 10,
  weapon: {
    name: "AK47",
    rounds: 30,
  },
  ammo: 3,
  shoot: function () {
    --soldier.weapon.rounds;
    console.log("бах-бах");
  },
  reload: function () {
    soldier.weapon.rounds = 30;
    --soldier.ammo;
    console.log("перезарядка...");
    if (soldier.ammo == 0) {
      console.log("не осталось припасов");
    }
  },
  wound: function () {
    --soldier.health;
    if (soldier.health == 0) {
      console.log("Ты проиграл! " + "Здоровье: " + soldier.health);
    }
  },
};
