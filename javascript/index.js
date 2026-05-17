import { data } from "../module/dataset/dataset.mjs";

function kapitalAwal(text) {
  return text
    .split(" ")
    .map(function (kata) {
      return kata.charAt(0).toUpperCase() + kata.slice(1);
    })
    .join(" ");
}
const containerResult = document.querySelector(".container-result");

console.log(data);

const dataHpDisplay = ["samsung s24 ultra", "vivo v40 5g", "poco x6 pro 5g"];

const dataFilter = data.filter((item) => dataHpDisplay.includes(item.name));

const containerDisplay = document.querySelector(".container-display");

dataFilter.forEach((item, index) => {
  const containerCard = document.createElement("section");
  containerCard.classList.add("card-display");
  containerDisplay.appendChild(containerCard);

  const containerImg = document.createElement("figure");
  containerImg.classList.add("container-foto");
  containerCard.appendChild(containerImg);

  const img = document.createElement("img");
  containerImg.appendChild(img);
  img.setAttribute("alt", "foto-hp");
  img.setAttribute("src", `asset/img-hp/${item.foto}`);

  const containerDesc = document.createElement("div");
  containerDesc.classList.add("container-desc");
  containerCard.appendChild(containerDesc);

  const merk = document.createElement("span");
  merk.classList.add("merk");
  merk.textContent = kapitalAwal(item.name);
  containerDesc.appendChild(merk);

  const text = document.createElement("span");
  text.classList.add("text");
  text.textContent = "Mulai dari";
  containerDesc.appendChild(text);

  const harga = document.createElement("span");
  harga.classList.add("harga");
  harga.textContent = `Rp ${item.price.toLocaleString("id")}`;
  containerDesc.appendChild(harga);

  // item.foto
  // item.name
  // item.harga

  console.log(containerCard);

  containerCard.addEventListener("mouseenter", () => {
    containerCard.style.zIndex = "2";
  });
  containerCard.addEventListener("mouseleave", () => {
    containerCard.style.zIndex = "1";
  });
});
