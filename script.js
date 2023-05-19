let btn = document.querySelector(".btn");

btn.addEventListener(
  "click",

  function (event) {
    event.preventDefault();
  }
);

const addTask = () => {
  if (document.getElementById("input").value.length == 0) {
    alert("Please Enter Task");
  } else {
    let input = document.getElementById("input").value;
    let textArea = document.getElementById("input").value;

    document.querySelector(".list-item").innerHTML += `
    <div class="task">

        
        <span class= "taskName">
        ${document.querySelector("#input").value}
        
        </span>
        <span class= "taskName">
        ${document.querySelector(".textarea").value}
        
        </span>
        <button class="delete-item">
        <i class="fa fa-close" style="color:white"></i>
            </button>
            
    </div>


    `;

    var current_tasks = document.querySelectorAll(".delete-item");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

btn.addEventListener("click", addTask);
