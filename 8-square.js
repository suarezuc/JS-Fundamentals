const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}

// This code takes a command line argument for the size of a square and prints a square of 'X's of that size.
// If the argument is not a number, it prints 'Missing size'.