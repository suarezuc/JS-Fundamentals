const arg = Number.parseInt(process.argv[2]);

if (Number.isNaN(arg)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${arg}`);
}
