class Book {
    constructor(title, author, isbn) {
        this.tite = title;
        this.author = author;
        this,isbn = isbn;
    }
}

class UI {
    addBookToTheList(book) {

    const list = document.getElementById('book-list');

    // Create tr element

    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete"><i class="fa fa-trash"></a></td>
    `;
    list.appendChild(row);
    }

    showAlert(message, className) {
     // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3s
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'fa fa-trash') {
            target.parentElement.parentElement.parentElement.remove();
        }
    }

    clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
    }


    // Eventlistener for add book

document.getElementById('book-form').addEventListener('submit', function(e){

    // Get form values

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI

    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {

    // Add book to the list

    ui.addBookToTheList(book);

    // Show success
    ui.showAlert('Book Added', 'success');

    // Clear fields

    ui.clearFields();
    e.preventDefault();
}});

// Event listener for delete

document.getElementById('book-list').addEventListener('click', function(e){
    
    const ui = new UI();
    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book Removed', 'success');
    
    e.preventDefault();
})

// Ne??to ne radi kad pritisnem submmit a nisam popunio sva polja ???