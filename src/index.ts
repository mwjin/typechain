import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string): string {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [new Block("", 1, "Genesis Block")];
  }

  get lastBlockHash(): string {
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    this.blocks.push(
      new Block(this.lastBlockHash, this.blocks.length + 1, data)
    );
  }

  public getBlocks() {
    return this.blocks;
  }
}

const blockchain = new Blockchain();
blockchain.addBlock("Hi");
console.log(blockchain);
