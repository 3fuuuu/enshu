const ARRAY_LENGTH = 10;
const a = new Array(ARRAY_LENGTH);

for (i = 0; i < ARRAY_LENGTH; i++) {
  a[i] = Math.floor(Math.random() * 100);
}
for (i = 0; i < ARRAY_LENGTH; i++) {
  console.log(a[i]);
}

a.sort((a, b) => b - a);
console.log("降順にソート");
for (i = 0; i < ARRAY_LENGTH; i++) {
  console.log(a[i]);
}
