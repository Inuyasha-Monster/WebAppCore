(function () {
    var o;
    var p;
    o = Rx.Observable.merge(o, p, o, p);
    o = Rx.Observable.merge([o, p, o, p]);
    o = Rx.Observable.merge(Rx.Scheduler.async, o, p, o, p);
    o = Rx.Observable.merge(Rx.Scheduler.async, [o, p, o, p]);
});
