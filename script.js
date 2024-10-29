document.getElementById('guestbook-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Buat elemen baru untuk daftar tamu
    const guestbookList = document.getElementById('guestbook-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${name}</strong> (${email})<br>${message}`;

    // Tambahkan elemen ke daftar tamu
    guestbookList.appendChild(listItem);

    // Reset form setelah submit
    document.getElementById('guestbook-form').reset();
});
