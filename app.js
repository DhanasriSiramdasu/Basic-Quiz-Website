const questions=[
    {
        question:"What is the biggest animal?",
        answers:[
            { text:"Elephant",correct:true},
            { text:"Giraffe",correct:false},
            { text:"Cheetah",correct:false},
            { text:"Humming bird",correct:false}
        ]
    },

    {
        question:"What is the fastest animal?",
        answers:[
            { text:"Horse",correct:false },
            { text:"Tiger",correct:false },
            { text:"Cheetah",correct:true },
            { text:"Kangaroo",correct:false},
        ]
    },

    {
        question:"What is the smallest bird?",
        answers:[
            { text:"WoodPecker",correct:false},
            { text:"Parrot",correct:false},
            { text:"Pigeon",correct:false},
            { text:"Humming bird",correct:true},
        ]
    }
];

let index=0;
let score=0;
let containerbox=document.querySelector(".container");

function nextquestion(index){
    index++;
    startquiz(index);
}
function startquiz(index){
    containerbox.innerHTML="";
    if(index<questions.length){
        containerbox.innerHTML=(index+1)+"."+questions[index].question;
        questions[index].answers.forEach((answer)=>{
            let btn=document.createElement("button");
            btn.innerText=answer.text;
            btn.classList.add("choice");
            btn.addEventListener("click",()=> selectanswer(answer.correct,btn));
            containerbox.appendChild(btn);
    });
    if(index==2){
        let btn=document.createElement("button");
        btn.classList.add("next");
        btn.innerText="CHECKSCORE";
        btn.addEventListener("click", displayScore);
        containerbox.appendChild(btn);
    }
    else{
        let btn=document.createElement("button");
        btn.classList.add("next");
        btn.innerText="NEXT";
        btn.addEventListener("click", ()=>nextquestion(index));
        containerbox.appendChild(btn);
    }
}
}

function selectanswer(iscorrect,sbtn){
    if(iscorrect){
        sbtn.style.backgroundColor="green";
        score++;
    }
    else{
        sbtn.style.backgroundColor="red";
    }
    const choicebuttons=document.querySelectorAll(".choice");
    choicebuttons.forEach((button)=>{
        button.disabled=true;
    });
}

function displayScore(){
    containerbox.innerHTML=`Score is ${score}`;
}

document.getElementById("start-button").addEventListener("click",()=> startquiz(index));