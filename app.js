// SIMULASI DATABASE TURNAMEN
const tournaments = [
    {
        title: "Mobile Legends Nusantara Championship",
        type: "Online",
        prizepool: "Rp 5.000.000",
        date: "10 November 2026",
        link: "https://forms.gle"
    },
    {
        title: "Turnamen Futsal Regional Ambon",
        type: "Offline (Gor Simpur)",
        prizepool: "Rp 10.000.000",
        date: "25 November 2026",
        link: "https://forms.gle"
    },
    {
        title: "PUBG Mobile PINC Online",
        type: "Online",
        prizepool: "Rp 3.500.000",
        date: "05 Desember 2026",
        link: "https://forms.gle"
    }
];

// FUNGSI UNTUK MENAMPILKAN DATA KE WEBSITE
function displayTournaments() {
    const listContainer = document.getElementById("tournament-list");
    
    tournaments.forEach(tournament => {
        // Buat kotak (card) untuk setiap turnamen
        const card = document.createElement("div");
        card.classList.add("card");
        
        // Tentukan warna label berdasarkan Online / Offline
        const labelClass = tournament.type.includes("Online") ? "badge-online" : "badge-offline";

        card.innerHTML = `
            <span class="badge ${labelClass}">${tournament.type}</span>
            <h3>${tournament.title}</h3>
            <p>💰 <strong>Prizepool:</strong> ${tournament.prizepool}</p>
            <p>📅 <strong>Tanggal:</strong> ${tournament.date}</p>
            <a href="${tournament.link}" target="_blank" class="btn-daftar">Akses / Daftar</a>
        `;
        
        listContainer.appendChild(card);
    });
}

// Jalankan fungsi saat website dibuka
displayTournaments();
