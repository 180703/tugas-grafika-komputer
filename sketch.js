let x = 0; // Posisi horizontal awal astronot
let y = 200; // Posisi vertikal tetap astronot

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0); // Latar belakang hitam seperti luar angkasa

  // Gambar bintang-bintang
  for (let i = 0; i < 100; i++) {
    fill(255);
    noStroke();
    ellipse(random(width), random(height), 2, 2);
  }

  // Gambar badan astronot
  fill(200); // Warna abu-abu terang untuk baju luar angkasa
  ellipse(x, y + 100, 100, 150); // Badan

  // Gambar helm (kepala)
  fill(255); // Warna putih untuk helm
  ellipse(x, y, 80, 80); // Helm

  // Gambar visor (kaca depan helm)
  fill(0, 100, 150); // Warna biru gelap untuk kaca helm
  ellipse(x, y, 60, 60); // Kaca depan

  // Gambar tangan kiri
  fill(200); // Warna yang sama dengan baju luar angkasa
  rect(x - 60, y + 50, 20, 60, 10); // Tangan kiri

  // Gambar tangan kanan
  rect(x + 40, y + 50, 20, 60, 10); // Tangan kanan

  // Gambar kaki kiri
  rect(x - 30, y + 160, 20, 50, 10); // Kaki kiri

  // Gambar kaki kanan
  rect(x + 10, y + 160, 20, 50, 10); // Kaki kanan

  // Gambar antena di helm
  stroke(200);
  strokeWeight(4);
  line(x, y - 40, x, y - 60); // Tiang antena
  fill(255, 0, 0); // Warna merah untuk ujung antena
  ellipse(x, y - 60, 10, 10); // Ujung antena

  // Update posisi astronot
  x += 2; // Astronot bergerak ke kanan

  // Jika astronot melewati batas kanan layar, reset ke kiri
  if (x > width) {
    x = -80; // Set posisi awal di luar layar sebelah kiri
  }
}
