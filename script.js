const titleInput=document.getElementById("titleInput")
const authorInput=document.getElementById("authorInput")
const pagesInput=document.getElementById("pagesInput")
const readInput= document.getElementById("readInput")
const submit=document.getElementById("submit")
const centerElement=document.getElementById("centered-element")
const addBook=document.getElementById("addBook")

const library=[]; 
function visible(visibleProperty){
    centerElement.style.visibility=visibleProperty

}
function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    const newsBook = new book(titleInput.value,authorInput.value,pagesInput.value,readInput.value)
    library.push(newsBook)
}
addBook.addEventListener("click",()=>{visible("visible")})
submit.addEventListener("click",function (){addBookToLibrary()
    visible("hidden")})

function showBooks(){
    library.forEach(element => {
        console.log(element)
        
    });

}