(function () {
    var o;
    o = o.takeWithTime(1);
    o = o.takeWithTime(100, Rx.Scheduler.default);
});
