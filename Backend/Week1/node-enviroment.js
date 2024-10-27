const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const myTasks = [];

function showMenu() {
    console.log("\n1. Add a new task");
    console.log("2. Remove a task");
    console.log("3. Update a task");
    console.log("4. Show tasks");
    console.log("-1. Exit");
}

function prompt(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
    let selectedMenu = 0;

    while (selectedMenu !== -1) {
        showMenu();
        selectedMenu = parseInt(await prompt("Enter your choice: "));

        switch (selectedMenu) {
            case 1: {
                const newTask = {};
                newTask.name = await prompt("Enter the task name: ");
                newTask.deadline = await prompt("Enter the task deadline: ");
                newTask.status = "unfinished";
                myTasks.push(newTask);
                break;
            }
            case 2: {
                myTasks.forEach((task, index) => console.log(`${index + 1}. ${task.name}`));
                const taskIndex = parseInt(await prompt("Enter the task index to remove: "));
                if (taskIndex > 0 && taskIndex <= myTasks.length) {
                    myTasks.splice(taskIndex - 1, 1);
                } else {
                    console.log("Invalid task index.");
                }
                break;
            }
            case 3: {
                myTasks.forEach((task, index) => console.log(`${index + 1}. ${task.name}`));
                const taskIndex = parseInt(await prompt("Enter the task index to update: "));
                if (taskIndex > 0 && taskIndex <= myTasks.length) {
                    const updateChoice = parseInt(await prompt(
                        "\n1. Update task name\n" +
                        "2. Update task deadline\n" +
                        "3. Update task status\n" +
                        "Enter your choice: "
                    ));
                    switch (updateChoice) {
                        case 1:
                            myTasks[taskIndex - 1].name = await prompt("Enter the new task name: ");
                            break;
                        case 2:
                            myTasks[taskIndex - 1].deadline = await prompt("Enter the new task deadline: ");
                            break;
                        case 3:
                            myTasks[taskIndex - 1].status = await prompt("Enter the new task status: ");
                            break;
                        default:
                            console.log("Invalid choice.");
                            break;
                    }
                } else {
                    console.log("Invalid task index.");
                }
                break;
            }
            case 4: {
                const showChoice = parseInt(await prompt(
                    "\n1. Show finished tasks\n" +
                    "2. Show unfinished tasks\n" +
                    "3. Show all tasks\n" +
                    "Enter your choice: "
                ));
                console.log("Tasks:");
                switch (showChoice) {
                    case 1:
                        myTasks.filter(task => task.status === "finished")
                               .forEach((task, index) => console.log(`${index + 1}. ${task.name} - ${task.deadline}`));
                        break;
                    case 2:
                        myTasks.filter(task => task.status === "unfinished")
                               .forEach((task, index) => console.log(`${index + 1}. ${task.name} - ${task.deadline}`));
                        break;
                    case 3:
                        myTasks.forEach((task, index) => console.log(`${index + 1}. ${task.name} - ${task.deadline}`));
                        break;
                    default:
                        console.log("Invalid choice.");
                        break;
                }
                break;
            }
            case -1:
                console.log("Exit");
                rl.close();
                return;
            default:
                console.log("Invalid choice.");
                break;
        }
    }
}

main();