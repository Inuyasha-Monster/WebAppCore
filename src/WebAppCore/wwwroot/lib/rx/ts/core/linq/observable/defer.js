(function () {
    var o;
    Rx.Observable.defer(function () { return o; });
    Rx.Observable.defer(function () { return o.toPromise(); });
});
