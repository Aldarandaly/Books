let request = new XMLHttpRequest();
request.open("GET", "https://www.googleapis.com/books/v1/volumes?q=1");
request.send();

request.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    const bookData = JSON.parse(this.responseText);
    const books = bookData.items;
    let row = document.querySelector('.row');
    let columns = "";
    books.forEach((book) => {
      let title = book.volumeInfo.title;
      let img = book.volumeInfo.imageLinks.thumbnail;
      let desc = book.volumeInfo.description;
      columns += `<div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <div class="card bg-secondary text-center text-white p-3 m-3">
            <img src="${img}" class="w-50 card-img-top m-auto" alt="" />
            <h4 class="mt-4">${title}</h4>
            <p>
              ${desc}
            </p>
            <a href="https://www.dawateislami.net/bookslibrary/" class="btn btn-danger w-50 d-block m-auto"
              >more info</a
            >
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="card bg-secondary text-center text-white p-3 m-3">
            <img src="${img}" class="w-50 card-img-top m-auto" alt="" />
            <h4 class="mt-4">${title}</h4>
            <p>
              ${desc}
            </p>
            <a href="https://www.dawateislami.net/bookslibrary/" class="btn btn-danger w-50 d-block m-auto"
              >more info</a
            >
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="card bg-secondary text-center text-white p-3 m-3">
            <img src="${img}" class="w-50 card-img-top m-auto" alt="" />
            <h4 class="mt-4">${title}</h4>
            <p>
              ${desc}
            </p>
            <a href="https://www.dawateislami.net/bookslibrary/" class="btn btn-danger w-50 d-block m-auto"
              >more info</a
            >
          </div>
        </div>
      </div>
    </div>`
    });
    row.innerHTML = columns;
    console.log(bookData);
  }
});
