const prompt = require("prompt-sync")();
const myTasks = [];

function main() {
  let selectedMenu = 0;

  while (selectedMenu !== -1) {
    console.log(
      "\n1. Add a new task\n" +
        "2. Remove a task\n" +
        "3. Update a task\n" +
        "4. Show tasks\n" +
        "-1. Exit"
    );

    selectedMenu = prompt("Enter your choice:");
    selectedMenu = parseInt(selectedMenu);

    switch (selectedMenu) {
      case 1: {
        const newTask = {};
        newTask.name = prompt("Enter the task name:");
        newTask.deadline = prompt("Enter the task deadline:");
        newTask.status = "unfinished";
        myTasks.push(newTask);
        break;
      }
      case 2: {
        let taskList = myTasks
          .map((task, index) => `${index + 1}. ${task.name}`)
          .join("\n");
        let taskIndex = 0;
        taskIndex = prompt(
          `Remove a task:\n${taskList}\nEnter the task index to remove:`
        );
        taskIndex = parseInt(taskIndex);
        if (taskIndex > 0 && taskIndex <= myTasks.length) {
          myTasks.splice(taskIndex - 1, 1);
        } else {
          console.log("Invalid task index.");
        }
        break;
      }
      case 3: {
        let taskList = myTasks
          .map((task, index) => `${index + 1}. ${task.name}`)
          .join("\n");
        let taskIndex = 0;
        taskIndex = prompt(
          `Update a task:\n${taskList}\nEnter the task index to update:`
        );
        taskIndex = parseInt(taskIndex);
        if (taskIndex > 0 && taskIndex <= myTasks.length) {
          console.log(
            "\n1. Update task name\n" +
              "2. Update task deadline\n" +
              "3. Update task status"
          );
          let updateChoice = 0;
          updateChoice = prompt("Enter your choice:");
          updateChoice = parseInt(updateChoice);
          switch (updateChoice) {
            case 1:
              myTasks[taskIndex - 1].name = prompt("Enter the new task name:");
              break;
            case 2:
              myTasks[taskIndex - 1].deadline = prompt(
                "Enter the new task deadline:"
              );
              break;
            case 3:
              myTasks[taskIndex - 1].status = prompt(
                "Enter the new task status:"
              );
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
        console.log(
          "\n1. Show finished tasks\n" +
            "2. Show unfinished tasks\n" +
            "3. Show all tasks"
        );
        let showChoice = 0;
        showChoice = prompt("Enter your choice:");
        showChoice = parseInt(showChoice);
        let taskDisplay = "";
        switch (showChoice) {
          case 1:
            taskDisplay = myTasks
              .filter((task) => task.status === "finished")
              .map(
                (task, index) => `${index + 1}. ${task.name} - ${task.deadline}`
              )
              .join("\n");
            break;
          case 2:
            taskDisplay = myTasks
              .filter((task) => task.status === "unfinished")
              .map(
                (task, index) => `${index + 1}. ${task.name} - ${task.deadline}`
              )
              .join("\n");
            break;
          case 3:
            taskDisplay = myTasks
              .map(
                (task, index) => `${index + 1}. ${task.name} - ${task.deadline}`
              )
              .join("\n");
            break;
          default:
            console.log("Invalid choice.");
            continue;
        }
        console.log(taskDisplay || "No tasks found.");
        break;
      }
      case -1:
        console.log("Exit");
        break;
      default:
        console.log("Invalid choice.");
        break;
    }
  }
}

main();
