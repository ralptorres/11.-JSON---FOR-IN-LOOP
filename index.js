let subj = {
  English: 90,
  Math: 95,
  Science: 94,
  Filipino: 89,
  MAPEH: 88,
  PE: 85,
};

let total = 0;

for (let k in subj) {
  console.log(`${k} : ${subj[k]}`);
}
let average = Object.keys(subj);
for (i = 0; i < average.length; i++) {
  total += subj[average[i]];
}
console.log(`  `);
console.log(`Average: ${total / Object.keys(subj).length}`);
