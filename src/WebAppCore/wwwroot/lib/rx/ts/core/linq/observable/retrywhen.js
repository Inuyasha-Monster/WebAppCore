(function () {
    var o;
    o.retryWhen(function () { return Rx.Observable.of(1); });
});
