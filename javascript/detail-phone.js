function detailPhone(idHp, data) {
  const detail = data.find((_, index) => index === Number(idHp));

  const container = document.querySelector(".detail-page");
  const btnBack = document.querySelector(".detail-back");

  btnBack.addEventListener("click", () => {
    container.classList.add("displayNone");
  });

  const androidHp = document.querySelector(".android-hp");
  const jaringanHp = document.querySelector(".jaringan-hp");
  const ip68 = document.querySelector(".ip-68");

  const fotoHp = document.getElementById("foto-hp");
  const namaHp = document.querySelector(".detail-name");
  const hargaHp = document.querySelector(".harga-hp");
  const prossesorHp = document.querySelector(".prossesor-hp");
  const ramHp = document.querySelector(".ram-hp");
  const penyimpananHp = document.querySelector(".penyimpanan-hp");
  const kameraHp = document.querySelector(".kamera-hp");
  const bateraiHp = document.querySelector(".baterai-hp");
  const layarHp = document.querySelector(".layar-hp");

  androidHp.textContent = detail.operatingSystem;
  jaringanHp.textContent = detail.network;
  detail.ip68 ? (ip68.textContent = "ip68") : (ip68.style.display = "none");

  fotoHp.setAttribute("src", `asset/img-hp/${detail.foto}`);
  namaHp.textContent = detail.name;
  hargaHp.textContent = `Rp ${detail.price.toLocaleString("id")}`;
  prossesorHp.textContent = detail.chipset;
  ramHp.textContent = detail.ram.map((items) => items + "GB").join(" / ");
  penyimpananHp.textContent = detail.storage
    .map((items) => (items === 1000 ? "1TB" : items + "GB"))
    .join(" / ");
  kameraHp.textContent = detail.backCam + "MP";
  bateraiHp.textContent = detail.battery.toLocaleString("id") + "mAh";
  layarHp.textContent = detail.ukuranLayar;
}

export default detailPhone;
