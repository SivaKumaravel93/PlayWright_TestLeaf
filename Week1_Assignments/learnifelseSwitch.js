function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome Browser...");
    } else if (browserName === "msedge") {
        console.log("Launching MSEdge Browser...");
    } else if (browserName === "firefox") {
        console.log("Launching Firefox Browser...");
    } else {
        console.log("Unsupported Browser");
    }
}

function runTests(testType) {
    switch (testType) {
        case "functional":
            console.log("Functional Testing");
            break;
        case "sanity":
            console.log("Sanity Testing");
            break;
        case "regression":
            console.log("Regression Testing");
            break;
        default:
            console.log("Smoke Testing");
            break;
    }
}

launchBrowser("chrome")
runTests("regression")