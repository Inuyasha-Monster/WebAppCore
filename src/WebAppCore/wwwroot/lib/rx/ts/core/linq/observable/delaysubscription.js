(function () {
    var o;
    o.delaySubscription(1000);
    o.delaySubscription(1000, Rx.Scheduler.async);
});
