
import { myInterface } from './myInterface.js';
import { Foo } from './Foo.js';

function doInc(obj){
  const interfaceMy = obj[myInterface];

  if (interfaceMy === undefined) {
    throw new Error('Object does not support the interface.');
  }
  interfaceMy.inc();
}

const counter1 = new Foo(10);

doInc(counter1);
