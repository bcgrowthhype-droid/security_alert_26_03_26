self.onmessage = function (e) {
    const tasks = e.data;

    // Process tasks
    for (let i = 0; i < tasks.length; i++) {
        // Example heavy work
        let result = tasks[i] * 2;
    }

    // Send completion count
    self.postMessage({ done: tasks.length });
};

const box = document.getElementById("poptxt");

box.addEventListener("click", () => {
  document.body.style.cursor = "none"; // hide globally
});

// box.addEventListener("mousemove", () => {
//   document.body.style.cursor = "none"; // keep hidden while moving
// });

// box.addEventListener("mouseleave", () => {
//   document.body.style.cursor = "default"; // show again
// });