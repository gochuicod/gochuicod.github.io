let count = 0;

$(".add").on("click", () => $(".currentCount").text(++count));
$(".deduct").on("click", () => $(".currentCount").text(--count));
$(".reset").on("click", () => { count = 0; $(".currentCount").text(count); });