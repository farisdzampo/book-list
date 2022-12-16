// Book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor

function UI(){}

UI.prototype.addBookToTheList = function(book){
    const list = document.getElementById('book-list');

    // Create tr element

    const row = document.createElement('tr');

    const td = document.createElement('td');
    // td.innerHTML = `<a href="#" class="delete"><i class="fa fa-trash"></a>`;
    const a = document.createElement('a');
    a.setAttribute('href', '#')
    a.innerHTML = `<i class="fa fa-trash">`;
    a.classList = 'delete';
    a.addEventListener('click', function(e){
        e.preventDefault();
        e.currentTarget.parentElement.parentElement.remove();
    })

    td.appendChild(a);
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    `;

    row.appendChild(td);
    list.appendChild(row);
}

// Show alerts

UI.prototype.showAlert = function(message, className) {
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

// Delete book

UI.prototype.deleteBook = function(target) {
    if(target.className === 'fa fa-trash') {
        target.parentElement.parentElement.parentElement.remove();
    }
}
// Clear fields


UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Eventlistener for add book

document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault();

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
}});

// Event listener for delete

// document.getElementById('book-list').addEventListener('click', function(e){
//     e.preventDefault();
    
//     const ui = new UI();
//     ui.deleteBook(e.target);

//     // Show message
//     ui.showAlert('Book Removed', 'success');
    
// })


// Kad submitam a nisu poopunjena sva polja, nece nesto. Raddilo je al sad vise ne radi
// Kad je duzi text u dodavanju, da ili rasiri ili ode u novi red, Treba poravnat naslove u tabeli, centrirat tj, i centrirat novi dodani element u booklist svakako