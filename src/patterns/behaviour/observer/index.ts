import {Subject} from "./subject";

/***
 * Example #1
 */
const testSub = new Subject<number>();
const testSubSubscription = testSub.subscribe({
    next: (val) => {
        console.log(val);
    },
    error: (val) => {
        console.log(val);
    },
    complete: () => {
        console.log('complete');
    }
})

setTimeout(() => testSub.next(15), 1500);
testSub.next(5);
// testSub.complete();
testSub.error(0);
// testSubSubscription.unsubscribe();
