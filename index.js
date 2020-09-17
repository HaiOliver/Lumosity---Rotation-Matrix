const rotateMatrix90C = source => {
	// get the dimensions of the source matrix
	const M = source.length;
	const N = source[0].length;

	// create a new NxM destination array
	let destination = new Array(N);
	for (let i = 0; i < N; i++) {
		destination[i] = new Array(M);
	}

	// start copying from source into destination
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			destination[i][j] = source[M - j - 1][i];
		}
	}

	// return the destination matrix
	return destination;
};

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log('original: ',matrix)
for(var i =0; i<4;i++){
      testMatrix =matrix
      console.log(rotateMatrix90C(testMatrix));   // [[7,4,1],[8,5,2],[9,6,3]]
      matrix = rotateMatrix90C(testMatrix)
}
