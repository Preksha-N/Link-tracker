let myLinks=[];
let oldLinks=[];
/*Grab html elements and store in variables*/
const inputEl=document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl =document.getElementById('ul-el');
const deleteBtn = document.getElementById("delete-btn");

const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))
if(linksFromLocalStorage){
    myLinks =linksFromLocalStorage
    render(myLinks);
}

/*main function body*/
function render(links){
    let listItems = " ";//an empty string to hold all the HTML for list items

    for(let i=0;i<links.length;i++){
        //method 1 pf rendering
        // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>" + myLeads[i] + "</a></li>";//adding item to listItems without template string
        listItems += `
                    <li>
                        <a target='_blank' href='${links[i]}'>
                            ${links[i]}
                        </a>
                    </li>
                    `;
        //method 2 of rendering
        // const li =document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append();   
    }
    ulEl.innerHTML= listItems; 
}
/*delete all button*/
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLinks =[];  
    render(myLinks);
})
/*Save input button*/
inputBtn.addEventListener("click", function(){
    myLinks.push(inputEl.value);
    inputEl.value='';
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks); 
})

