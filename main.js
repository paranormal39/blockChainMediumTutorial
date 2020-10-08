const crypto = require('crypto');
class Block{
    constructor(index,data,preHash){
        this.index = index;
        this.timestamp = Math.floor(Data.now()/1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }
    getHash(){
        var encript=Json.strngify(this.data) + this.prevHash + this.index + this.timestamp;
        var hash = crypto.createHmac('sha256',"secret").update(encipt).digest('hex');
        return hash;
        
    }
}

class BlockChain {
    constructor(){
        this.chain = [];
    }

    addBlock(data){
        let index = this.chain.length;
        let prevHash = this.chain.length !==0 ? this.chain[this.chain.length -1].hash :0;
        let block = new Block(index,data,prevHash);
        this.chain.push(block);
    }

    chainIsValid(){
        for(var i=0;i<this.chain.length;i++){
            if(this.chain[i].hash !== this.chain[i].getHash())
            return false;
            if(i >0 && this.chain[i].prevHash !== this.chain[i-1].hash)
            return false;
        }
        return true;
    }
}

const BChain = new BlockChain();
BChain.addBlock({sender:"Anthony Montanez",reciver:"boss mac ",amount:20});
BChain.addBlock({sender:"Twonzeey",reciver:"weezy",amount:40});
console.dir(BChain,{depth:null})

console.log("*********** Validity of this blockchain:  ",BChain.chainIsValid());