(function () {
    var observer;
    var n = observer.toNotifier();
    var o = observer.asObserver();
    var c = observer.checked();
    o = observer.notifyOn(Rx.Scheduler.immediate);
    var so = Rx.Observer.fromNotifier(function (n) {
        if (n.kind === 'N') {
            console.log('Next: ' + n.value);
        }
        if (n.kind === 'E') {
            console.log('Error: ' + n.exception);
        }
        if (n.kind === 'C') {
            console.log('Completed');
        }
    });
});
