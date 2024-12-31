function stringChop(str, size) {
  // your code here
	const result =[];
	for(let i=0;i<str.length;i+=chunkLength){
		result.push(str.slice(i,i+chunkLength));
	}
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
