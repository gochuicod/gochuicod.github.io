const wordCounter = {
    handleWordCount: string => $(".words").text(`${string.split(/[\s,]+/).filter(word => word !== '').length}`),
    handleCharacterCount: string => $(".characters").text(string.length),
    handleSentenceCount: string => $(".sentences").text(`${string.split(/[.?!]+/).length-1}`),
    handleParagraphCount: string => $(".paragraphs").text(`${string.split("\n\n").length}`)
}

$(".txtarea").on("keyup", () => {
    wordCounter.handleWordCount($(".txtarea").val())
    wordCounter.handleCharacterCount($(".txtarea").val())
    wordCounter.handleSentenceCount($(".txtarea").val())
    wordCounter.handleParagraphCount($(".txtarea").val())
});