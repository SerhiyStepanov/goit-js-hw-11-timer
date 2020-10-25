const spanElDays = document.querySelector('.value[data-value="days"]')
const spanElHours = document.querySelector('.value[data-value="hours"]')
const spanElMins = document.querySelector('.value[data-value="mins"]')
const spanElSecs = document.querySelector('.value[data-value="secs"]')


class CountdownTimer {
    constructor(targetDate,selector) {
        this.targetDate = targetDate
        this.selector = selector
    }

    start() {
        const startTime = new Date()

        setInterval(() => {
            const currentTime = new Date()
            const timeToFinish = this.targetDate - currentTime
            const { days, hours, mins, secs } = this.getTimeToTargetDate(timeToFinish)
            // updateCountdownTimer({days,hours,mins,secs})
            // console.log('start',startTime)
            console.log('current :', currentTime)
            console.log('finish :',timeToFinish) 
            console.log(`${days}:${hours}:${mins}:${secs}`)
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
    targetDate: new Date('Okt 26, 2021'),
});
 
countdownTimer.start()


function updateCountdownTimer(time) {
    spanElDays.textContent = `${days}`
    spanElHours.textContent = `${hours}`
    spanElMins.textContent = `${mins}`
    spanElSecs.textContent = `${secs}`
}
