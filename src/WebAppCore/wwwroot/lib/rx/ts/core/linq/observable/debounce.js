(function () {
    var o;
    o.debounce(100);
    o.debounce(100, Rx.Scheduler.async);
    o.debounce(function (x) { return Rx.Observable.just(x.length); });
});
