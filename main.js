var input = document.querySelector(".form .input");
var button = document.querySelector(".form .btn")
var form = document.querySelector(".form");
var inform = document.querySelector(".inform");
var count = document.querySelector(".count");
var complete = document.querySelector(".completetd");
var incompleted = document.querySelector(".incomplete") 
var errorClass = document.querySelector(".errorClass");

var todos = 0;
var completed = 0;
var incomplete = 0;

button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value!=""){
        errorClass.innerHTML="";
     var div = document.createElement("div");
    document.body.appendChild(div);
    div.classList.add("todoDiv")

    var span1 = document.createElement("div");
    span1.classList.add("span1");
    span1.setAttribute("style","width:200px;word-wrap:break-word;color:black;position:relative;top:10px;font-size:20px;")
    div.appendChild(span1);
    span1.innerHTML=input.value;

    todos = todos+1;
    count.innerHTML = `${todos}`;
    incomplete = `${todos}`;
    incompleted.innerHTML = `${incomplete}`;

    var div15 = document.createElement("div");
    div.appendChild(div15);
    var span2 = document.createElement("input");

    span2.classList.add("span2");
   //span2.setAttribute("style","position:relative;left:125px;top:-10px;")
   span2.addEventListener("click",(e)=>{
       if(span2.checked){
           completed = completed+1;
           incomplete = incomplete-1;
           complete.innerHTML=`${completed}`
           incompleted.innerHTML =`${incomplete}`;

       }
       else{
        completed = completed-1;
        incomplete = incomplete+1;
        complete.innerHTML=`${completed}`
        incompleted.innerHTML =`${incomplete}`;

       }
   })
   span2.setAttribute("style","zoom:2;")
    span2.setAttribute("type","checkbox")
    div15.appendChild(span2);


   var div16 = document.createElement("div");
    div.appendChild(div16);
    var span3 = document.createElement("input");
    span3.setAttribute("type","submit")
    span3.setAttribute("value","delete");
    span3.addEventListener("click",()=>{
        span1.remove();
        span2.remove();
        span3.remove();
        todos = todos-1;
        count.innerHTML = `${todos}`;
        if(span2.checked === false){
        incomplete = incomplete-1;
        incompleted.innerHTML = `${incomplete}`;
        }
        else
        {
        incompleted.innerHTML = `${incomplete}`;
        if(completed>1)
        {
        completed = completed-1;
        complete.innerHTML=`${completed}`;
        }
        else
        complete.innerHTML = `${0}`;
    }
    });
    //span3.setAttribute("style","position:relative;left:250px;top:-25px;")
    div16.appendChild(span3);
    // span3.classList.add("span3");
    // var font = document.createElement("i");
    // font.setAttribute("class","fas fa-trash-alt")
    // span3.appendChild(font);
    console.log(div);

    input.value = "";

    // var div17 = document.createElement("hr");
    // div17.setAttribute("style","width:600px");
    // span3.appendChild(div17);
    // var div19 = document.createElement("div");
    // div19.classList.add("class","div19");
    // div19.innerHTML="19";
    // span3.appendChild(div19);
    // var div18 = document.createElement("hr");
    // div18.setAttribute("style","width:600px");
    // span3.appendChild(div18);
    }
    else
    {
        errorClass.innerHTML="ToDo List should not be empty";
    }
})

