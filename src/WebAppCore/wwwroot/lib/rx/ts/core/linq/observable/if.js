(function () {
    var o;
    Rx.Observable.if(function () { return false; }, o);
    Rx.Observable.if(function () { return false; }, o, o);
    Rx.Observable.if(function () { return false; }, o, Rx.Scheduler.async);
});
