const buah = ["apel"];
const kendaraan = ["tosa", "apel"];

const gabungan = [...buah, ...kendaraan];

const setGabungan = new Set(gabungan);

const tanpaDuplikat = [...setGabungan];

console.log(`Tanpa set : ${gabungan}`);

console.log(`dengan set : ${tanpaDuplikat}`);

for (const baru of gabungan) {
  console.log(baru);
}
