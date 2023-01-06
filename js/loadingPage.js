const timeout = setTimeout(function goTo() {
    window.location.href= "/index";
}, 7000);

const loadingSvgLogo = document.querySelectorAll("#loading-svg-logo path");
const loadingSvgName = document.querySelectorAll("#loading-svg-name path");


for(let i=0; i<loadingSvgLogo.length; i++) {
    console.log(`letter ${i} is ${loadingSvgLogo[i].getTotalLength()}`);
}

for(let i=0; i<loadingSvgName.length; i++) {
    console.log(`letter ${i} is ${loadingSvgName[i].getTotalLength()}`);
}
