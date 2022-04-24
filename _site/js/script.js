const re = new RegExp('\d+');

function test(string) {
  return string.match(re);
}

console.log(test('1 how 0 doing t8'));