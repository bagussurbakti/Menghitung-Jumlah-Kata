let kalimat = 'Wa Are The Champion My Friend';
let result = 0;

for (let i = 0; i < kalimat.length; i++) {
  if (kalimat[0] === '' || kalimat[0] === ' ') {
    result = 0;
    break;
  }
  if (kalimat[i] === ' ' || i === kalimat.length - 1) {
    result++;
  }
}
console.log(result);
