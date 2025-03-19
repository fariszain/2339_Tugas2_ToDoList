function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-200 p-2 rounded";
    li.innerHTML = `<span>${taskText}</span> 
        <div class="space-x-2">
            <button onclick="editTask(this)" class="edit-btn bg-yellow-500 text-white px-2 py-1 rounded text-sm hover:bg-yellow-600">Edit</button>
            <button onclick="deleteTask(this)" class="delete-btn bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600">Hapus</button>
            <button onclick="saveTask(this)" class="save-btn bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600 hidden">Selesai</button>
        </div>`;
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {
    button.closest("li").remove();
}

function editTask(button) {
    let li = button.closest("li");
    let taskSpan = li.querySelector("span");
    let currentText = taskSpan.textContent.trim();
    
    let input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "p-1 border rounded w-full";

    let saveButton = li.querySelector(".save-btn");
    let deleteButton = li.querySelector(".delete-btn");

    // Sembunyikan tombol Edit dan Hapus, tampilkan tombol Selesai
    button.classList.add("hidden");
    deleteButton.classList.add("hidden");
    saveButton.classList.remove("hidden");

    li.replaceChild(input, taskSpan);
    input.focus();
}

function saveTask(button) {
    let li = button.closest("li");
    let input = li.querySelector("input");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let span = document.createElement("span");
        span.textContent = taskText;
        
        let editButton = li.querySelector(".edit-btn");
        let deleteButton = li.querySelector(".delete-btn");

        // Tampilkan kembali tombol Edit dan Hapus, sembunyikan tombol Selesai
        editButton.classList.remove("hidden");
        deleteButton.classList.remove("hidden");
        button.classList.add("hidden");

        li.replaceChild(span, input);
    }
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}