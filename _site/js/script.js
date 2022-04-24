const re = new RegExp('\d+');

function test(string) {
  return string.match(re);
}

let test2 = test('1 How 8 you doing');

console.log(test('1 how 0 doing t8'));