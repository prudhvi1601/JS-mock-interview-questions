
function xTime(x, y) {
    let count = 0;
    const interval = setInterval(function () {
        console.log(new Date().toLocaleTimeString());
        count++;
        if (count == y) {
            clearInterval(interval);
        }
    }, x * 1000);
}

xTime(2, 5);

/*
Expected Output in console example (if the current time is 7:59:41 am):
  7:59:41 AM
  7:59:43 AM
  7:59:45 AM
  7:59:47 AM
  7:59:49 AM
*/

