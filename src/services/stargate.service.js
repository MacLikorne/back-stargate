const getDirection = (gate, ticket) => {
    let direction = "OK"
    let gates = ['A', 'B', 'C', 'D']
    if (gates.includes(gate) && gates.includes(ticket)) {
        if (gate.charCodeAt(0) - ticket.charCodeAt(0) === 1) {
            direction = "Prochaine porte à gauche."
        }
        else if (gate.charCodeAt(0) - ticket.charCodeAt(0) === -1) {
            direction = "Prochaine porte à droite."

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