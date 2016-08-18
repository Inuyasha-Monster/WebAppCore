(function () {
    var o;
    o = o.startWith(1, 2, 3, 4, 5);
    o = o.startWith(Rx.Scheduler.async, 1, 2, 3, 4, 5);
});
