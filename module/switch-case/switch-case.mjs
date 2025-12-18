import {
  rules,
  data,
  cardHasil,
  createHeader,
  prosesorGaming,
  conTarget,
  headerTarget,
} from "../module.mjs";

function switchCase(resultRule) {
  switch (true) {
    case resultRule.desc === "hp-outdoor-midrange-ignore-battery":
      {
        const teks =
          "Saat ini, tidak terdapat rekomendasi smartphone kelas menengah (midrange) yang sesuai untuk penggunaan di luar ruangan. Hal ini disebabkan karena sebagian besar smartphone midrange telah menggunakan layar AMOLED, yang memiliki tingkat ketahanan lebih rendah untuk penggunaan di lingkungan kerja lapangan.";
        createHeader(headerTarget, teks);
      }

      break;
    case resultRule.desc === "hp-outdoor-midrange":
      {
        const teks =
          "Saat ini, tidak terdapat rekomendasi smartphone kelas menengah (midrange) yang sesuai untuk penggunaan di luar ruangan. Hal ini disebabkan karena sebagian besar smartphone midrange telah menggunakan layar AMOLED, yang memiliki tingkat ketahanan lebih rendah untuk penggunaan di lingkungan kerja lapangan.";
        createHeader(conTarget, teks);
      }

      break;
    case resultRule.desc === "hp-outdoor-flagship-ignore-battery":
      {
        const teks =
          "Saat ini, belum terdapat rekomendasi smartphone kelas flagship yang ideal untuk penggunaan di luar ruangan. Hal ini dikarenakan sebagian besar smartphone flagship menggunakan layar AMOLED, yang cenderung memiliki tingkat ketahanan lebih rendah untuk aktivitas kerja di lapangan.";
        createHeader(conTarget, teks);
      }
      break;
    case resultRule.desc === "hp-outdoor-flagship":
      {
        const teks =
          "Saat ini, belum terdapat rekomendasi smartphone kelas flagship yang ideal untuk penggunaan di luar ruangan. Hal ini dikarenakan sebagian besar smartphone flagship menggunakan layar AMOLED, yang cenderung memiliki tingkat ketahanan lebih rendah untuk aktivitas kerja di lapangan.";
        createHeader(conTarget, teks);
      }
      break;
    case resultRule.desc === "hp-outdoor-entrylevel-ignore-battery":
      {
        const teks =
          "Berikut adalah rekomendasi smartphone yang cocok digunakan untuk aktivitas outdoor, dengan dukungan layar IPS yang lebih sesuai untuk kondisi kerja di lapangan. Layar IPS memiliki tingkat visibilitas yang baik di bawah cahaya matahari, sudut pandang yang luas, serta ketahanan yang relatif lebih baik terhadap image burn-in dibandingkan layar AMOLED. Selain itu, karakteristik layar IPS cenderung lebih stabil saat digunakan dalam jangka waktu lama dan kondisi lingkungan yang menantang, sehingga menjadikannya pilihan yang lebih andal untuk aktivitas luar ruangan.";
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
          "Berikut adalah rekomendasi smartphone yang cocok digunakan untuk aktivitas outdoor, dengan dukungan layar IPS yang lebih sesuai untuk kondisi kerja di lapangan. Layar IPS memiliki tingkat visibilitas yang baik di bawah cahaya matahari, sudut pandang yang luas, serta ketahanan yang relatif lebih baik terhadap image burn-in dibandingkan layar AMOLED. Selain itu, karakteristik layar IPS cenderung lebih stabil saat digunakan dalam jangka waktu lama dan kondisi lingkungan yang menantang, sehingga menjadikannya pilihan yang lebih andal untuk aktivitas luar ruangan.";
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
          "Berikut adalah rekomendasi smartphone entry-level untuk mendukung kebutuhan bisnis Anda. Smartphone dengan fokus yang Anda pilih ini dapat dikategorikan sebagai perangkat all-rounder, yang mampu menunjang berbagai aktivitas harian secara seimbang.";
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
          "Berikut adalah rekomendasi smartphone entry-level untuk mendukung kebutuhan bisnis Anda. Smartphone dengan fokus yang Anda pilih ini dapat dikategorikan sebagai perangkat all-rounder, yang mampu menunjang berbagai aktivitas harian secara seimbang.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan bisnis Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini dapat dikategorikan sebagai perangkat all-rounder, yang mampu menunjang berbagai aktivitas kerja secara seimbang.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan bisnis Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini dapat dikategorikan sebagai perangkat all-rounder, yang mampu menunjang berbagai aktivitas kerja secara seimbang.";
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
          "Berikut adalah rekomendasi smartphone flagship untuk mendukung kebutuhan bisnis Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini dapat dikategorikan sebagai perangkat all-rounder, yang mampu menunjang berbagai aktivitas kerja secara optimal.";
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
          "Berikut adalah rekomendasi smartphone flagship untuk mendukung kebutuhan bisnis Anda, dengan perhatian khusus pada ketahanan baterai yang tahan lama. Smartphone dengan fokus penggunaan yang Anda pilih ini dapat dikategorikan sebagai perangkat all-rounder, yang mampu menunjang berbagai aktivitas kerja secara optimal.";

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
          "Berikut adalah rekomendasi smartphone entry-level untuk mendukung kebutuhan fotografi Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan kapasitas penyimpanan (ROM) yang besar serta layar AMOLED, sehingga mampu menunjang aktivitas fotografi secara optimal.";
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
          "Berikut adalah rekomendasi smartphone entry-level untuk mendukung kebutuhan fotografi Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan kapasitas penyimpanan (ROM) yang besar serta layar AMOLED, sehingga mampu menunjang aktivitas fotografi secara optimal.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan fotografi Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan kapasitas penyimpanan (ROM) yang besar serta layar AMOLED, sehingga mampu menunjang aktivitas fotografi secara optimal.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan fotografi Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan kapasitas penyimpanan (ROM) yang besar serta layar AMOLED, sehingga mampu menunjang aktivitas fotografi secara optimal.";
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
          "Berikut adalah rekomendasi smartphone flagship untuk mendukung kebutuhan fotografi Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan kapasitas penyimpanan (ROM) yang besar serta layar AMOLED, sehingga mampu menunjang aktivitas fotografi secara optimal.";
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
          "Berikut adalah rekomendasi smartphone flagship untuk mendukung kebutuhan fotografi Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan kapasitas penyimpanan (ROM) yang besar serta layar AMOLED, dan battery yang besar sehingga mampu menunjang aktivitas fotografi secara optimal.";
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
          "Berikut adalah rekomendasi smartphone entry-level untuk mendukung kebutuhan gaming Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan RAM dan ROM berkapasitas besar, chipset bertenaga yang masih andal untuk penggunaan hingga tiga tahun ke depan, speaker stereo, daya tahan baterai yang lama, serta layar AMOLED, sehingga mampu memberikan pengalaman bermain yang optimal.";
        createHeader(conTarget, teks);
      }
      const hpGamingEntryLevelIgnoreBattery = data.filter((hp) => {
        const isPriceOk = hp.price <= 5000000;
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        return isPriceOk && isChipsetOk;
      });

      hpGamingEntryLevelIgnoreBattery.forEach((el) => cardHasil(conTarget, el));
      break;
    case resultRule.desc === "gaming-entrylevel":
      {
        const teks =
          "Berikut adalah rekomendasi smartphone entry-level untuk mendukung kebutuhan gaming Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan RAM dan ROM berkapasitas besar, chipset bertenaga yang masih andal untuk penggunaan hingga tiga tahun ke depan, speaker stereo, daya tahan baterai yang lama, serta layar AMOLED, sehingga mampu memberikan pengalaman bermain yang optimal.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan gaming Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan RAM dan ROM berkapasitas besar, chipset bertenaga yang tetap andal hingga tiga tahun ke depan, speaker stereo, daya tahan baterai yang lama, serta layar AMOLED, sehingga mampu memberikan pengalaman bermain game yang optimal.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan gaming Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan RAM dan ROM berkapasitas besar, chipset bertenaga yang tetap andal hingga tiga tahun ke depan, speaker stereo, daya tahan baterai yang lama, serta layar AMOLED, sehingga mampu memberikan pengalaman bermain game yang optimal.";
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
          "Berikut adalah rekomendasi smartphone flagship untuk mendukung kebutuhan gaming Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan RAM dan ROM berkapasitas besar, chipset berperforma tinggi yang tetap andal hingga tiga tahun ke depan, speaker stereo, daya tahan baterai yang lama, serta layar AMOLED, sehingga mampu memberikan pengalaman bermain game yang maksimal.";
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
          "Berikut adalah rekomendasi smartphone kelas menengah (midrange) untuk mendukung kebutuhan gaming Anda. Smartphone dengan fokus penggunaan yang Anda pilih ini telah dilengkapi dengan RAM dan ROM berkapasitas besar, chipset bertenaga yang tetap andal hingga tiga tahun ke depan, speaker stereo, serta layar AMOLED, sehingga mampu memberikan pengalaman bermain game yang optimal.";
        createHeader(conTarget, teks);
      }
      const flagshipGamingIgnoreBattery = data.filter((hp) => {
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        const isPiceOK = hp.price >= 8000000;

        return isChipsetOk && isPiceOK;
      });
      flagshipGamingIgnoreBattery.forEach((data) => cardHasil(conTarget, data));

      console.log(flagshipGamingIgnoreBattery);

      break;
  }
}

export { switchCase };
