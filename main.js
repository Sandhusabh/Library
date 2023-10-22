const myLibrary = []
const Objects = document.querySelector('.objects')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

addToLibrary('The Hobbit', 'Test Author', '300', 'Not Read')

function createCard(title, author, pages, read, index) {
    const card = document.createElement('div')
    card.classList.add('card')
    const btitle = document.createElement('p')
    btitle.classList.add('title')
    btitle.textContent = title

    const bauthor = document.createElement('p')
    bauthor.classList.add('author')
    bauthor.textContent = 'Author : ' + author
    const bpages = document.createElement('p')
    bpages.classList.add('page')
    bpages.textContent = 'Pages : ' + pages
    const footer = document.createElement('div')
    footer.classList.add('footer')
    const readButton = document.createElement('button')
    readButton.textContent = read
    readButton.setAttribute('id', 'rButton')
    readButton.setAttribute('index', index)
    readButton.addEventListener('click', (event) => {
        const readStatus = myLibrary[index].read
        readStatus == 'Read' ? myLibrary[index].read = 'Not Read' : myLibrary[index].read = 'Read'
        printDisplay()
    })
    const delButton = document.createElement('button')
    delButton.textContent = 'Delete'
    delButton.setAttribute('id', 'dButton')
    delButton.setAttribute('index', index)
    delButton.addEventListener('click', (event) => {
        console.log(event.target.getAttribute('index'))
        myLibrary.splice(index, 1)
        printDisplay()
    })
    footer.appendChild(readButton)
    footer.appendChild(delButton)
    card.appendChild(btitle)
    card.appendChild(bauthor)
    card.appendChild(bpages)
    card.appendChild(footer)
    Objects.appendChild(card)
}

function printDisplay() {
    Objects.innerHTML = ''
    for (i = 0; i < myLibrary.length; i++) {
        const bookCard = myLibrary[i]
        createCard(bookCard.title, bookCard.author, bookCard.pages, bookCard.read, i)
    }
}
printDisplay()

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + div > button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const bookTitle = document.getElementById('bookName')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const booStatus = document.getElementById('statusRead')
let readBox = 'Not Read'
booStatus.addEventListener('change',()=>{
        readBox = booStatus.checked? 'Read': 'Not Read'
})

bookForm.addEventListener('submit', () => {
    // console.log(`${bookTitle.value} ${author.value}, ${pages.value}, ${booStatus.value}`)
    addToLibrary(bookTitle.value, author.value, pages.value, readBox)
    printDisplay()
    dialog.close()
    readBox = 'Not Read'
    bookForm.reset()
    event.preventDefault();
})