document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("header ul li");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on ${item.textContent.trim()}`);
        });
    });

    const searchBox = document.querySelector("input[type='text']");
    searchBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            alert(`Searching for "${searchBox.value}"...`);
        }
    });
});
