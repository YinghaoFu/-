function move(step){
    if (step == 1) {
        return 1
    } else if (step == 2) {
        return 2
    } else if (step == 3) {
        return 4
    } else {
        return move(step - 1) + move(step - 2) + move(step - 3)
    }
}

console.log(move(50));
