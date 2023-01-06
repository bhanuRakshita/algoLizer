//Get num of bars
const sliderBars = document.getElementById("myRange");

//Get speed
const sliderSpeed = document.getElementById("mySpeed");

//get num of bars on changing the sliderBars value
sliderBars.addEventListener("onchange", getNumBars = function()  {
    numBars=document.getElementById("myRange").value;
    generateBars(numBars);
});

//get speed on changing the sliderSpeed value
sliderSpeed.addEventListener("onchange", getSpeed = function()  {
    speed=document.getElementById("mySpeed").value;
    speed = maxSpeed - speed+80;
    console.log(speed);

});

//get default values for num of bars
var numBars=sliderBars.value;

//get default values for speed
var speed=sliderSpeed.value;
var maxSpeed = sliderSpeed.max;
speed = maxSpeed - speed;

console.log(speed);

//Shuffle button
const shuffle = document.getElementById("shuffle-btn");
shuffle.addEventListener("click", function shuffle() {
    generateBars(numBars);
});

//select algo
const algo = document.getElementById("select-sort-types");

//Start btn redirects to the selected sort
const start = document.getElementById("start-btn");
start.addEventListener("click", () => {
    const algoIndex = algo.selectedIndex;
    return algoIndex==1 ? selectionSort()
         : algoIndex==2 ? bubbleSort()
         : algoIndex==3 ? insertionSort()
         : algoIndex==4 ? runMergeSort()
         : algoIndex==5 ? quickSort()
         : selectionSort();

});

//generate bars
const dataContainer = document.querySelector("#data-section");
const totalWidth = dataContainer.offsetWidth;

function generateBars(bars) {

    dataContainer.innerHTML="";

    var barWidth = totalWidth/bars;

    for (let i = 0; i < bars; i++) {
        const value = Math.floor(Math.random()*100)+1; //value in from 1-100
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value*3}px`;
        bar.style.width = `${barWidth}px`;
        // let barText= document.createTextNode(`${value*3}px`);
        bar.style.transform = `translateX(${i*barWidth}px)`;
        // bar.appendChild(barText);
        dataContainer.appendChild(bar);        
    }
}


/////////////////////SELECTION SORT///////////////////

async function selectionSort() {
    //select all divs with class "bar"
    var barArr = document.querySelectorAll(".bar");


    for(let i=0; i<barArr.length;i++){
        var min_index = i;
        barArr[i].style.backgroundColor="darkred";

        for(let j=1+i; j<barArr.length; j++){
            barArr[j].style.backgroundColor="darkred";
                        
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );
            if(barArr[min_index].offsetHeight>barArr[j].offsetHeight) {
                min_index = j;
               
            }
            barArr[j].style.backgroundColor="white";
        }

        if(min_index!=i) {
            var temp = barArr[i].style.height;
            barArr[i].style.height=barArr[min_index].style.height;
            barArr[min_index].style.height=temp;
        }

        barArr[i].style.backgroundColor="red";
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
    }

};

////////////////////BUBBLE SORT////////////////////

async function bubbleSort() {
    var barArr = document.querySelectorAll(".bar");

    for(let i=0; i<barArr.length;i++){

        for(let j=0;j<barArr.length-i-1;j++) {
            barArr[j].style.backgroundColor="darkred";
            barArr[j+1].style.backgroundColor="darkred";
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
                );
            

            if(barArr[j].offsetHeight>barArr[j+1].offsetHeight){
        
                temp = barArr[j].style.height;
                barArr[j].style.height=barArr[j+1].style.height;
                barArr[j+1].style.height=temp;
                barArr[j+1].style.backgroundColor="red";

                await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
                );
            }        
            
            barArr[j+1].style.backgroundColor="red";
            
            if(j!=barArr.length-i-1){
                barArr[j].style.backgroundColor="white";
            }
            else{
                barArr[j].style.backgroundColor="red";
            }
        }
    }
    barArr[0].style.backgroundColor="red";
}

////////////////////INSERTION SORT/////////////////

async function insertionSort() {
    var barArr = document.querySelectorAll(".bar");
    var j;
    
    for(let i=1; i<barArr.length; i++) {

        var current = barArr[i];
        j=i-1;
        current.style.backgroundColor="darkred";
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, speed)
        );

        while (j>=0 && barArr[j].offsetHeight > current.offsetHeight) {
                   
            barArr[j+1].style.height = `${barArr[j].offsetHeight}px`;
            barArr[j+1].style.backgroundColor="red";

            j--;
        }
        barArr[j+1].style.height = `${current.offsetHeight}px`;
        
        barArr[j+1].style.backgroundColor = "darkred";
        await new Promise((resolve) =>
        setTimeout(() => {
            barArr[j+1].style.backgroundColor = "red";
        
        resolve();
        }, speed)
        );

        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, speed)
        );
    }

}

////////////////////MERGE SORT/////////////////

async function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];


 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i].offsetHeight <= R[j].offsetHeight) {
            arr[k].style.height = `${L[i].offsetHeight}px`;
          
            // console.log(L[i].offsetHeight);
            i++;
        }
        else {
            arr[k].style.height = `${R[j].offsetHeight}px`;
        
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k].style.height = `${L[i].offsetHeight}px`;
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k].style.height = `${R[j].offsetHeight}px`;
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    // console.log("l is "+ l + " m is " + m + " r is " +r);
    merge(arr,l,m,r);
}

function runMergeSort(){
    var barArr = document.querySelectorAll(".bar");
    mergeSort(barArr, 0, barArr.length - 1);

}

///////////////////////

generateBars(numBars);



