const container = document.getElementById("ticketContainer");
const button = document.getElementById("unlockBtn");
const input = document.getElementById("unlockCode");
const status = document.getElementById("status");

function createTickets(){

    tickets.forEach(ticket=>{

        container.innerHTML += `

        <div class="ticket">

            <div class="ticketHeader">
                Ticket #${ticket.ticket}
            </div>

            <div class="locked">

                <h2>🔒</h2>

                <p>Locked Ticket</p>

            </div>

            <div class="ticketContent">

                <div class="player">

                    <img src="${ticket.brazil.photo}">

                    <h3>${ticket.brazil.name}</h3>

                    <span>🇧🇷 Brazil</span>

                    <span>Jersey #${ticket.brazil.number}</span>

                </div>

                <div class="vs">
                    VS
                </div>

                <div class="player">

                    <img src="${ticket.norway.photo}">

                    <h3>${ticket.norway.name}</h3>

                    <span>🇳🇴 Norway</span>

                    <span>Jersey #${ticket.norway.number}</span>

                </div>

            </div>

        </div>

        `;

    });

}

createTickets();

button.addEventListener("click", unlockTickets);

function unlockTickets(){

    const code = input.value.trim();

    if(code === "VINILAAND"){

        document.querySelectorAll(".locked").forEach(lock=>{

            lock.classList.add("hide");

        });

        document.querySelectorAll(".ticketContent").forEach(content=>{

            content.classList.add("show");

        });

        status.innerHTML = "✅ All 23 tickets unlocked!";

        status.style.color = "#00ff66";

    }

    else{

        status.innerHTML = "❌ Wrong Code";

        status.style.color = "red";

    }

}
