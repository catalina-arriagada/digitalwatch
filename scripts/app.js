 setInterval(() => {
    const watch = document.getElementsByClassName("watch")[0];
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (second < 10) {
        second = `0${second}`;
    }
    watch.textContent = `${hour}:${minute}:${second}`;
    
 }, 1000);