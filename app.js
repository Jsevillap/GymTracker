//Gym Session Tracker App



const exercises ={
    push:[  
            "Bench Press", 
            "Inclined Bench Press",
            "Declined Bench Press",
            "Dumbbell Flys",
            "Cable Flys",
            "Push ups",
            "Pull Over",
            "Standing Overhead Press",
            "Arnold Press",
            "Side lateral Raises",
            "Reverse Flys",
            "Front Raises",
            "Shrugs"                
        ]
}

let section = document.getElementById("test");


for(let e of exercises.push){
    let li = document.createElement("li");
    let text = document.createTextNode(e);
    li.appendChild(text);
    section.appendChild(li);
}  



