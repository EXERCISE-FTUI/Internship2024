const myTasks = [];

function showMenu() {
    return parseInt(prompt(
        "1. Add a new task\n" +
        "2. Remove a task\n" +
        "3. Update a task\n" +
        "4. Show tasks\n" +
        "-1. Exit\n" +
        "Enter your choice:"
    ));
}

function startTaskManager() {
    let selectedMenu = 0;

    while (selectedMenu !== -1) {
        selectedMenu = showMenu();

        switch (selectedMenu) {
            case 1: {
                const newTask = {};
                newTask.name = prompt("Enter the task name:");
                newTask.deadline = prompt("Enter the task deadline:");
                newTask.status = "finished";
                myTasks.push(newTask);
                break;
            }
            case 2: {
                let taskList = myTasks.map((task, index) => `${index + 1}. ${task.name}`).join("\n");
                const taskIndex = parseInt(prompt(`Remove a task:\n${taskList}\nEnter the task index to remove:`));
                if (taskIndex > 0 && taskIndex <= myTasks.length) {
                    myTasks.splice(taskIndex - 1, 1);
                } else {
                    alert("Invalid task index.");
                }
                break;
            }
            case 3: {
                let taskList = myTasks.map((task, index) => `${index + 1}. ${task.name}`).join("\n");
                const taskIndex = parseInt(prompt(`Update a task:\n${taskList}\nEnter the task index to update:`));
                if (taskIndex > 0 && taskIndex <= myTasks.length) {
                    const updateChoice = parseInt(prompt(
                        "1. Update task name\n" +
                        "2. Update task deadline\n" +
                        "3. Update task status\n" +
                        "Enter your choice:"
                    ));
                    switch (updateChoice) {
                        case 1:
                            myTasks[taskIndex - 1].name = prompt("Enter the new task name:");
                            break;
                        case 2:
                            myTasks[taskIndex - 1].deadline = prompt("Enter the new task deadline:");
                            break;
                        case 3:
                            myTasks[taskIndex - 1].status = prompt("Enter the new task status:");
                            break;
                        default:
                            alert("Invalid choice.");
                            break;
                    }
                } else {
                    alert("Invalid task index.");
                }
                break;
            }
            case 4: {
                const showChoice = parseInt(prompt(
                    "1. Show finished tasks\n" +
                    "2. Show unfinished tasks\n" +
                    "3. Show all tasks\n" +
                    "Enter your choice:"
                ));
                let taskDisplay = "";
                switch (showChoice) {
                    case 1:
                        taskDisplay = myTasks
                            .filter(task => task.status === "finished")
                            .map((task, index) => `${index + 1}. ${task.name} - ${task.deadline}`)
                            .join("\n");
                        break;
                    case 2:
                        taskDisplay = myTasks
                            .filter(task => task.status === "unfinished")
                            .map((task, index) => `${index + 1}. ${task.name} - ${task.deadline}`)
                            .join("\n");
                        break;
                    case 3:
                        taskDisplay = myTasks
                            .map((task, index) => `${index + 1}. ${task.name} - ${task.deadline}`)
                            .join("\n");
                        break;
                    default:
                        alert("Invalid choice.");
                        continue;
                }
                alert(taskDisplay || "No tasks found.");
                break;
            }
            case -1:
                alert("Exit");
                break;
            default:
                alert("Invalid choice.");
                break;
        }
    }
}
