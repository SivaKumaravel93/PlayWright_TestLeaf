function getGrade(score) {
    switch (true) {
        case score > 90:
            console.log("A");
            break;
        case score > 75:
            console.log("B");
            break;
        case score > 60:
            console.log("C");
            break;
        case score > 50:
            console.log("D");
            break;
        case score > 35:
            console.log("E");
            break;
        default:
            console.log("U");
            break;
    }
}

let score = 8;
getGrade(score)