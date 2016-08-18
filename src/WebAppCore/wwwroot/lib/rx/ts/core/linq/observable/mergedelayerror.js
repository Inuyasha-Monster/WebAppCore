(function () {
    var o;
    var p;
    Rx.Observable.mergeDelayError(o, p, o, p);
    Rx.Observable.mergeDelayError([o, p, o, p]);
});
