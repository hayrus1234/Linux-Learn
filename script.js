const topics = [
        "File and Directory Management",
        "File Viewing and Editing",
        "File Permissions",
        "System Information",
        "Networking",
        "Process Management",
        "User Management",
        "Text Processing"
        // Add more topics as needed
    ];


document.addEventListener("DOMContentLoaded", () => {
    const topicList = document.getElementById("topic-list");
    const contentDisplay = document.getElementById("content-display");

    // Populate sidebar with topics
    for (let topic in topics) {
        let listItem = document.createElement("li");
        listItem.textContent = topic;
        listItem.addEventListener("click", () => {
                //i need topic name not number sto be displayed
            contentDisplay.textContent = topics[topic];
            contentDisplay.style.display = "block";

        });
        topicList.appendChild(listItem);
    }
});


