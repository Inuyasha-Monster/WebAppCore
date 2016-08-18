(function () {
    var o = Rx.Observable.range(1, 2);
    o = Rx.Observable.range(1, 2, Rx.Scheduler.async);
});
