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


const totalEl = document.getElementById("total");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");

function updateDashboard() {

    const cards = document.querySelectorAll("section > div");

    let total = cards.length;
    let interview = 0;
    let rejected = 0;

    cards.forEach(card => {
        const status = card.querySelector(".Status").textContent.trim();

        if (status === "Interview") interview++;
        if (status === "Rejected") rejected++;
    });

    totalEl.textContent = total;
    interviewCountEl.textContent = interview;
    rejectedCountEl.textContent = rejected;
}

document.querySelectorAll("section > div").forEach(card => {

    const interviewBtn = card.querySelector(".btn-success");
    const rejectBtn = card.querySelector(".btn-error");
    const statusEl = card.querySelector(".Status");
    const deleteBtn = card.querySelector(".fa-trash-can").parentElement;

    interviewBtn.addEventListener("click", function () {
        statusEl.textContent = "Interview";
        statusEl.className = "Status bg-green-300 w-[90px]";
        updateDashboard();
    });

    rejectBtn.addEventListener("click", function () {
        statusEl.textContent = "Rejected";
        statusEl.className = "Status bg-red-300 w-[90px]";
        updateDashboard();
    });

    deleteBtn.addEventListener("click", function () {
        card.remove();
        updateDashboard();
    });

});

updateDashboard();