import { rules, data, cardHasil, createHeader } from "./../module/module.mjs";

// console.log(data);

function penalaranMundur(faktaPengguna) {
  // njukok kabel goal soko rulebase
  const daftarTujuan = [...new Set(rules.map((aturan) => aturan.goal))];

  // looping goal
  for (const tujuan of daftarTujuan) {
    // golek aturan sing podo karo tujuan
    for (const aturan of rules) {
      // jika goal di rulebase sama dengan tujuan
      if (aturan.goal === tujuan) {
        // dianggep kabeh bener kek
        let premisCocokSemua = true;

        // Cek semua premis pada aturan
        for (const namaPremis in aturan.premises) {
          //
          const nilaiYangDibutuhkan = aturan.premises[namaPremis];
          const nilaiDariPengguna = faktaPengguna[namaPremis];

          // Jika ada premis yang tidak sesuai fakta → aturan gagal
          if (nilaiDariPengguna !== nilaiYangDibutuhkan) {
            premisCocokSemua = false;
            break;
          }
        }

        // Jika semua premis sesuai, maka aturan ini adalah hasilnya
        if (premisCocokSemua) {
          return aturan;
        }
      }
    }
  }

  // Jika tidak ada aturan yang cocok
  return null;
}

const prosesorGaming = [
  "mediatek dimensity 9400+",
  "qualcomm snapdragon 8 elite gen 4",
  "qualcomm snapdragon 8 elite gen 3",
  "qualcomm snapdragon 8 gen 3",
  "apple a18 pro",
  "mediatek dimensity 9400e",
  "apple A18",
  "mediatek dimensity 9400",
  "mediatek dimensity 9300+",
  "snapdragon 8s gen 4",
  "apple a17 pro",
  "mediatek dimensity 9300",
  "qualcom snapdragon 8 gen 3",
  "apple a16 bionic",
  "samsung exynos 2400",
  "samsung exynos 2400e",
  "mediatek dimensity 8450",
  "apple a15 bionic",
  "mediatek dimensity 8400",
  "mediatek dimensity 8300 ultra",
];

const conTarget = document.querySelector(".container-hasil");

document
  .getElementById("expertSystemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    const userFacts = {
      anggaran: form.anggaran.value,
      prioritas: form.prioritas.value,
      baterai: form.baterai.value,
    };

    // console.log(userFacts);

    const resultRule = penalaranMundur(userFacts);

    // console.log(resultRule);

    conTarget.innerHTML = "";

    // console.log(resultRule.desc);

    switch (true) {
      case resultRule.desc === "hp-outdoor-midrange-ignore-battery":
        {
          const teks =
            "Tidak ada rekomendasi hp midrange yang cocok untk outdoor";
          createHeader(conTarget, teks);
        }

        break;
      case resultRule.desc === "hp-outdoor-midrange":
        {
          const teks =
            "Tidak ada rekomendasi hp midrange yang cocok untk outdoor";
          createHeader(conTarget, teks);
        }

        break;
      case resultRule.desc === "hp-outdoor-flagship-ignore-battery":
        {
          const teks =
            "Tidak ada rekomendasi hp flagship yang cocok untk outdoor";
          createHeader(conTarget, teks);
        }
        break;
      case resultRule.desc === "hp-outdoor-flagship":
        {
          const teks =
            "Tidak ada rekomendasi hp flagship yang cocok untk outdoor";
          createHeader(conTarget, teks);
        }
        break;
      case resultRule.desc === "hp-outdoor-entrylevel-ignore-battery":
        {
          const teks =
            "Berikut Rekomendasi hp yang cocok digunakan untuk outdoor dengan layar ips yang cocok dengan konsisi outdoor.";
          createHeader(conTarget, teks);
          const find = data.filter((hp) => {
            const isScreenOk = hp.screen === "ips";

            return isScreenOk;
          });

          find.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-outdoor-entrylevel":
        {
          const teks =
            "Berikut Rekomendasi hp yang cocok digunakan untuk outdoor dengan layar ips yang cocok dengan konsisi outdoor.";
          createHeader(conTarget, teks);
          const find = data.filter((hp) => {
            const isScreenOk = hp.screen === "ips";

            return isScreenOk;
          });

          find.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-bisnis-entrylevel-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp entry level untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
          createHeader(conTarget, teks);
          const bisnisMidrange = data.filter((hp) => {
            const find = hp.name.includes("poco x6 pro 5g");
            return find;
          });

          bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-bisnis-entrylevel":
        {
          const teks =
            "Berikut rekomendasi hp entry level untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
          createHeader(conTarget, teks);

          const bisnisMidrange = data.filter((hp) => {
            const find = hp.name.includes("poco x6 pro 5g");
            return find;
          });

          bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-bisnis-midrange-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
          createHeader(conTarget, teks);
          const bisnisMidrange = data.filter((hp) => {
            const find = hp.name.includes("vivo v40 5g");
            return find;
          });

          bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-bisnis-midrange":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
          createHeader(conTarget, teks);
          const bisnisMidrange = data.filter((hp) => {
            const find = hp.name.includes("vivo v40 5g");
            return find;
          });

          bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-bisnis-flagship-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp flagship untuk keperluan bisnis anda yang menghiraukan ketahanan baterai tahan lama. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
          createHeader(conTarget, teks);
          const bisnisFlagship = data.filter((hp) => {
            const find =
              hp.name.includes("samsung s24 ultra") ||
              hp.name.includes("iphone 15");
            return find;
          });

          bisnisFlagship.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "hp-bisnis-flagship":
        {
          const teks =
            "Berikut rekomendasi hp flagship untuk keperluan bisnis anda . hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
          createHeader(conTarget, teks);
          const bisnisFlagship = data.filter((hp) => {
            const find = hp.name.includes("samsung s24 ultra");
            return find;
          });

          bisnisFlagship.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "entrylevel-kamera-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp entry level untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
          createHeader(conTarget, teks);
          const entrylevelKamera = data.filter((hp) => {
            const find =
              hp.name.includes("redmi note 13 pro 5g") ||
              hp.name.includes("infinix note 40 4g");
            return find;
          });

          entrylevelKamera.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "entrylevel-kamera":
        {
          const teks =
            "Berikut rekomendasi hp entry level untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
          createHeader(conTarget, teks);
          const entrylevelKamera = data.filter((hp) => {
            const find =
              hp.name.includes("redmi note 13 pro 5g") ||
              hp.name.includes("infinix note 40 4g");
            return find;
          });

          entrylevelKamera.forEach((items) => cardHasil(conTarget, items));
        }

        break;
      case resultRule.desc === "midrange-kamera-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
          createHeader(conTarget, teks);
          const midrangeKamera = data.filter((hp) => {
            const find = hp.name.includes("vivo v40 5g");

            return find;
          });

          midrangeKamera.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "midrange-kamera":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
          createHeader(conTarget, teks);
          const midrangeKamera = data.filter((hp) => {
            const find = hp.name.includes("vivo v40 5g");

            return find;
          });

          midrangeKamera.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "flagship-kamera-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp flagship untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
          createHeader(conTarget, teks);
          const flagshipKamera = data.filter((hp) => {
            const find =
              hp.name.includes("samsung s24 ultra") ||
              hp.name.includes("iphone 15");

            return find;
          });

          flagshipKamera.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "flagship-kamera":
        {
          const teks =
            "Berikut rekomendasi hp flagship untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
          createHeader(conTarget, teks);
          const flagshipKamera = data.filter((hp) => {
            const find = hp.name.includes("samsung s24 ultra");
            return find;
          });

          flagshipKamera.forEach((items) => cardHasil(conTarget, items));
        }
        break;
      case resultRule.desc === "gaming-entrylevel-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp entrylevel untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
          createHeader(conTarget, teks);
        }
        const hpGamingEntryLevelIgnoreBattery = data.filter((hp) => {
          const isPriceOk = hp.price <= 5000000;
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          return isPriceOk && isChipsetOk;
        });

        hpGamingEntryLevelIgnoreBattery.forEach((el) =>
          cardHasil(conTarget, el)
        );
        break;
      case resultRule.desc === "gaming-entrylevel":
        {
          const teks =
            "Berikut rekomendasi hp entrylevel untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
          createHeader(conTarget, teks);
        }
        const hpGamingEntryLevel = data.filter((hp) => {
          const isPriceOk = hp.price <= 5000000;
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          return isPriceOk && isChipsetOk;
        });

        hpGamingEntryLevel.forEach((el) => cardHasil(conTarget, el));
        break;
      case resultRule.desc === "gaming-midrange":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
          createHeader(conTarget, teks);
        }
        const hpGamingMidrange = data.filter((hp) => {
          const isPriceOk = hp.price >= 5000000 && hp.price <= 8000000;
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          return isPriceOk && isChipsetOk;
        });

        hpGamingMidrange.forEach((items) => cardHasil(conTarget, items));

        break;
      case resultRule.desc === "gaming-midrange-ignore-battery":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
          createHeader(conTarget, teks);
        }
        const hpGamingMidrangeIgnoreBattery = data.filter((hp) => {
          const isPriceOk = hp.price >= 5000000 && hp.price <= 8000000;
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          return isPriceOk && isChipsetOk;
        });

        hpGamingMidrangeIgnoreBattery.forEach((items) =>
          cardHasil(conTarget, items)
        );

        break;
      case resultRule.desc === "gaming-flagship":
        {
          const teks =
            "Berikut rekomendasi hp flagship untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
          createHeader(conTarget, teks);
        }
        const flagshipGaming = data.filter((hp) => {
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          const isPiceOK = hp.price >= 8000000;
          const isBatteryOk = hp.battery >= 5000;

          return isChipsetOk && isPiceOK && isBatteryOk;
        });
        flagshipGaming.forEach((data) => cardHasil(conTarget, data));

        break;
      case resultRule.desc === "gaming-flagship-Ignory-Battery":
        {
          const teks =
            "Berikut rekomendasi hp midrange untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, dan layar amoled.";
          createHeader(conTarget, teks);
        }
        const flagshipGamingIgnoreBattery = data.filter((hp) => {
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          const isPiceOK = hp.price >= 8000000;

          return isChipsetOk && isPiceOK;
        });
        flagshipGamingIgnoreBattery.forEach((data) =>
          cardHasil(conTarget, data)
        );

        console.log(flagshipGamingIgnoreBattery);

        break;
    }
  });

// cardHasil(conTarget);
