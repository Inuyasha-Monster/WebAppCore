(function () {
    var o = Rx.Observable.startAsync(function () { return Rx.Observable.just('a').toPromise(); });
});
