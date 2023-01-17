const cardList = [
   {
      "name":"Knight",
      "elixir":3,
      "type":"Troop",
      "rarity":"Common",
      "id":26000000,
      "icon":"https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
   },
   {
      "name":"Archers",
      "elixir":3,
      "type":"Troop",
      "rarity":"Common",
      "id":26000001,
      "icon":"https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
   },
   {
      "name":"Goblins",
      "elixir":2,
      "type":"Troop",
      "rarity":"Common",
      "id":26000002,
      "icon":"https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
   },
   {
      "name":"Giant",
      "elixir":5,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000003,
      "icon":"https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
   },
   {
      "name":"P.E.K.K.A",
      "elixir":7,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000004,
      "icon":"https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
   },
   {
      "name":"Minions",
      "elixir":3,
      "type":"Troop",
      "rarity":"Common",
      "id":26000005,
      "icon":"https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
   },
   {
      "name":"Balloon",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000006,
      "icon":"https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
   },
   {
      "name":"Witch",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000007,
      "icon":"https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
   },
   {
      "name":"Barbarians",
      "elixir":5,
      "type":"Troop",
      "rarity":"Common",
      "id":26000008,
      "icon":"https://api-assets.clashroyale.com/cards/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png"
   },
   {
      "name":"Golem",
      "elixir":8,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000009,
      "icon":"https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png"
   },
   {
      "name":"Skeletons",
      "elixir":1,
      "type":"Troop",
      "rarity":"Common",
      "id":26000010,
      "icon":"https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
   },
   {
      "name":"Valkyrie",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000011,
      "icon":"https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
   },
   {
      "name":"Skeleton Army",
      "elixir":3,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000012,
      "icon":"https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
   },
   {
      "name":"Bomber",
      "elixir":2,
      "type":"Troop",
      "rarity":"Common",
      "id":26000013,
      "icon":"https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
   },
   {
      "name":"Musketeer",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000014,
      "icon":"https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
   },
   {
      "name":"Baby Dragon",
      "elixir":4,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000015,
      "icon":"https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
   },
   {
      "name":"Prince",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000016,
      "icon":"https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png"
   },
   {
      "name":"Wizard",
      "elixir":5,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000017,
      "icon":"https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
   },
   {
      "name":"Mini P.E.K.K.A",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000018,
      "icon":"https://api-assets.clashroyale.com/cards/300/Fmltc4j3Ve9vO_xhHHPEO3PRP3SmU2oKp2zkZQHRZT4.png"
   },
   {
      "name":"Spear Goblins",
      "elixir":2,
      "type":"Troop",
      "rarity":"Common",
      "id":26000019,
      "icon":"https://api-assets.clashroyale.com/cards/300/FSDFotjaXidI4ku_WFpVCTWS1hKGnFh1sxX0lxM43_E.png"
   },
   {
      "name":"Giant Skeleton",
      "elixir":6,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000020,
      "icon":"https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png"
   },
   {
      "name":"Hog Rider",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000021,
      "icon":"https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
   },
   {
      "name":"Minion Horde",
      "elixir":5,
      "type":"Troop",
      "rarity":"Common",
      "id":26000022,
      "icon":"https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png"
   },
   {
      "name":"Ice Wizard",
      "elixir":3,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000023,
      "icon":"https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
   },
   {
      "name":"Royal Giant",
      "elixir":6,
      "type":"Troop",
      "rarity":"Common",
      "id":26000024,
      "icon":"https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
   },
   {
      "name":"Guards",
      "elixir":3,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000025,
      "icon":"https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
   },
   {
      "name":"Princess",
      "elixir":3,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000026,
      "icon":"https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
   },
   {
      "name":"Dark Prince",
      "elixir":4,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000027,
      "icon":"https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
   },
   {
      "name":"Three Musketeers",
      "elixir":9,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000028,
      "icon":"https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png"
   },
   {
      "name":"Lava Hound",
      "elixir":7,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000029,
      "icon":"https://api-assets.clashroyale.com/cards/300/unicRQ975sBY2oLtfgZbAI56ZvaWz7azj-vXTLxc0r8.png"
   },
   {
      "name":"Ice Spirit",
      "elixir":1,
      "type":"Troop",
      "rarity":"Common",
      "id":26000030,
      "icon":"https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
   },
   {
      "name":"Fire Spirit",
      "elixir":1,
      "type":"Troop",
      "rarity":"Common",
      "id":26000031,
      "icon":"https://api-assets.clashroyale.com/cards/300/16-BqusVvynIgYI8_Jci3LDC-r8AI_xaIYLgXqtlmS8.png"
   },
   {
      "name":"Miner",
      "elixir":3,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000032,
      "icon":"https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
   },
   {
      "name":"Sparky",
      "elixir":6,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000033,
      "icon":"https://api-assets.clashroyale.com/cards/300/2GKMkBrArZXgQxf2ygFjDs4VvGYPbx8F6Lj_68iVhIM.png"
   },
   {
      "name":"Bowler",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000034,
      "icon":"https://api-assets.clashroyale.com/cards/300/SU4qFXmbQXWjvASxVI6z9IJuTYolx4A0MKK90sTIE88.png"
   },
   {
      "name":"Lumberjack",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000035,
      "icon":"https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png"
   },
   {
      "name":"Battle Ram",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000036,
      "icon":"https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png"
   },
   {
      "name":"Inferno Dragon",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000037,
      "icon":"https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
   },
   {
      "name":"Ice Golem",
      "elixir":2,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000038,
      "icon":"https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
   },
   {
      "name":"Mega Minion",
      "elixir":3,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000039,
      "icon":"https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
   },
   {
      "name":"Dart Goblin",
      "elixir":3,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000040,
      "icon":"https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
   },
   {
      "name":"Goblin Gang",
      "elixir":3,
      "type":"Troop",
      "rarity":"Common",
      "id":26000041,
      "icon":"https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
   },
   {
      "name":"Electro Wizard",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000042,
      "icon":"https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
   },
   {
      "name":"Elite Barbarians",
      "elixir":6,
      "type":"Troop",
      "rarity":"Common",
      "id":26000043,
      "icon":"https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png"
   },
   {
      "name":"Hunter",
      "elixir":4,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000044,
      "icon":"https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png"
   },
   {
      "name":"Executioner",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000045,
      "icon":"https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png"
   },
   {
      "name":"Bandit",
      "elixir":3,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000046,
      "icon":"https://api-assets.clashroyale.com/cards/300/QWDdXMKJNpv0go-HYaWQWP6p8uIOHjqn-zX7G0p3DyM.png"
   },
   {
      "name":"Royal Recruits",
      "elixir":7,
      "type":"Troop",
      "rarity":"Common",
      "id":26000047,
      "icon":"https://api-assets.clashroyale.com/cards/300/jcNyYGUiXXNz3kuz8NBkHNKNREQKraXlb_Ts7rhCIdM.png"
   },
   {
      "name":"Night Witch",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000048,
      "icon":"https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png"
   },
   {
      "name":"Bats",
      "elixir":2,
      "type":"Troop",
      "rarity":"Common",
      "id":26000049,
      "icon":"https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
   },
   {
      "name":"Royal Ghost",
      "elixir":3,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000050,
      "icon":"https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
   },
   {
      "name":"Ram Rider",
      "elixir":5,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000051,
      "icon":"https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png"
   },
   {
      "name":"Zappies",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000052,
      "icon":"https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
   },
   {
      "name":"Rascals",
      "elixir":5,
      "type":"Troop",
      "rarity":"Common",
      "id":26000053,
      "icon":"https://api-assets.clashroyale.com/cards/300/KV48DfwVHKx9XCjzBdk3daT_Eb52Me4VgjVO7WctRc4.png"
   },
   {
      "name":"Cannon Cart",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000054,
      "icon":"https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
   },
   {
      "name":"Mega Knight",
      "elixir":7,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000055,
      "icon":"https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
   },
   {
      "name":"Skeleton Barrel",
      "elixir":3,
      "type":"Troop",
      "rarity":"Common",
      "id":26000056,
      "icon":"https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
   },
   {
      "name":"Flying Machine",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000057,
      "icon":"https://api-assets.clashroyale.com/cards/300/hzKNE3QwFcrSrDDRuVW3QY_OnrDPijSiIp-PsWgFevE.png"
   },
   {
      "name":"Wall Breakers",
      "elixir":2,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000058,
      "icon":"https://api-assets.clashroyale.com/cards/300/_xPphEfC8eEwFNrfU3cMQG9-f5JaLQ31ARCA7l3XtW4.png"
   },
   {
      "name":"Royal Hogs",
      "elixir":5,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000059,
      "icon":"https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png"
   },
   {
      "name":"Goblin Giant",
      "elixir":6,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000060,
      "icon":"https://api-assets.clashroyale.com/cards/300/SoW16cY3jXBwaTDvb39DkqiVsoFVaDWbzf5QBYphJrY.png"
   },
   {
      "name":"Fisherman",
      "elixir":3,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000061,
      "icon":"https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png"
   },
   {
      "name":"Magic Archer",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000062,
      "icon":"https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png"
   },
   {
      "name":"Electro Dragon",
      "elixir":5,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000063,
      "icon":"https://api-assets.clashroyale.com/cards/300/tN9h6lnMNPCNsx0LMFmvpHgznbDZ1fBRkx-C7UfNmfY.png"
   },
   {
      "name":"Firecracker",
      "elixir":3,
      "type":"Troop",
      "rarity":"Common",
      "id":26000064,
      "icon":"https://api-assets.clashroyale.com/cards/300/c1rL3LO1U2D9-TkeFfAC18gP3AO8ztSwrcHMZplwL2Q.png"
   },
   {
      "name":"Elixir Golem",
      "elixir":3,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000067,
      "icon":"https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png"
   },
   {
      "name":"Battle Healer",
      "elixir":4,
      "type":"Troop",
      "rarity":"Rare",
      "id":26000068,
      "icon":"https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png"
   },
   {
      "name":"Skeleton Dragons",
      "elixir":4,
      "type":"Troop",
      "rarity":"Common",
      "id":26000080,
      "icon":"https://api-assets.clashroyale.com/cards/300/qPOtg9uONh47_NLxGhhFc_ww9PlZ6z3Ry507q1NZUXs.png"
   },
   {
      "name":"Mother Witch",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000083,
      "icon":"https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
   },
   {
      "name":"Electro Spirit",
      "elixir":1,
      "type":"Troop",
      "rarity":"Common",
      "id":26000084,
      "icon":"https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png"
   },
   {
      "name":"Electro Giant",
      "elixir":7,
      "type":"Troop",
      "rarity":"Epic",
      "id":26000085,
      "icon":"https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
   },
   {
      "name":"Phoenix",
      "elixir":4,
      "type":"Troop",
      "rarity":"Legendary",
      "id":26000087,
      "icon":"https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
   },
   {
      "name":"Cannon",
      "elixir":3,
      "type":"Building",
      "rarity":"Common",
      "id":27000000,
      "icon":"https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png"
   },
   {
      "name":"Goblin Hut",
      "elixir":5,
      "type":"Building",
      "rarity":"Rare",
      "id":27000001,
      "icon":"https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png"
   },
   {
      "name":"Mortar",
      "elixir":4,
      "type":"Building",
      "rarity":"Common",
      "id":27000002,
      "icon":"https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
   },
   {
      "name":"Inferno Tower",
      "elixir":5,
      "type":"Building",
      "rarity":"Rare",
      "id":27000003,
      "icon":"https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
   },
   {
      "name":"Bomb Tower",
      "elixir":4,
      "type":"Building",
      "rarity":"Rare",
      "id":27000004,
      "icon":"https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png"
   },
   {
      "name":"Barbarian Hut",
      "elixir":6,
      "type":"Building",
      "rarity":"Rare",
      "id":27000005,
      "icon":"https://api-assets.clashroyale.com/cards/300/ho0nOG2y3Ch86elHHcocQs8Fv_QNe0cFJ2CijsxABZA.png"
   },
   {
      "name":"Tesla",
      "elixir":4,
      "type":"Building",
      "rarity":"Common",
      "id":27000006,
      "icon":"https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png"
   },
   {
      "name":"Elixir Collector",
      "elixir":6,
      "type":"Building",
      "rarity":"Rare",
      "id":27000007,
      "icon":"https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
   },
   {
      "name":"X-Bow",
      "elixir":6,
      "type":"Building",
      "rarity":"Epic",
      "id":27000008,
      "icon":"https://api-assets.clashroyale.com/cards/300/zVQ9Hme1hlj9Dc6e1ORl9xWwglcSrP7ejow5mAhLUJc.png"
   },
   {
      "name":"Tombstone",
      "elixir":3,
      "type":"Building",
      "rarity":"Rare",
      "id":27000009,
      "icon":"https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
   },
   {
      "name":"Furnace",
      "elixir":4,
      "type":"Building",
      "rarity":"Rare",
      "id":27000010,
      "icon":"https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
   },
   {
      "name":"Goblin Cage",
      "elixir":4,
      "type":"Building",
      "rarity":"Rare",
      "id":27000012,
      "icon":"https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png"
   },
   {
      "name":"Goblin Drill",
      "elixir":4,
      "type":"Building",
      "rarity":"Epic",
      "id":27000013,
      "icon":"https://api-assets.clashroyale.com/cards/300/eN2TKUYbih-26yBi0xy5LVFOA0zDftgDqxxnVfdIg1o.png"
   },
   {
      "name":"Fireball",
      "elixir":4,
      "type":"Spell",
      "rarity":"Rare",
      "id":28000000,
      "icon":"https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
   },
   {
      "name":"Arrows",
      "elixir":3,
      "type":"Spell",
      "rarity":"Common",
      "id":28000001,
      "icon":"https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
   },
   {
      "name":"Rage",
      "elixir":2,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000002,
      "icon":"https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
   },
   {
      "name":"Rocket",
      "elixir":6,
      "type":"Spell",
      "rarity":"Rare",
      "id":28000003,
      "icon":"https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
   },
   {
      "name":"Goblin Barrel",
      "elixir":3,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000004,
      "icon":"https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
   },
   {
      "name":"Freeze",
      "elixir":4,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000005,
      "icon":"https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png"
   },
   {
      "name":"Mirror",
      "elixir":1,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000006,
      "icon":"https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
   },
   {
      "name":"Lightning",
      "elixir":6,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000007,
      "icon":"https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
   },
   {
      "name":"Zap",
      "elixir":2,
      "type":"Spell",
      "rarity":"Common",
      "id":28000008,
      "icon":"https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
   },
   {
      "name":"Poison",
      "elixir":4,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000009,
      "icon":"https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
   },
   {
      "name":"Graveyard",
      "elixir":5,
      "type":"Spell",
      "rarity":"Legendary",
      "id":28000010,
      "icon":"https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
   },
   {
      "name":"The Log",
      "elixir":2,
      "type":"Spell",
      "rarity":"Legendary",
      "id":28000011,
      "icon":"https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
   },
   {
      "name":"Tornado",
      "elixir":3,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000012,
      "icon":"https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
   },
   {
      "name":"Clone",
      "elixir":3,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000013,
      "icon":"https://api-assets.clashroyale.com/cards/300/mHVCet-1TkwWq-pxVIU2ZWY9_2z7Z7wtP25ArEUsP_g.png"
   },
   {
      "name":"Earthquake",
      "elixir":3,
      "type":"Spell",
      "rarity":"Rare",
      "id":28000014,
      "icon":"https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png"
   },
   {
      "name":"Barbarian Barrel",
      "elixir":2,
      "type":"Spell",
      "rarity":"Epic",
      "id":28000015,
      "icon":"https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
   },
   {
      "name":"Heal Spirit",
      "elixir":1,
      "type":"Troop",
      "rarity":"Rare",
      "id":28000016,
      "icon":"https://api-assets.clashroyale.com/cards/300/GITl06sa2nGRLPvboyXbGEv5E3I-wAwn1Eqa5esggbc.png"
   },
   {
      "name":"Giant Snowball",
      "elixir":2,
      "type":"Spell",
      "rarity":"Common",
      "id":28000017,
      "icon":"https://api-assets.clashroyale.com/cards/300/7MaJLa6hK9WN2_VIshuh5DIDfGwm0wEv98gXtAxLDPs.png"
   },
   {
      "name":"Royal Delivery",
      "elixir":3,
      "type":"Spell",
      "rarity":"Common",
      "id":28000018,
      "icon":"https://api-assets.clashroyale.com/cards/300/LPg7AGjGI3_xmi7gLLgGC50yKM1jJ2teWkZfoHJcIZo.png"
   },
   {
      "name":"Archer Queen",
      "elixir":5,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000072,
      "icon":"https://api-assets.clashroyale.com/cards/300/p7OQmOAFTery7zCzlpDdm-LOD1kINTm42AwIHchZfWk.png"
   },
   {
      "name":"Mighty Miner",
      "elixir":4,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000065,
      "icon":"https://api-assets.clashroyale.com/cards/300/Cd9R56yraxTvJiD8xJ2qT2OdsHyh94FqOAarXpbyelo.png"
   },
   {
      "name":"Golden Knight",
      "elixir":4,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000074,
      "icon":"https://api-assets.clashroyale.com/cards/300/WJd207D0O1sN-l1FTb8P9KhYL2oF5jY26vRUfTUW3FQ.png"
   },
   {
      "name":"Skeleton King",
      "elixir":4,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000069,
      "icon":"https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
   },
   {
      "name":"Monk",
      "elixir":5,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000077,
      "icon":"https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
   }
   
]

const championList = [
   {
      "name":"Archer Queen",
      "elixir":5,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000072,
      "icon":"https://api-assets.clashroyale.com/cards/300/p7OQmOAFTery7zCzlpDdm-LOD1kINTm42AwIHchZfWk.png"
   },
   {
      "name":"Mighty Miner",
      "elixir":4,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000065,
      "icon":"https://api-assets.clashroyale.com/cards/300/Cd9R56yraxTvJiD8xJ2qT2OdsHyh94FqOAarXpbyelo.png"
   },
   {
      "name":"Golden Knight",
      "elixir":4,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000074,
      "icon":"https://api-assets.clashroyale.com/cards/300/WJd207D0O1sN-l1FTb8P9KhYL2oF5jY26vRUfTUW3FQ.png"
   },
   {
      "name":"Skeleton King",
      "elixir":4,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000069,
      "icon":"https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
   },
   {
      "name":"Monk",
      "elixir":5,
      "type":"Troop",
      "rarity":"Champion",
      "id":26000077,
      "icon":"https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
   }
]
/*
Features:
    Added - Cards to exclude
    Added - Cards to include
    Added - Champions:  2: always |  1: random | 0: none
    - Average elixir: higher than or lower than
    - Rarity specificity
    - Good deck maker (win condition / support / tank killer / big spell / small spell / etc.)
*/
function createRandomDeck(excludeArr, includeArr, champion) {
   let deck = [];
   let hasChampion = false;

   includeArr.forEach(e => {
      deck.push(e);
      if (e.rarity == champion) 
         hasChampion = true;
   });
   if (champion == 2) {
      deck.push(championList[randomInt(0, championList.length)]);
      hasChampion = true
   } else if (champion == 0) {
      hasChampion = true;
   }

   while (deck.length < 8) {
      let card = cardList[randomInt(0, cardList.length)];
      if (!deck.includes(card) && !excludeArr.includes(card)) {
         if (card.rarity == "Champion") {
            if (hasChampion) continue;
            hasChampion = true;
         }
         deck.push(card);
      }
   }

   return deck;
}

function getLinkFromDeck(deck) {
   let link = "https://link.clashroyale.com/deck/en?deck=";
   deck.forEach(e => {
      link += e.id + ";"
   });
   return link.substring(0, link.length - 1) + "&id=2Q8C888LL"
}

function randomInt(start, rangeSize) {
    return start + Math.floor(Math.random() * rangeSize);
}

function copyLinkToClipboard() {
    navigator.clipboard.writeText(createRandomDeckLink());
}

function linkRandomDeck() {
   let cardContainer = document.getElementsByClassName("card-container")[0];
   while(cardContainer.firstChild){
      cardContainer.removeChild(cardContainer.firstChild);
   }

   const EXCLUDE_LIST = [];
   const INCLUDE_LIST = [];
   const CHAMPION_SETTING = getValueFromRadioButtons( document.getElementsByClassName("champion-option"));
   let deck = createRandomDeck(EXCLUDE_LIST, INCLUDE_LIST, CHAMPION_SETTING);
   let link = getLinkFromDeck(deck);
   let linkOutput = document.getElementById("link");
   linkOutput.innerHTML = "COPY LINK";
   linkOutput.setAttribute("href", link);
   linkOutput.style.display = "inline-block";
   

   deck.forEach(card => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.setAttribute("class", "card-name");
      const text = document.createTextNode(card.name);
      const image = document.createElement("img");
      image.setAttribute("src", card.icon);
      image.setAttribute("class", card.rarity == "Champion" ? "card-img champion" : "card-img");
      image.setAttribute("alt", card.name);
      span.appendChild(text);
      li.appendChild(span);
      li.appendChild(image);
      li.style.opacity = 0;
      cardContainer.appendChild(li);
   });
}

function getValueFromRadioButtons(inputElements) {
   for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
         return inputElements[i].value;
      }
   }
   return null;
}
