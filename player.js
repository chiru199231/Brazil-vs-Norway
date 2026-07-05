const SECRET_CODE = "VINILAAND";

const container = document.getElementById("ticketContainer");
const unlockBtn = document.getElementById("unlockBtn");
const input = document.getElementById("unlockCode");
const status = document.getElementById("status");

function loadTickets() {

    container.innerHTML = "";

    tickets.forEach((ticket) => {

        container.innerHTML += `
        <div class="ticket">

            <div class="ticketHeader">
                Ticket #${ticket.ticket}
            </div>

            <div class="locked">
                <h2>🔒</h2>
                <p>Enter VINILAAND to reveal players</p>
            </div>

            <div class="ticketContent">

                <div class="player">
                    <h2>🇧🇷 Brazil</h2>
                    <h3>${ticket.brazil.name}</h3>
                    <p>Jersey No. ${ticket.brazil.number}</p>
                </div>

                <div class="vs">VS</div>

                <div class="player">
                    <h2>🇳🇴 Norway</h2>
                    <h3>${ticket.norway.name}</h3>
                    <p>Jersey No. ${ticket.norway.number}</p>
                </div>

            </div>

        </div>
        `;

    });

}

loadTickets();

unlockBtn.addEventListener("click", function () {

    if (input.value.trim().toUpperCase() === SECRET_CODE) {

        document.querySelectorAll(".locked").forEach(card => {
            card.style.display = "none";
        });

        document.querySelectorAll(".ticketContent").forEach(card => {
            card.style.display = "block";
        });

        status.innerHTML = "✅ All 23 tickets unlocked!";
        status.style.color = "lime";

    } else {

        status.innerHTML = "❌ Incorrect Code";
        status.style.color = "red";

    }

});
