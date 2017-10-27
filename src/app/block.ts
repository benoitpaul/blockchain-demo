export class Block {

  constructor(private index, 
    private previousHash, 
    private timestamp, 
    private data,
    private hash) {
  }
}
