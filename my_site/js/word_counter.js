let txtarea = document.querySelector(".txtarea");
let words = document.querySelector(".words"), characters = document.querySelector(".characters");
let paragraphs = document.querySelector(".paragraphs"), sentences = document.querySelector(".sentences");

let wordCounter = {
    handleWordCount: string => words.innerText = `${string.split(/[\s,]+/).filter(word => word !== '').length}`,
    handleCharacterCount: string => characters.innerText = string.length,
    handleSentenceCount: string => sentences.innerText = `${string.split(/[.?!]+/).length-1}`,
    handleParagraphCount: string => paragraphs.innerText = `${string.split("\n\n").length}`
}

txtarea.addEventListener("keyup", e => {
    wordCounter.handleWordCount(txtarea.value)
    wordCounter.handleCharacterCount(txtarea.value)
    wordCounter.handleSentenceCount(txtarea.value)
    wordCounter.handleParagraphCount(txtarea.value)
});