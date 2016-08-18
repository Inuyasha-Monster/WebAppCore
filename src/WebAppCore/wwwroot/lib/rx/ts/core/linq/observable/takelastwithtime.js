(function () {
    var o;
    o = o.takeLastWithTime(1);
    o = o.takeLastWithTime(1, Rx.Scheduler.async, Rx.Scheduler.default);
});
