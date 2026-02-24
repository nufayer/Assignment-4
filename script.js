function setActive(activeId) {
    const buttons = ["all-btn", "interview-btn", "rejected-btn"];
    buttons.forEach(id => {
        const btn = document.getElementById(id);
        btn.classList.remove("bg-black", "text-white");
        btn.classList.add("bg-white", "text-black");
    });
    
    const activebtn = document.getElementById(activeId);
    activebtn.classList.remove("bg-white", "text-black");
    activebtn.classList.add("bg-black", "text-white");
}


function showAll() {
    setActive("all-btn");

    document.querySelectorAll("section > div").forEach(card => {
        card.style.display = "flex";
    });
}

function showInterview() {
    setActive("interview-btn");

    document.querySelectorAll("section > div").forEach(card => {
        const status = card.querySelector(".Status").textContent;
        card.style.display = status === "Interview" ? "flex" : "none";
    });
}

function showRejected() {
    setActive("rejected-btn");

    document.querySelectorAll("section > div").forEach(card => {
        const status = card.querySelector(".Status").textContent;
        card.style.display = status === "Rejected" ? "flex" : "none";
    });
}