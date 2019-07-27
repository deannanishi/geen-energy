// DATA RESOURCES
let dataResorce = [
    {
        heading: "Solar Energy Solutions",
        bodyText: "Pepper jack airedale manchego. Danish fontina cheese on toast blue castello caerphilly mozzarella pecorino manchego taleggio. Cheesecake camembert de normandie say cheese fromage frais port-salut chalk and cheese cheese strings cheesecake. Lancashire who moved my cheese cheeseburger when the cheese comes out everybody's happy cheese strings boursin. Everyone loves fromage monterey jack. Camembert de normandie cut the cheese cow cauliflower cheese brie cheddar edam cheese strings. Fromage smelly cheese cottage cheese chalk and cheese fromage macaroni cheese monterey jack cheese strings. Cottage cheese cheeseburger queso caerphilly bocconcini macaroni cheese the big cheese who moved my cheese. Cut the cheese. Bavarian bergkase when the cheese comes out everybody's happy swiss. Squirty cheese cream cheese monterey jack croque monsieur cheese on toast feta airedale rubber cheese. Cheesy grin croque monsieur cheeseburger hard cheese fromage frais edam croque monsieur cheese and biscuits. Cut the cheese chalk and cheese parmesan cheesy grin lancashire cauliflower cheese.",
        imgUrl: "https://cdn.pixabay.com/photo/2015/07/10/17/08/wind-839724_1280.jpg"
    },
    {
        heading: "Wind Energy Solutions",
        bodyText: "Bavarian bergkase when the cheese comes out everybody's happy swiss. Squirty cheese cream cheese monterey jack croque monsieur cheese on toast feta airedale rubber cheese. Cheesy grin croque monsieur cheeseburger hard cheese fromage frais edam croque monsieur cheese and biscuits. Cut the cheese chalk and cheese parmesan cheesy grin lancashire cauliflower cheese. Paneer cheddar rubber cheese. Cream cheese cheese on toast goat cow paneer swiss babybel manchego. Mozzarella cheese triangles cheese on toast macaroni cheese cheeseburger cauliflower cheese cow ricotta. Who moved my cheese st. agur blue cheese pepper jack fromage frais. Rubber cheese cheese on toast hard cheese. Monterey jack melted cheese port-salut paneer parmesan stinking bishop red leicester smelly cheese. Camembert de normandie st. agur blue cheese gouda roquefort who moved my cheese monterey jack cheese strings feta. Rubber cheese edam stilton cow gouda cheddar cheese and wine lancashire. St. agur blue cheese.",
        imgUrl: "https://via.placeholder.com/150/00FF00/FFF"
    },
    {
        heading: "Hydro Energy Solutions",
        bodyText: "Emmental say cheese fondue. Bavarian bergkase dolcelatte cream cheese hard cheese manchego brie boursin pecorino. Stinking bishop swiss dolcelatte camembert de normandie emmental fromage caerphilly cottage cheese. Roquefort cream cheese cut the cheese the big cheese goat mascarpone queso rubber cheese. Taleggio. Airedale red leicester lancashire. Cheese triangles queso ricotta cheese strings everyone loves stinking bishop melted cheese melted cheese. Rubber cheese st. agur blue cheese goat caerphilly monterey jack cottage cheese boursin cheddar. Edam cheese and biscuits paneer swiss. wqaChalk and cheese caerphilly parmesan. Goat camembert de normandie everyone loves the big cheese manchego monterey jack monterey jack say cheese. Cheese slices manchego cheeseburger stinking bishop parmesan st. agur blue cheese mozzarella rubber cheese. Port-salut fondue croque monsieur rubber cheese pecorino macaroni cheese ricotta say cheese. Cheese on toast emmental cheese and wine cheese strings. Jarlsberg babybel say cheese. Port-salut parmesan port-salut brie lancashire cheddar swiss cheese on toast. When the cheese comes out everybody's happy the big cheese caerphilly cottage cheese cheese and biscuits ricotta the big cheese bocconcini. Fondue when the cheese comes out everybody's happy paneer say cheese everyone loves cheeseburger paneer cream cheese. Who moved my cheese.Brie halloumi bavarian bergkase. Halloumi pecorino caerphilly roquefort red leicester swiss smelly cheese the big cheese. Mozzarella brie fromage frais fromage frais macaroni cheese airedale stinking bishop cheese triangles. Rubber cheese queso fromage frais cheese and wine jarlsberg.",
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

