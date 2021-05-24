const ulList = document.querySelector("#timer-1");
const spanElDays = document.querySelector('.value[data-value="days"]');
const spanElHours = document.querySelector('.value[data-value="hours"]');
const spanElMins = document.querySelector('.value[data-value="mins"]');
const spanElSecs = document.querySelector('.value[data-value="secs"]');

class CountdownTimer {
  constructor({ targetDate, selector, updateFace }) {
    this.targetDate = targetDate;
    this.value = selector;
    this.updateFace = updateFace;
  }

  updateCount() {
    const currentTime = Date.now();
    const timeToFinish = this.targetDate - currentTime;
    const time = this.getTimeToTargetDate(timeToFinish);

    this.updateFace(time);
  }

  start() {
    const startTime = new Date();
    this.updateCount();

    setInterval(() => {
      this.updateCount();
      // console.log(" CurrentTime :", currentTime);
      // console.log(" TargetDate :", this.targetDate.getTime());
      // console.log(" TimeToFinish", timeToFinish);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeToTargetDate(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2021"),
  updateFace: updateCountdownTimer,
});

countdownTimer.start();

function updateCountdownTimer({ days, hours, mins, secs }) {
  ulList.style.display = "flex";
  ulList.style.justifyContent = "center";

  spanElDays.textContent = `${days}`;
  spanElDays.style.fontSize = "30px";
  spanElDays.style.color = "tomato";
  spanElDays.style.marginBottom = "10px";
  spanElDays.style.display = "inline-flex";
  spanElDays.style.padding = "6px 12px";

  spanElHours.textContent = `${hours}`;
  spanElHours.style.fontSize = "30px";
  spanElHours.style.color = "tomato";
  spanElHours.style.marginBottom = "10px";
  spanElHours.style.display = "inline-flex";
  spanElHours.style.padding = "6px 12px";

  spanElMins.textContent = `${mins}`;
  spanElMins.style.fontSize = "30px";
  spanElMins.style.color = "tomato";
  spanElMins.style.marginBottom = "10px";
  spanElMins.style.display = "inline-flex";
  spanElMins.style.padding = "6px 12px";

  spanElSecs.textContent = `${secs}`;
  spanElSecs.style.fontSize = "30px";
  spanElSecs.style.color = "tomato";
  spanElSecs.style.marginBottom = "10px";
  spanElSecs.style.display = "inline-flex";
  spanElSecs.style.padding = "6px 12px";
}
