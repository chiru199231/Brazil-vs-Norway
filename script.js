const SECRET_CODE = "VINILAAND";

const container = document.getElementById("ticketContainer");
const unlockBtn = document.getElementById("unlockBtn");
const input = document.getElementById("unlockCode");
const status = document.getElementById("status");

function loadTickets() {

    container.innerHTML = "";

    tickets.forEach(ticket => {

        const card = `
        <div class="ticket">

            <div class="ticketHeader">
                🎟 Ticket #${ticket.ticket}
            </div>

            <div class="locked">
                <h2>🔒</h2>
                <p>Enter <b>VINILAAND</b> to reveal the players</p>
            </div>

            <div class="ticketContent">

                <div class="player">
                    <h2>🇧🇷 Brazil</h2>
                    <h3>${ticket.brazil.name}</h3>
                    <p>Jersey No. ${ticket.brazil.number}</p>
                </div>

                <div class="vs">
                    VS
                </div>

                <div class="player">
                    <h2>🇳🇴 Norway</h2>
                    <h3>${ticket.norway.name}</h3>
                    <p>Jersey No. ${ticket.norway.number}</p>
                </div>

                <div class="footer">
                    <hr>
                    <p>🇧🇷 Brazil VS Norway 🇳🇴</p>
                    <p>📅 6 July | 🕐 1:30 AM</p>
                    <p>Ticket #${ticket.ticket}</p>
                </div>

            </div>

        </div>
        `;

        container.innerHTML += card;

    });

}

loadTickets();

unlockBtn.addEventListener("click", () => {

    const code = input.value.trim().toUpperCase();

    if (code === SECRET_CODE) {

        document.querySelectorAll(".locked").forEach(lock => {
            lock.style.display = "none";
        });

        document.querySelectorAll(".ticketContent").forEach(content => {
            content.style.display = "block";
        });

        status.textContent = "✅ All 23 tickets unlocked!";
        status.style.color = "lime";

    } else {

        status.textContent = "❌ Wrong Code!";
        status.style.color = "red";

    }

});
