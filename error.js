function check404Error (response) {
    if (!response.ok) {
        const errorMessage = `Error : ${response.status}`;
        const h1 = document.createElement("h1");
        h1.innerText = errorMessage;
        body.appendChild(h1);
    }
    return response.json();
}

function catchError (error) {
    const h1 = document.createElement("h1");
    h1.innerText = error;
    body.appendChild(h1);
}