function executionAfterDelay(func,seconds){
    setTimeout(func,seconds*1000);
}
function dispaly(){
    console.log("Hello, World!");
}

executionAfterDelay(dispaly,5);