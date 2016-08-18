var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s;
    var d = s.schedule('state', function (sh, s) { return Rx.Disposable.empty; });
    var d = s.scheduleFuture('state', 100, function (sh, s) { return Rx.Disposable.empty; });
    var n = Rx.Scheduler.now;
    var a = Rx.Scheduler.normalize(1000);
});
