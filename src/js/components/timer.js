const timer = (id, deadLine) => {

    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) ) % 24),
            days = Math.floor( t / (1000 * 60 * 60 * 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    };

    const addZero = (num) => {
        if (num < 0){
            return '0' + num;
        } else {
            return num;
        }
    }

    const setClock = (timerId, endTime) => {
        const timer = document.getElementById(timerId),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            const t = getTimeRemaining(endTime);

            days.textContent = addZero(t.days.toString());
            hours.textContent = addZero(t.hours.toString());
            minutes.textContent = addZero(t.minutes.toString());
            seconds.textContent = addZero(t.seconds.toString());

            if (t.total <= 0){
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    }
    setClock(id, deadLine)

};

export default timer;