(function () {
    var o;
    o = Rx.Observable.interval(100);
    o = Rx.Observable.interval(100, Rx.Scheduler.async);
});
