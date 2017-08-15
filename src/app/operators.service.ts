import { Injectable } from '@angular/core';

@Injectable()
export class OperatorsService {
 
  operators = [{
    operator: "retry",
    details: "Retry an observable sequence a specific number of times should an error occur."
  }, {
    operator: "merge",
    details: "Turn multiple observables into a single observable."
  }, {
    operator: "concat",
    details: "Subscribe to observables in order as previous completes, emit values."
  }, {
    operator: "timer",
    details: "After given duration, emit numbers in sequence every specified duration."
  }, {
    operator: "from",
    details: "Turn an array, promise, or iterable into an observable."
  }, {
    operator: "multicast",
    details: "Share source utilizing the provided Subject."
  }]

  constructor() { }

}
