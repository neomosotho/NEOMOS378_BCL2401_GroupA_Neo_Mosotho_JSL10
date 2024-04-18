document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    // Debugged the element ID used in the eventlistener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                // Corrected the element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Added an async to the jsConcepts
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async',]);
        // 🪲 Bug: Incorrect function call
        // Added the correct functional cancelIdleCallback(reactConcepts)
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    // Added await to the Asynchronous function using the try-catch method
    document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
        const res = await fetch('directions.json') 
        const directions = await res.json()
        const message = await navigateLabyrinth(directions)
        // 🪲 Bug: Incorrect method
        document.getElementById("room3Result").innerHTML = message;
    } catch (err) {
        console.error("Error:",err)
    }
    });
});
            
function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
// Changed code to look for the mostRecent book instead of the oldest book
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    // Added a filter to intersect the sets
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        // Added await to the new Promise
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}