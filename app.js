var list = document.getElementById("list")

function addTodo(){
//Li create is created ur uske text ko add karwaya hai 
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
    list.appendChild(li)

   

//Create Deleted Bitton
    var deleteButton= document.createElement("button")
    var deletetext= document.createTextNode("DELETE")
    deleteButton.appendChild(deletetext)

    //OnClick Ka function delete button par
    deleteButton.setAttribute("class","btn")
    deleteButton.setAttribute("onclick","deleteItem(this)")
   
    li.appendChild(deleteButton)
//Create Update Button

    var editButton= document.createElement("Button")
    var editText= document.createTextNode("Edit")
    editButton.appendChild(editText)

    editButton.setAttribute("class","btn")
    editButton.setAttribute("onclick","editItem(this)")



    li.appendChild(editButton)


    //Empty Kardete a after entering an item
    todo_item.value=""
   // console.log(li)
}


//Delete Function

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}

//nodeValue Jo text huta hai box me uske lakr de deta hai
function editItem(e){
    console.log(e.parentNode.firstChild.nodeValue)
    var val = prompt("Enter an Updated Value",e.parentNode.firstChild.nodeValue)    
    e.parentNode.firstChild.nodeValue=val
}

