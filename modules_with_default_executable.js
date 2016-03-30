var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Maths from './modules_with_default_module.js'

console.log(Maths.PI);
console.log(Maths.sqrt(+arg1));
console.log(Maths.square(+arg2));
