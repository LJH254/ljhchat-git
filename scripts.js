const h1 = document.getElementById("h1");

setInterval(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    h1.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}, 1000);

const p = document.getElementById("p");
p.textContent = document.getElementsByTagName("html")[0].innerHTML;
