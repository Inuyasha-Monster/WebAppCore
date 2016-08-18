(function () {
    Rx.Observable.fromArray([1, 2, 3]);
    Rx.Observable.fromArray([1, 2, 3], Rx.Scheduler.async);
});
