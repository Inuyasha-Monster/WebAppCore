(function () {
    var o;
    var p;
    o = Rx.Observable.onErrorResumeNext(o, p, o, p);
    o = Rx.Observable.onErrorResumeNext([o, p, o, p]);
});
