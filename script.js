// from mdn web docs 

function updateTIME(){
const now = new Date();

const time = now.toLocaleTimeString();
const date = now.toLocaleDateString(undefined,{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

updateTIME();
setInterval(updateTIME, 1000)



const todo_list= document.getElementById("todo-list"); // paragraphy here
const list = [];
const form_control = document.getElementById("form-control");
form_control.addEventListener("keyup",function(e){
     if (e.key === "Enter"){
    const task = form_control.value.trim();
    if (task === "") {
        alert("Enter a Task");
        return;
      }
    list.push(task)
    console.log(list);
  const p_div = document.createElement("div");
  p_div.innerHTML = `
  <div class="border m-4 p-2 d-flex justify-content-between align-items-center">
    <span><i class="fa-regular fa-circle cancel"></i> ${task}</span>
    <i class="fa-solid fa-trash text-danger delete" style="cursor: pointer;"></i>
  </div>
`;
  todo_list.appendChild(p_div);
  form_control.value = "";
  const cancel = p_div.querySelector(".cancel");
  const deletei = p_div.querySelector(".delete");
  cancel.addEventListener("click",function(){
      cancel.classList.add("fa-solid", "fa-circle-check", "text-success");
      const taskText = cancel.parentElement;
      if (cancel.classList.contains("fa-circle")) {
        cancel.classList.remove("fa-regular", "fa-circle");
        cancel.classList.add("fa-solid", "fa-circle-check", "text-success");
        taskText.classList.add("text-decoration-line-through");
      } else {
        cancel.classList.remove("fa-solid", "fa-circle-check", "text-success");
        cancel.classList.add("fa-regular", "fa-circle");
        taskText.classList.remove("text-decoration-line-through");
      }
      
  })
  deletei.addEventListener("click",function(){
    p_div.remove();
  })
    }
   });

   document.getElementById("reset-btn").addEventListener("click",function(){
    location.reload()

   })