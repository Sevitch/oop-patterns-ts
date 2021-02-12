import {Observable} from "./observable";
import {Subject} from "./subject";


// TODO: complete
new Observable(sub => {
    sub.next(7);
    sub.next(10);
}).subscribe({
    next: (val) => {
        console.log(val);
    },
    error: (error) => {
        console.log(error);
    }
});


// Works
const testSub = new Subject<number>();
const testSubSubscription = testSub.subscribe({
    next: (val) => {
        console.log(val);
    },
    error: (val) => {
        console.log(val);
    }
})

setTimeout(() => testSub.next(15), 1500);
testSub.next(5);
testSub.error(0);

// testSubSubscription.unsubscribe();
