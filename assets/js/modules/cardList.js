const cardList = [
    {
       "name":"Knight",
       "elixir":3,
       "type":"Troop",
       "rarity":"Common",
       "id":26000000,
       "icon":"./assets/images/cards/Knight.png"
    },
    {
       "name":"Archers",
       "elixir":3,
       "type":"Troop",
       "rarity":"Common",
       "id":26000001,
       "icon":"./assets/images/cards/Archers.png"
    },
    {
       "name":"Goblins",
       "elixir":2,
       "type":"Troop",
       "rarity":"Common",
       "id":26000002,
       "icon":"./assets/images/cards/Goblins.png"
    },
    {
       "name":"Giant",
       "elixir":5,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000003,
       "icon":"./assets/images/cards/Giant.png"
    },
    {
       "name":"P.E.K.K.A",
       "elixir":7,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000004,
       "icon":"./assets/images/cards/P.E.K.K.A.png"
    },
    {
       "name":"Minions",
       "elixir":3,
       "type":"Troop",
       "rarity":"Common",
       "id":26000005,
       "icon":"./assets/images/cards/Minions.png"
    },
    {
       "name":"Balloon",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000006,
       "icon":"./assets/images/cards/Balloon.png"
    },
    {
       "name":"Witch",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000007,
       "icon":"./assets/images/cards/Witch.png"
    },
    {
       "name":"Barbarians",
       "elixir":5,
       "type":"Troop",
       "rarity":"Common",
       "id":26000008,
       "icon":"./assets/images/cards/Barbarians.png"
    },
    {
       "name":"Golem",
       "elixir":8,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000009,
       "icon":"./assets/images/cards/Golem.png"
    },
    {
       "name":"Skeletons",
       "elixir":1,
       "type":"Troop",
       "rarity":"Common",
       "id":26000010,
       "icon":"./assets/images/cards/Skeletons.png"
    },
    {
       "name":"Valkyrie",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000011,
       "icon":"./assets/images/cards/Valkyrie.png"
    },
    {
       "name":"Skeleton Army",
       "elixir":3,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000012,
       "icon":"./assets/images/cards/Skeleton Army.png"
    },
    {
       "name":"Bomber",
       "elixir":2,
       "type":"Troop",
       "rarity":"Common",
       "id":26000013,
       "icon":"./assets/images/cards/Bomber.png"
    },
    {
       "name":"Musketeer",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000014,
       "icon":"./assets/images/cards/Musketeer.png"
    },
    {
       "name":"Baby Dragon",
       "elixir":4,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000015,
       "icon":"./assets/images/cards/Baby Dragon.png"
    },
    {
       "name":"Prince",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000016,
       "icon":"./assets/images/cards/Prince.png"
    },
    {
       "name":"Wizard",
       "elixir":5,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000017,
       "icon":"./assets/images/cards/Wizard.png"
    },
    {
       "name":"Mini P.E.K.K.A",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000018,
       "icon":"./assets/images/cards/Mini P.E.K.K.A.png"
    },
    {
       "name":"Spear Goblins",
       "elixir":2,
       "type":"Troop",
       "rarity":"Common",
       "id":26000019,
       "icon":"./assets/images/cards/Spear Goblins.png"
    },
    {
       "name":"Giant Skeleton",
       "elixir":6,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000020,
       "icon":"./assets/images/cards/Giant Skeleton.png"
    },
    {
       "name":"Hog Rider",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000021,
       "icon":"./assets/images/cards/Hog Rider.png"
    },
    {
       "name":"Minion Horde",
       "elixir":5,
       "type":"Troop",
       "rarity":"Common",
       "id":26000022,
       "icon":"./assets/images/cards/Minion Horde.png"
    },
    {
       "name":"Ice Wizard",
       "elixir":3,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000023,
       "icon":"./assets/images/cards/Ice Wizard.png"
    },
    {
       "name":"Royal Giant",
       "elixir":6,
       "type":"Troop",
       "rarity":"Common",
       "id":26000024,
       "icon":"./assets/images/cards/Royal Giant.png"
    },
    {
       "name":"Guards",
       "elixir":3,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000025,
       "icon":"./assets/images/cards/Guards.png"
    },
    {
       "name":"Princess",
       "elixir":3,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000026,
       "icon":"./assets/images/cards/Princess.png"
    },
    {
       "name":"Dark Prince",
       "elixir":4,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000027,
       "icon":"./assets/images/cards/Dark Prince.png"
    },
    {
       "name":"Three Musketeers",
       "elixir":9,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000028,
       "icon":"./assets/images/cards/Three Musketeers.png"
    },
    {
       "name":"Lava Hound",
       "elixir":7,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000029,
       "icon":"./assets/images/cards/Lava Hound.png"
    },
    {
       "name":"Ice Spirit",
       "elixir":1,
       "type":"Troop",
       "rarity":"Common",
       "id":26000030,
       "icon":"./assets/images/cards/Ice Spirit.png"
    },
    {
       "name":"Fire Spirit",
       "elixir":1,
       "type":"Troop",
       "rarity":"Common",
       "id":26000031,
       "icon":"./assets/images/cards/Fire Spirit.png"
    },
    {
       "name":"Miner",
       "elixir":3,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000032,
       "icon":"./assets/images/cards/Miner.png"
    },
    {
       "name":"Sparky",
       "elixir":6,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000033,
       "icon":"./assets/images/cards/Sparky.png"
    },
    {
       "name":"Bowler",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000034,
       "icon":"./assets/images/cards/Bowler.png"
    },
    {
       "name":"Lumberjack",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000035,
       "icon":"./assets/images/cards/Lumberjack.png"
    },
    {
       "name":"Battle Ram",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000036,
       "icon":"./assets/images/cards/Battle Ram.png"
    },
    {
       "name":"Inferno Dragon",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000037,
       "icon":"./assets/images/cards/Inferno Dragon.png"
    },
    {
       "name":"Ice Golem",
       "elixir":2,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000038,
       "icon":"./assets/images/cards/Ice Golem.png"
    },
    {
       "name":"Mega Minion",
       "elixir":3,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000039,
       "icon":"./assets/images/cards/Mega Minion.png"
    },
    {
       "name":"Dart Goblin",
       "elixir":3,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000040,
       "icon":"./assets/images/cards/Dart Goblin.png"
    },
    {
       "name":"Goblin Gang",
       "elixir":3,
       "type":"Troop",
       "rarity":"Common",
       "id":26000041,
       "icon":"./assets/images/cards/Goblin Gang.png"
    },
    {
       "name":"Electro Wizard",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000042,
       "icon":"./assets/images/cards/Electro Wizard.png"
    },
    {
       "name":"Elite Barbarians",
       "elixir":6,
       "type":"Troop",
       "rarity":"Common",
       "id":26000043,
       "icon":"./assets/images/cards/Elite Barbarians.png"
    },
    {
       "name":"Hunter",
       "elixir":4,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000044,
       "icon":"./assets/images/cards/Hunter.png"
    },
    {
       "name":"Executioner",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000045,
       "icon":"./assets/images/cards/Executioner.png"
    },
    {
       "name":"Bandit",
       "elixir":3,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000046,
       "icon":"./assets/images/cards/Bandit.png"
    },
    {
       "name":"Royal Recruits",
       "elixir":7,
       "type":"Troop",
       "rarity":"Common",
       "id":26000047,
       "icon":"./assets/images/cards/Royal Recruits.png"
    },
    {
       "name":"Night Witch",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000048,
       "icon":"./assets/images/cards/Night Witch.png"
    },
    {
       "name":"Bats",
       "elixir":2,
       "type":"Troop",
       "rarity":"Common",
       "id":26000049,
       "icon":"./assets/images/cards/Bats.png"
    },
    {
       "name":"Royal Ghost",
       "elixir":3,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000050,
       "icon":"./assets/images/cards/Royal Ghost.png"
    },
    {
       "name":"Ram Rider",
       "elixir":5,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000051,
       "icon":"./assets/images/cards/Ram Rider.png"
    },
    {
       "name":"Zappies",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000052,
       "icon":"./assets/images/cards/Zappies.png"
    },
    {
       "name":"Rascals",
       "elixir":5,
       "type":"Troop",
       "rarity":"Common",
       "id":26000053,
       "icon":"./assets/images/cards/Rascals.png"
    },
    {
       "name":"Cannon Cart",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000054,
       "icon":"./assets/images/cards/Cannon Cart.png"
    },
    {
       "name":"Mega Knight",
       "elixir":7,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000055,
       "icon":"./assets/images/cards/Mega Knight.png"
    },
    {
       "name":"Skeleton Barrel",
       "elixir":3,
       "type":"Troop",
       "rarity":"Common",
       "id":26000056,
       "icon":"./assets/images/cards/Skeleton Barrel.png"
    },
    {
       "name":"Flying Machine",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000057,
       "icon":"./assets/images/cards/Flying Machine.png"
    },
    {
       "name":"Wall Breakers",
       "elixir":2,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000058,
       "icon":"./assets/images/cards/Wall Breakers.png"
    },
    {
       "name":"Royal Hogs",
       "elixir":5,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000059,
       "icon":"./assets/images/cards/Royal Hogs.png"
    },
    {
       "name":"Goblin Giant",
       "elixir":6,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000060,
       "icon":"./assets/images/cards/Goblin Giant.png"
    },
    {
       "name":"Fisherman",
       "elixir":3,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000061,
       "icon":"./assets/images/cards/Fisherman.png"
    },
    {
       "name":"Magic Archer",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000062,
       "icon":"./assets/images/cards/Magic Archer.png"
    },
    {
       "name":"Electro Dragon",
       "elixir":5,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000063,
       "icon":"./assets/images/cards/Electro Dragon.png"
    },
    {
       "name":"Firecracker",
       "elixir":3,
       "type":"Troop",
       "rarity":"Common",
       "id":26000064,
       "icon":"./assets/images/cards/Firecracker.png"
    },
    {
       "name":"Elixir Golem",
       "elixir":3,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000067,
       "icon":"./assets/images/cards/Elixir Golem.png"
    },
    {
       "name":"Battle Healer",
       "elixir":4,
       "type":"Troop",
       "rarity":"Rare",
       "id":26000068,
       "icon":"./assets/images/cards/Battle Healer.png"
    },
    {
       "name":"Skeleton Dragons",
       "elixir":4,
       "type":"Troop",
       "rarity":"Common",
       "id":26000080,
       "icon":"./assets/images/cards/Skeleton Dragons.png"
    },
    {
       "name":"Mother Witch",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000083,
       "icon":"./assets/images/cards/Mother Witch.png"
    },
    {
       "name":"Electro Spirit",
       "elixir":1,
       "type":"Troop",
       "rarity":"Common",
       "id":26000084,
       "icon":"./assets/images/cards/Electro Spirit.png"
    },
    {
       "name":"Electro Giant",
       "elixir":7,
       "type":"Troop",
       "rarity":"Epic",
       "id":26000085,
       "icon":"./assets/images/cards/Electro Giant.png"
    },
    {
       "name":"Phoenix",
       "elixir":4,
       "type":"Troop",
       "rarity":"Legendary",
       "id":26000087,
       "icon":"./assets/images/cards/Phoenix.png"
    },
    {
       "name":"Cannon",
       "elixir":3,
       "type":"Building",
       "rarity":"Common",
       "id":27000000,
       "icon":"./assets/images/cards/Cannon.png"
    },
    {
       "name":"Goblin Hut",
       "elixir":5,
       "type":"Building",
       "rarity":"Rare",
       "id":27000001,
       "icon":"./assets/images/cards/Goblin Hut.png"
    },
    {
       "name":"Mortar",
       "elixir":4,
       "type":"Building",
       "rarity":"Common",
       "id":27000002,
       "icon":"./assets/images/cards/Mortar.png"
    },
    {
       "name":"Inferno Tower",
       "elixir":5,
       "type":"Building",
       "rarity":"Rare",
       "id":27000003,
       "icon":"./assets/images/cards/Inferno Tower.png"
    },
    {
       "name":"Bomb Tower",
       "elixir":4,
       "type":"Building",
       "rarity":"Rare",
       "id":27000004,
       "icon":"./assets/images/cards/Bomb Tower.png"
    },
    {
       "name":"Barbarian Hut",
       "elixir":6,
       "type":"Building",
       "rarity":"Rare",
       "id":27000005,
       "icon":"./assets/images/cards/Barbarian Hut.png"
    },
    {
       "name":"Tesla",
       "elixir":4,
       "type":"Building",
       "rarity":"Common",
       "id":27000006,
       "icon":"./assets/images/cards/Tesla.png"
    },
    {
       "name":"Elixir Collector",
       "elixir":6,
       "type":"Building",
       "rarity":"Rare",
       "id":27000007,
       "icon":"./assets/images/cards/Elixir Collector.png"
    },
    {
       "name":"X-Bow",
       "elixir":6,
       "type":"Building",
       "rarity":"Epic",
       "id":27000008,
       "icon":"./assets/images/cards/X-Bow.png"
    },
    {
       "name":"Tombstone",
       "elixir":3,
       "type":"Building",
       "rarity":"Rare",
       "id":27000009,
       "icon":"./assets/images/cards/Tombstone.png"
    },
    {
       "name":"Furnace",
       "elixir":4,
       "type":"Building",
       "rarity":"Rare",
       "id":27000010,
       "icon":"./assets/images/cards/Furnace.png"
    },
    {
       "name":"Goblin Cage",
       "elixir":4,
       "type":"Building",
       "rarity":"Rare",
       "id":27000012,
       "icon":"./assets/images/cards/Goblin Cage.png"
    },
    {
       "name":"Goblin Drill",
       "elixir":4,
       "type":"Building",
       "rarity":"Epic",
       "id":27000013,
       "icon":"./assets/images/cards/Goblin Drill.png"
    },
    {
       "name":"Fireball",
       "elixir":4,
       "type":"Spell",
       "rarity":"Rare",
       "id":28000000,
       "icon":"./assets/images/cards/Fireball.png"
    },
    {
       "name":"Arrows",
       "elixir":3,
       "type":"Spell",
       "rarity":"Common",
       "id":28000001,
       "icon":"./assets/images/cards/Arrows.png"
    },
    {
       "name":"Rage",
       "elixir":2,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000002,
       "icon":"./assets/images/cards/Rage.png"
    },
    {
       "name":"Rocket",
       "elixir":6,
       "type":"Spell",
       "rarity":"Rare",
       "id":28000003,
       "icon":"./assets/images/cards/Rocket.png"
    },
    {
       "name":"Goblin Barrel",
       "elixir":3,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000004,
       "icon":"./assets/images/cards/Goblin Barrel.png"
    },
    {
       "name":"Freeze",
       "elixir":4,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000005,
       "icon":"./assets/images/cards/Freeze.png"
    },
    {
       "name":"Mirror",
       "elixir":1,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000006,
       "icon":"./assets/images/cards/Mirror.png"
    },
    {
       "name":"Lightning",
       "elixir":6,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000007,
       "icon":"./assets/images/cards/Lightning.png"
    },
    {
       "name":"Zap",
       "elixir":2,
       "type":"Spell",
       "rarity":"Common",
       "id":28000008,
       "icon":"./assets/images/cards/Zap.png"
    },
    {
       "name":"Poison",
       "elixir":4,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000009,
       "icon":"./assets/images/cards/Poison.png"
    },
    {
       "name":"Graveyard",
       "elixir":5,
       "type":"Spell",
       "rarity":"Legendary",
       "id":28000010,
       "icon":"./assets/images/cards/Graveyard.png"
    },
    {
       "name":"The Log",
       "elixir":2,
       "type":"Spell",
       "rarity":"Legendary",
       "id":28000011,
       "icon":"./assets/images/cards/The Log.png"
    },
    {
       "name":"Tornado",
       "elixir":3,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000012,
       "icon":"./assets/images/cards/Tornado.png"
    },
    {
       "name":"Clone",
       "elixir":3,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000013,
       "icon":"./assets/images/cards/Clone.png"
    },
    {
       "name":"Earthquake",
       "elixir":3,
       "type":"Spell",
       "rarity":"Rare",
       "id":28000014,
       "icon":"./assets/images/cards/Earthquake.png"
    },
    {
       "name":"Barbarian Barrel",
       "elixir":2,
       "type":"Spell",
       "rarity":"Epic",
       "id":28000015,
       "icon":"./assets/images/cards/Barbarian Barrel.png"
    },
    {
       "name":"Heal Spirit",
       "elixir":1,
       "type":"Troop",
       "rarity":"Rare",
       "id":28000016,
       "icon":"./assets/images/cards/Heal Spirit.png"
    },
    {
       "name":"Giant Snowball",
       "elixir":2,
       "type":"Spell",
       "rarity":"Common",
       "id":28000017,
       "icon":"./assets/images/cards/Giant Snowball.png"
    },
    {
       "name":"Royal Delivery",
       "elixir":3,
       "type":"Spell",
       "rarity":"Common",
       "id":28000018,
       "icon":"./assets/images/cards/Royal Delivery.png"
    },
    {
       "name":"Archer Queen",
       "elixir":5,
       "type":"Troop",
       "rarity":"Champion",
       "id":26000072,
       "icon":"./assets/images/cards/Archer Queen.png"
    },
    {
       "name":"Mighty Miner",
       "elixir":4,
       "type":"Troop",
       "rarity":"Champion",
       "id":26000065,
       "icon":"./assets/images/cards/Mighty Miner.png"
    },
    {
       "name":"Golden Knight",
       "elixir":4,
       "type":"Troop",
       "rarity":"Champion",
       "id":26000074,
       "icon":"./assets/images/cards/Golden Knight.png"
    },
    {
       "name":"Skeleton King",
       "elixir":4,
       "type":"Troop",
       "rarity":"Champion",
       "id":26000069,
       "icon":"./assets/images/cards/Skeleton King.png"
    },
    {
       "name":"Monk",
       "elixir":5,
       "type":"Troop",
       "rarity":"Champion",
       "id":26000077,
       "icon":"./assets/images/cards/Monk.png"
    }
 ]

 export default cardList;