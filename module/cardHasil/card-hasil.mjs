function cardHasil(conTarget, data) {
  const container = document.createElement("section");
  const conKiri = document.createElement("section");
  const conKanan = document.createElement("section");

  container.classList.add("dcfgtds");

  conTarget.appendChild(container);
  container.appendChild(conKiri);
  container.appendChild(conKanan);

  Object.assign(container.style, {
    // height: "20rem",
    width: "100%",
    // backgroundColor: "green",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "8px",
    display: "flex",
  });

  Object.assign(conKiri.style, {
    width: "40%",
    height: "100% !important",
    // backgroundColor: "cyan",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  Object.assign(conKanan.style, {
    width: "60%",
    // backgroundColor: "yellow",
    padding: "2rem 0.5rem",
  });
  //container kiri
  {
    const conImg = document.createElement("div");
    const conHarga = document.createElement("div");
    const teksHarga = document.createElement("p");

    conKiri.appendChild(conImg);
    conImg.appendChild(conHarga);
    conHarga.appendChild(teksHarga);

    teksHarga.textContent = `Rp ${data.price.toLocaleString("id-ID")}`;

    Object.assign(conImg.style, {
      position: "relative",
      width: "85%",
      aspectRatio: "1/1",
      //   backgroundColor: "green",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(./asset/img-hp/${data.foto})`,
    });

    Object.assign(conHarga.style, {
      height: "3rem",
      width: "100%",
      //   backgroundColor: "yellow",
      backdropFilter: "blur(10px)",
      position: "absolute",
      bottom: "0",
      margin: "0 0 5% 0",
      borderRadius: "50px",
      border: "2px solid rgba(127, 127, 127, 1)",
      background: "#0000005b",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });

    Object.assign(teksHarga.style, {
      color: "var(--bg1)",
      // color: "",
      fontWeight: "900",
      fontSize: "1.3em",
    });
  }

  // container kanan
  {
    const ul = document.createElement("ul");
    const header = document.createElement("header");
    const headerTeks = document.createElement("p");

    conKanan.appendChild(header);
    header.appendChild(headerTeks);
    conKanan.appendChild(ul);

    headerTeks.textContent = `${data.name}`;

    Object.assign(header.style, {
      fontSize: "1.2em",
      fontWeight: "700",
      padding: "0 0 0 5%",
      color: "var(--accen)",
    });

    Object.assign(ul.style, {
      //   backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      padding: "0 0.5rem 0 0",
    });

    for (let i = 0; i < 6; i++) {
      const li = document.createElement("li");
      const conImg = document.createElement("div");
      const teks = document.createElement("p");

      ul.appendChild(li);
      li.appendChild(conImg);
      li.appendChild(teks);

      Object.assign(conImg.style, {
        height: "2.5rem",
        aspectRatio: "1/1",
        // backgroundColor: "gray",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });

      Object.assign(li.style, {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0 0 0.5rem 0",
        // backgroundColor: "green",
      });

      Object.assign(teks.style, {
        fontWeight: "800",
        color: "var(--font)",
        whiteSpace: "wrap",
      });

      switch (true) {
        case i === 0:
          teks.textContent = `${data.screen} ${data.refresRate
            .map((el) => el + "Hz")
            .join(" / ")}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/screen.png)",
          });
          break;
        case i === 1:
          teks.textContent = `${data.chipset}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/chipset.png)",
          });
          break;
        case i === 2:
          teks.textContent = `${data.ram.map((el) => el + "GB").join(" / ")}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/ram.png)",
          });
          break;
        case i === 3:
          teks.textContent = `${data.storage
            .map((el) => el + "GB")
            .join(" / ")}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/rom.png)",
          });
          break;
        case i === 4:
          teks.textContent = `Front Cam : ${data.frontCam}, Back Cam : ${data.backCam}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/cam.png)",
          });
          break;
        case i === 5:
          teks.textContent = `Speaker ${data.speaker}, Network ${data.network}, Battery ${data.battery}mAh`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/.png)",
          });
          break;
      }
    }
  }
}

// cardHasil(conTarget);

export { cardHasil };
