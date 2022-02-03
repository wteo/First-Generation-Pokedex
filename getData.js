function getType (data, parentElement) {
    const p = document.createElement("p");
    const type1 = data.types[0].type.name;
    const type2 = data.types[1]?.type.name;
    if (type2 === undefined) {
        const oneType = `Type : ${type1}`;
        p.innerText = oneType;
        parentElement.appendChild(p);
    } else {
        const twoTypes = `Type : ${type1} / ${type2}`;
        p.innerText = twoTypes;
        parentElement.appendChild(p);
    }
}

function getImage (data, parentElement) {
    const image = document.createElement("IMG");
    image.setAttribute("src", data.sprites.front_default);
    parentElement.appendChild(image);
}

function getHeight (data, parentElement) {
    const p = document.createElement("p");
    const height = `Height : ${(data.height / 10).toFixed(1)} m`;
    p.innerText = height;
    parentElement.appendChild(p);
}

function getWeight (data, parentElement) {
    const p = document.createElement("p");
    const weight = (data.weight / 10).toFixed(1);
    const string = `Weight : ${weight} kg`;
    p.innerText = string;
    parentElement.appendChild(p);
}