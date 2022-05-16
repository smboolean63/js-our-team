/*-------------------
    FUNCTIONS
--------------------*/
function printMember(container, member) {
    // const memberHTML = `
    //     <div class="team-card">
    //         <div class="card-image">
    //         <img
    //             src="${member.img}"
    //             alt="${member.name}"
    //         />
    //         </div>
    //         <div class="card-text">
    //         <h3>${member.name}</h3>
    //         <p>${member.role}</p>
    //         </div>
    //     </div>
    // `;
    const memberHTML = document.querySelector("#tpl-team-card").content.cloneNode(true);
    memberHTML.querySelector(".card-image img").src = member.img;
    memberHTML.querySelector(".card-image img").alt = member.name;
    memberHTML.querySelector(".card-text h3").innerHTML = member.name;
    memberHTML.querySelector(".card-text p").innerHTML = member.role;
    container.append(memberHTML);
}
/*-------------------
    MAIN
--------------------*/
const teamMembers = [
    {
        img : "img/wayne-barnett-founder-ceo.jpg",
        name : "Wayne Barnett",
        role : "Founder & CEO",
    },
    {
        img : "img/walter-gordon-office-manager.jpg",
        name : "Walter Gordon Barret",
        role : "Office Manager",
    },
    {
        img : "img/scott-estrada-developer.jpg",
        name : "Scoot Estrada",
        role : "Developer",
    },
    {
        img : "img/barbara-ramos-graphic-designer.jpg",
        name : "Barbara Ramos",
        role : "Graphic Designer",
    },
    {
        img : "img/angela-lopez-social-media-manager.jpg",
        name : "Angela Lopez",
        role : "Social Media Manager",
    },
    {
        img : "img/angela-caroll-chief-editor.jpg",
        name : "Angela Carrol",
        role : "Chief Editor",
    },
];

// CREO LE CARDS
// 1. prendo il contenitore
const teamContainerHTML = document.querySelector(".team-container");
const nameInputHTML = document.querySelector("#name");
const roleInputHTML = document.querySelector("#role");
const imgInputHTML = document.querySelector("#image");
// 2. per ogni membro creo il markup html da iniettare
for (let i = 0; i < teamMembers.length; i++) {
    printMember(teamContainerHTML, teamMembers[i]);
}

// Al click del bottone "Add"
const addButton = document.querySelector("#addMemberButton");
addButton.addEventListener("click", 
    function() {
        // SE il valore di nameInputHTML o il valore roleInputHTML sono vuoti stampo un errore
        if(nameInputHTML.value === "" || roleInputHTML.value === "") {
            alert("il nome e il ruolo sono informazioni richieste!");
            return;
        } 
        
        if(imgInputHTML.value === "") {
            imgInputHTML.value = "https://via.placeholder.com/400x429";
        }
        // creare un oggetto membro e pusharlo nell'array dei membri
        const member = {
            img: imgInputHTML.value,
            name: nameInputHTML.value,
            role: roleInputHTML.value,
        };
        teamMembers.push(member);
        // aggiornare la vista HTML
        printMember(teamContainerHTML, member);
        // pulire i campi input
        nameInputHTML.value = "";
        roleInputHTML.value = "";
        imgInputHTML.value = "";
    }
);