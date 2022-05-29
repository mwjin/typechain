import { add } from "./myPackage";
const hello = () => "Hi";

class Block {
  constructor(data: string) {}
  static hello() {
    console.log("Hello World!");
    console.log(add(1, 2));
  }
}

Block.hello();
