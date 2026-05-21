import { data } from "../module.mjs";
import detailPhone from "./detail-phonev2.js";

function kapitalAwal(text) {
  return text
    .split(" ")
    .map(function (kata) {
      return kata.charAt(0).toUpperCase() + kata.slice(1);
    })
    .join(" ");
}

const containerDetail = document.querySelector(".detail-page");
console.log(containerDetail);
containerDetail.classList.add("displayNone");

function cardHasil(conTarget, data) {
  const container = document.createElement("section");
  const conImage = document.createElement("figure");
  const img = document.createElement("img");
  const conText = document.createElement("div");
  const header = document.createElement("header");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const footer = document.createElement("footer");
  const span3 = document.createElement("span");
  const conIcon = document.createElement("div");

  // hiasana
  {
    const circle = document.createElement("span");
    container.appendChild(circle);

    Object.assign(circle.style, {
      position: "absolute",
      width: "100%",
      scale: "200%",
      aspectRatio: "1/1",
      borderRadius: "50%",
      top: "0",
      right: "0",
      transform: "translate(-50%, 50%)",
      backgroundColor: "var(--accent)",
      borderRadius: "50%",
      filter: "blur(20px)",
      opacity: "0.5",
    });
  }

  img.setAttribute("src", `asset/img-hp/${data.foto}`);
  img.setAttribute("loading", "lazy");
  img.alt = data.foto;

  container.classList.add("container-card-hasil");
  conTarget.appendChild(container);

  container.appendChild(conImage);
  conImage.appendChild(img);
  container.appendChild(conText);
  conText.appendChild(header);
  header.appendChild(span1);
  header.appendChild(span2);
  conText.appendChild(footer);
  footer.appendChild(span3);
  footer.appendChild(conIcon);

  span1.textContent = `${kapitalAwal(data.name)} Mulai Dari`;
  span2.textContent = `Rp ${data.price.toLocaleString("id")}`;
  span3.textContent = "Lihat Detail";
  conIcon.classList.add("con-icon");

  conImage.classList.add("con-image");
  conText.classList.add("con-text");

  conIcon.innerHTML = `<svg viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
      stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  footer.addEventListener("click", function () {
    const idName = data.name;

    containerDetail.classList.remove("displayNone");
    console.log(idName);

    detailPhone(idName, data);
  });

  const btnCloseDetail = document.querySelector(".detail-back");
  btnCloseDetail.addEventListener("click", function () {
    containerDetail.classList.add("displayNone");
  });
}

// cardHasil(conTarget);

export { cardHasil };
