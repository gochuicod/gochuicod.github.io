let count=1, total_characters=0;function updateWord(){let x=document.getElementById("txtarea").value; let newline_count=0; for(let i=0; i <=x.length; i++){if(x.charAt(i)==" ") count++; if(x.charAt(i)=="\n" || x.charAt(i)=="\r") newline_count++; total_characters++;}document.getElementById("words").innerText=`${count + (newline_count/2)}`; document.getElementById("characters").innerText=`${total_characters}`; count=1; total_characters=0;}document.querySelector("#txtarea").addEventListener('keypress', (e)=> updateWord());
