const getDirection = (gate, ticket) => {
    let direction = ""
    let gates = ['A', 'B', 'C', 'D']
    if (gates.includes(gate) && gates.includes(ticket)) {
        if (gate === ticket) {
            direction = "OK"
        }
        else if (ticket === gates[gates.indexOf(gate) + 1] || ticket === gates[0]) {
            direction = "Prochaine porte à droite."
        }
        else if (ticket === gates[gates.indexOf(gate) - 1] || ticket === gates[gates.length - 1]) {
            direction = "Prochaine porte à gauche."
        }
        else {
            direction = "Deuxième porte à gauche."
        }
    }
    else {
        direction = "Mais... C'est un faux billet ! "
    }


    return direction
}

module.exports = {
    getDirection
}