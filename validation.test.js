function validateTask(task) {
    return task.trim() !== "";
}

function testValidTask() {
    if (validateTask("Complete assignment")) {
        console.log("PASS: Valid Task test");
    } else {
        throw new Error("Test Failed: Valid task was rejected");
    }
}

function testEmptyTask() {
    if (!validateTask("")) {
        console.log("PASS: Empty Task test");
    } else {
        throw new Error("Test Failed: Empty task was accepted");
    }
}

testValidTask();
testEmptyTask();

console.log("ALL TESTS PASSED");