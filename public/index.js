function discord() {
    window.open("https://discord.gg/Mmu8qPCBPw")
}

fetch("https://floral.origaming.ch/servers/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then((res) => {
        const servers = res
        for (const [server, value] of Object.entries(servers)) {
            if (value) {
                const e = document.getElementsByClassName(server)[0].lastElementChild
                e.style.backgroundColor = "#6fea66"
                e.firstElementChild.innerHTML = "ON"
            }
        }
    })