let total_characters = 0, time = 60, counter_start, toggle = 0;
let lblChars = 0, lblWpm = 0, lblAccuracy = (100).toFixed(2), lblErrors = 0;
let paragraph = [
"lie grasp fine write close teach tuck sum fire feed live cheer deal sign mount sort cry kill crush trust love cheer fit shut grant seem bang hurt enter keep shoot suit need state shout show round dip imply snap pin kiss turn urge flee crack peer take shine allow show slip clean lead rush curl term call vote limit break play clear plant sense grip claim born abuse sound wipe creep give ship throw enjoy meet lack go ease ship drag drink equip cater peer scan hunt treat fall fire knock use tend move label weigh point bend build laugh buy marry fetch halt knock get tip fade guard fail sigh cater bid name greet spot spell teach suit last free crush dream know save end spoil state part seal base drain tap solve hire guard crack count deny laugh smash merge nod do be teach",
"Once, there was an old man who had four sons. All four of them were very lazy. One day, the old man fell sick and was counting his last days in bed. He worried a lot about his sons' future as the young men hesitated a lot to work. The sons believed that luck would favour them. The old man's health deteriorated every day and he decided to talk to his sons about their future. However, his sons did not listen to him. Finally, the old man decided to play a trick to let his sons realize the importance of work. He called all his sons and let them sit near him on his bed. He said that he had a treasure box with gold coins and expensive gems for them and wanted to share the treasure equally among the four of them. The young men were very happy and asked where his father had",
"Most programming languages support Linux either directly or through third-party community based ports. The original development tools used for building both Linux applications and operating system programs are found within the GNU toolchain, which includes the GNU Compiler Collection (GCC) and the GNU Build System. Amongst others, GCC provides compilers for Ada, C, C++, Go and Fortran. Many programming languages have a cross-platform reference implementation that supports Linux, for example PHP, Perl, Ruby, Python, Java, Go, Rust and Haskell. First released in 2003, the LLVM project provides an alternative cross-platform open-source compiler for many languages. Proprietary compilers for Linux include the Intel C++ Compiler, Sun Studio, and IBM XL C/C++ Compiler."
], texts = [], givenTexts = [], items = [];
let txtarea = document.querySelector(".txtarea"), startBtn = document.querySelector(".start");
let characters = document.querySelector(".characters"), wordsperminute = document.querySelector(".wpm");
let lblTime = document.querySelector(".time"), follow = document.querySelector("#follow");
let cError = document.querySelector(".cErrors"), accuracy = document.querySelector(".accuracy");
let difficulty = document.querySelector(".difficulty"), text;
startBtn.style.cursor = `pointer`; difficulty.style.cursor = `pointer`;

(function(){
    text = paragraph[0];
    generateTexts();
})();

function generateTexts() {
    extractGiven();
    for(let i = 0; i < givenTexts.length; i++){
        let span = document.createElement("span");
        span.setAttribute("class","p-1");
        span.append(givenTexts[i] + " ");
        items.push(span);
        follow.append(items[i]);
    }
}

function removeTexts(parent) {
    while(parent.firstChild) parent.removeChild(parent.firstChild);
    givenTexts.splice(0,givenTexts.length); items.splice(0,items.length);
    reset();
}

function difficultyToggle() {
    toggle++;
    if(toggle == 0){
        removeTexts(follow);
        difficulty.innerText = `Easy`;
        difficulty.setAttribute("class","fw-bold link-success");
        text = paragraph[0];
        generateTexts();
    }
    if(toggle == 1){
        removeTexts(follow);
        difficulty.innerText = `Medium`;
        difficulty.setAttribute("class","fw-bold link-warning");
        text = paragraph[1];
        generateTexts();
    }
    if(toggle == 2){
        removeTexts(follow);
        difficulty.innerText = `Hard`;
        difficulty.setAttribute("class","fw-bold link-danger");
        text = paragraph[2];
        generateTexts();
    }
    if(toggle >= 2) toggle = -1;
}

function updateWord() {
    let newline_count = 0;
    for(let i = 0; i < txtarea.value.length; total_characters++, i++);
    getErrors(); visualAspectOn();
    characters.innerText = `${lblChars = total_characters}`;
    wordsperminute.innerText = `${lblWpm = texts.length - lblErrors}`;
    cError.innerText = `${lblErrors}`;
    accuracy.innerText = `${lblAccuracy = (((texts.length - lblErrors) / texts.length) * 100).toFixed(2)}`;
    total_characters = 0; lblErrors = 0;
    texts.splice(0,texts.length); givenTexts.splice(0,givenTexts.length);
}

function visualAspectOn() {
    if(texts[texts.length] == givenTexts[givenTexts.length]) items[texts.length - 1].setAttribute("class","bg-dark text-light rounded-3 p-1");
    for(let i = 0; i < texts.length - 1; i++){
        (texts[i] == givenTexts[i]) ? items[i].setAttribute("class","text-success p-1") : items[i].setAttribute("class","text-danger p-1");
    }
    for(let j = items.length; j >= texts.length; j--){
        if(items[j] != texts[j]) items[j].setAttribute("class","p-1");
    }
}

function visualAspectOff() {
    for(let i = 0; i < items.length; items[i].setAttribute("class","p-1"), i++);
}

function getErrors() {
    extractTextArea(); extractGiven();
    for(let i = 0; i < texts.length; i++){
        if(texts[i] != givenTexts[i]) lblErrors++;
    }
}

function extractTextArea(){
    /* Code below finds all words in a text area string*/
    /* \s represents as a whitespace character it starts to split words once a whitespace is found */
    let lines = $(txtarea).val().split(/\s/);
    for(let i = 0; i < lines.length; i++){
        if(/\S/.test(lines[i])) texts.push((lines[i]).trim());
    }
}

function extractGiven() {
    let givenText = text.split(/\s/);
    for(let i = 0; i < givenText.length; i++){
        if(/\S/.test(givenText[i])) givenTexts.push((givenText[i]).trim());
    }
}

function timer() {
    if(time == 0){
        clearInterval(counter_start);
        txtarea.disabled = true;
        updateWord();
    }
    if(time < 6) lblTime.setAttribute("class","fw-bold text-danger");
    lblTime.innerText = `${time--}s`;
}

function start() {
    counter_start = setInterval(timer,1000);
    txtarea.disabled = false;
    txtarea.focus(); txtarea.select();
    startBtn.setAttribute("class","col-2 fw-bold link-danger start");
    startBtn.innerText = `Click to Reset`; startBtn.setAttribute("onclick","reset()");
}

function reset() {
    startBtn.setAttribute("class","col-2 fw-bold link-warning start");
    startBtn.innerText = `Click to Start`; startBtn.setAttribute("onclick","start()");
    txtarea.value = ""; txtarea.disabled = true; visualAspectOff(); 
    time = 60; lblTime.setAttribute("class","fw-bold dark-mode-color-1");
    characters.innerText = `${total_characters = 0}`;
    wordsperminute.innerText = `${lblWpm = 0}`; lblTime.innerText = `${time = 60}s`;
    accuracy.innerText = `${lblAccuracy = (100).toFixed(2)}`; cError.innerText = `${lblErrors = 0}`;
    lblTime.setAttribute("class","fw-bold dark-mode-color-1");
    clearInterval(counter_start);
}

txtarea.addEventListener('keyup', (e) => {
    if(e.key === "Escape") txtarea.blur();
    if(e.key === "Enter") e.preventDefault();
    updateWord();
});

document.addEventListener('keyup', (e) => {
    if(e.ctrlKey && e.altKey && (e.key).toLowerCase() == "s") startBtn.click();
    if(e.ctrlKey && e.altKey && (e.key).toLowerCase() == "m") difficultyToggle();
});
