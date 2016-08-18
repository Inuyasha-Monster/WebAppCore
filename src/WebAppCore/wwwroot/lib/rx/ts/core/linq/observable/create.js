(function () {
    var o;
    o = Rx.Observable.create(function (o) { });
    o = Rx.Observable.create(function (o) { return Rx.Disposable.empty; });
    o = Rx.Observable.create(function (o) { return function () { }; });
});
