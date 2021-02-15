import {logger} from "../../../utils/logger";

class MyRequest {
    constructor(
        private amount: number
    ) {
        this.amount = amount;
        logger.add("Requested: $" + amount + "\n");
    }

    get(bill: number): MyRequest {
        const count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        logger.add("Dispense " + count + " $" + bill + " bills \n");
        return this;
    }
}

const request = new MyRequest(378);
request.get(100).get(50).get(20).get(10).get(5).get(1);
console.log(logger.get());
