(function () {
    var o;
    Rx.Observable.repeat(42, 4, Rx.Scheduler.async);
    Rx.Observable.repeat(42, null, Rx.Scheduler.async);
    Rx.Observable.repeat(42);
});
