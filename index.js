let homeCount = 0
let guestCount = 0

let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")

function homeAdd1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeAdd2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homeAdd3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestAdd1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestAdd2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestAdd3() {
    guestCount += 3
    guestScore.textContent = guestCount
}