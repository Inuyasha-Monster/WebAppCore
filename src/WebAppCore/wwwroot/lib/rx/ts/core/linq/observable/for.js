(function () {
    Rx.Observable.for(['a'], function (x) { return x; });
    Rx.Observable.forIn(['a'], function (x) { return x; });
});
