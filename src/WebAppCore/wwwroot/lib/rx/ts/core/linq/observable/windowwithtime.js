(function () {
    var o;
    var so = o.windowWithTime(100);
    so = o.windowWithTime(100, 5);
    var so = o.windowWithTime(100, Rx.Scheduler.async);
    so = o.windowWithTime(100, 5, Rx.Scheduler.async);
});
