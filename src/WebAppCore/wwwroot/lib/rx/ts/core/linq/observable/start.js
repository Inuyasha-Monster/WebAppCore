(function () {
    var o = Rx.Observable.start(function () { return 'abc'; });
    var o = Rx.Observable.start(function () { return 'abc'; }, Rx.Scheduler.default);
    var o = Rx.Observable.start(function () { return 'abc'; }, Rx.Scheduler.default, {});
});
