// DATA RESOURCES
let dataResorce = [
    {
        heading: "Solar Energy Solutions",
        bodyText: "The body-text of the page 1",
        imgUrl: "https://cdn.pixabay.com/photo/2015/07/10/17/08/wind-839724_1280.jpg"
    },
    {
        heading: "Wind Energy Solutions",
        bodyText: "The body-text of the page 2",
        imgUrl: "https://via.placeholder.com/150/00FF00/FFF"
    },
    {
        heading: "Hydro Energy Solutions",
        bodyText: "The body-text of the page 3",
        imgUrl: "https://via.placeholder.com/150/0000FF/FFF"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev) {

    // fetch the clicked button
    let clickedBtn = ev.target;

    // read the text inside the button
    let btnText = clickedBtn.innerText;

    // print the text of the clicked button
    //console.log(btnText);

    if (btnText === "SOLAR") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="./images/solar.jpg" alt="Solar Pannels">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "WIND") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3>
                              <img src="./images/wind.jpg" alt="Wind Mills">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3>
                              <img src="./images/hydro.jpg" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }

}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", eventHandler);
}
