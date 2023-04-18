const form=document.querySelector("#book-form")
const tableList=document.querySelector("#book-list")

window.addEventListener("DOMContentLoaded",(e)=>{
    let books=JSON.parse(localStorage.getItem("books"))
    books.forEach(book=> createRow(book.title,book.author,book.isbn))
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const title=document.querySelector("#title").value
    const author=document.querySelector("#author").value
    const isbn=document.querySelector("#isbn").value
     if(title===''){
        document.querySelector("#title").focus()
        alert("Please fill all the fields")
        return
     }
     else if(author===''){
        document.querySelector("#author").focus()
        alert("Please fill all the fields")
        return
     }
     else if(isbn===''){
        document.querySelector("#isbn").focus()
        alert("Please fill all the fields")
        return
     }
    
     const book={title,author,isbn}

     clearAllFields()
     createRow(title,author,isbn)
     addRow(book)
})



function clearAllFields(){
    document.querySelector("#title").value=''
    document.querySelector("#author").value=''
    document.querySelector("#isbn").value=''
}

function createRow(title,author,isbn){
    
     const tr=document.createElement("tr")
     tr.innerHTML=`<td>${title}</td>
     <td>${author}</td>
     <td>${isbn}</td>
     <td><a href="#" class="btn btn-danger float-right delete">X</td>`
     tableList.appendChild(tr)

}

function addRow(book){

    let newbook;
    if(localStorage.getItem("books")===null){
        newbook=[]
    }else{
        newbook=JSON.parse(localStorage.getItem("books"))
    }
    newbook.push(book)

    localStorage.setItem("books",JSON.stringify(newbook))
}

function removeRow(e){
    if(e.target.classList.contains("delete")){
        if (confirm('Are You Sure You Want to delete this'))
        tableList.removeChild(e.target.parentElement.parentElement)
    }
}