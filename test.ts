function incrementIndex(fn: (index: number) => void, index: number): void {
  fn(index + 1);
}

function logIndex(index: number) {
  const url = `${index}`;
  return url;
}

let index = 0;
console.log(incrementIndex(logIndex, index));
