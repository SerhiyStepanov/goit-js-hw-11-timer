const spanElDays = document.querySelector('.value[data-value="days"]')
const spanElHours = document.querySelector('.value[data-value="hours"]')
const spanElMins = document.querySelector('.value[data-value="mins"]')
const spanElSecs = document.querySelector('.value[data-value="secs"]')


class CountdownTimer {
    constructor({targetDate,selector,updateFace}) {
        this.targetDate = targetDate;
        this.value = selector;
        this.updateFace = updateFace;
    }

    start() {
        const startTime = new Date()

        setInterval(() => {
            const currentTime = Date.now()
            const timeToFinish = this.targetDate - currentTime
            const time = this.getTimeToTargetDate(timeToFinish)
            // updateCountdownTimer({days,hours,mins,secs})
            this.updateFace(time)
            // console.log('current :', currentTime)
            // console.log('finish :',timeToFinish) 
            // console.log(`${days}:${hours}:${mins}:${secs}`)
        }, 1000)
    }


    pad(value) {
    return String(value).padStart(2,'0')
    }
    

    getTimeToTargetDate(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days,hours,mins,secs}
    }
    
}


const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 27, 2020'),
    updateFace : updateCountdownTimer,
});
 
countdownTimer.start()

function updateCountdownTimer({days,hours,mins,secs}) {
    spanElDays.textContent = `${days}`
    spanElHours.textContent = `${hours}`
    spanElMins.textContent = `${mins}`
    spanElSecs.textContent = `${secs}`
}
