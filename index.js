const db = firebase.firestore();

const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

const saveTask = (title, description) =>
  db.collection("tasks").doc().set({
    title,
    description,
  });

const getTasks = () => db.collection("tasks").get();

const getTask = (id) => db.collection("tasks").doc(id).get();

const onGetTasks = (callback) => db.collection("tasks").onSnapshot(callback);

const deleteTask = (id) => db.collection("tasks").doc(id).delete();

const updateTask = (id, updatedTask) =>
  db.collection("tasks").doc(id).update(updatedTask);

window.addEventListener("DOMContentLoaded", async (e) => {
  //   const querySnapshot = await getTask();

  onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      //   console.log(task);

      taskContainer.innerHTML += `<div class="cards">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        <div class="cards-button">
            <button class="btn-delete" data-id="${task.id}">Delete</button>
            <button class="btn-edit" data-id="${task.id}">Edit</button>
        </div>
        </>`;

      const btnsDelete = document.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await deleteTask(e.target.dataset.id);
        });
      });

      const btnsEdit = document.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();

          editStatus = true;
          id = doc.id;

          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;
          taskForm["btn-task-form"].innerText = "Update";
        });
      });
    });
  });
});

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault(); //Evita que se actualice la pagina

  //   Captura los valores del formulario
  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  if (!editStatus) {
    await saveTask(title.value, description.value);
  } else {
    await updateTask(id, {
      title: title.value,
      description: description.value,
    });

    editStatus = false;

    taskForm["btn-task-form"].innerText = "Save";
  }

  await getTasks();

  taskForm.reset();
  title.focus();
});
