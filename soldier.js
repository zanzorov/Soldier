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
    if (soldier.weapon.rounds <= 0) {
      console.log("Обойма пуста. Перезаредитесь!");
    } else {
      console.log("бах-бах");
    }
  },
  reload: function () {
    soldier.weapon.rounds = 30;
    --this.ammo;
    console.log("перезарядка...");
    if (this.ammo == 0) {
      console.log("не осталось припасов");
    }
  },
  wound: function () {
    --this.health;
    if (this.health == 0) {
      console.log("Ты проиграл! " + "Здоровье: " + this.health);
    }
  },
};
