// write functionto add item as paragraph element 
// then add it as a children of taskContainer 
// --> bind function to button via eventListener 


function addParagraph(){
    let userInput = document.getElementById("taskInput");
    let addItemButton = document.getElementById("addItem");
    let clearListButton = document.getElementById("clearList");
    let copyItemsButton = document.getElementById("copyItems");
    let taskContainer = document.getElementById("taskContainer");

    addItemButton.addEventListener("click", function(){
        let paragraph =  document.createElement("p");
        if (userInput.value !== ""){
            paragraph.classList.add("listItem");
            paragraph.textContent = userInput.value;
            taskContainer.appendChild(paragraph);
            userInput.value = "";
            console.log(paragraph);
        }

        paragraph.addEventListener("click", function(){
            paragraph.style.textDecoration = 'line-through';
        })
        paragraph.addEventListener("dblclick", function(){
            taskContainer.removeChild(paragraph);
        })
        clearListButton.addEventListener("click", function(){
            while (taskContainer.firstChild){
                taskContainer.removeChild(taskContainer.lastChild);
            }
        })
        copyItemsButton.addEventListener("click", function(){
            if (!taskContainer.firstChild) return; 
            let textToCopy = Array.from(document.getElementsByClassName("listItem"))
                                .map(item => item.textContent)
                                .join('\n');
            // Copy the text 
            navigator.clipboard.writeText(textToCopy)
                .then(function(){console.log("Copied items!")})
                .catch(() => console.error("Could not copy text: "));
        })
    }) 
}



addParagraph()

