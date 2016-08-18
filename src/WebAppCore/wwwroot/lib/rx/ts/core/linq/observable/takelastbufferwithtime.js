(function () {
    var o;
    var o2;
    o2 = o.takeLastBufferWithTime(1);
    o2 = o.takeLastBufferWithTime(1, Rx.Scheduler.async);
});
