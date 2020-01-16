document.getElementById("banner").addEventListener("click", function (e) {
    ga('send', 'event', 'Test Link', 'test-click', 'view resume');
});

const analyticsClickListener = el => {
    ga('send', 'event', 'Test Link', 'test-click', el.innerHTML);
}

let elements = document.getElementsByTagName("h1");
for (i = 0; i < elements.length; i++) {
    let el = elements[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements2 = document.getElementsByTagName("p");
for (i = 0; i < elements2.length; i++) {
    let el = elements2[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements3 = document.getElementsByTagName("img");
for (i = 0; i < elements3.length; i++) {
    let el = elements3[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements4 = document.getElementsByTagName("i");
for (i = 0; i < elements4.length; i++) {
    let el = elements4[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}
