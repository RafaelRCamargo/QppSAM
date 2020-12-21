var timer = new easytimer.Timer();

//timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
});

timer.addEventListener('reset', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});

AOS.init({
    duration: 800
});
