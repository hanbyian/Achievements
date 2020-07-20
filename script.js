displayComments()
function submitComment(){
    let commentName = document.getElementById("form-name").value;
    let commentMessage = document.getElementById("form-message").value;
    localStorage.setItem(commentName, commentMessage);

    
    document.getElementById("form-name").value = "";
    document.getElementById("form-message").value = "";
    location.reload()
}
function displayComments(){

    for(let i = 0;i<localStorage.length;i++){
        node = document.createElement("LI");
        let lsName = localStorage.key(i);
        let lsMessage = localStorage.getItem(lsName);
        node.appendChild(document.createTextNode(lsName + " says, " + lsMessage))
        document.getElementById("comment-list").appendChild(node);
    }
}
