const convert = {
    hexCharacters: {a: "A", b: "B", c: "C", d: "D", e: "E", f: "F"},
    process: function() {
        let val = +($(".convert").val());
        if(val > 4095) $(".max").text("Only accepts 12-bit values!")
        else {
            $(".max").text("");
            $(".binary").text(`${this.DecimalToBinary(val)}`)
            $(".octal").text(`${this.DecimalToOctal(val)}`)
            $(".hex").text(`${this.DecimalToHex(val)}`)
        }
    },
    DecimalToBinary: input => {
        let empty = [];
        for(let i = input, j = 0; i != 0; i /= 2, j++){
            if(i < 1) break;
            if(j % 4 == 0) empty.push(' ');
            if(Math.floor(i % 2) == 0) empty.push("0");
            else empty.push("1");
        }
        return empty.reverse().join('');
    },
    DecimalToOctal: input => {
        let empty = [];
        for(let i = input; i != 0; i /= 8){
            if(i < 1) break;
            empty.push(Math.floor(i%8));
        }
        return empty.reverse().join('')
    },
    DecimalToHex: function(input) {
        let empty = [];
        for(let i = input; i != 0; i /= 16){
            if(i < 1) break;
            empty.push(Math.floor(i%16));
        }
        for(let j = 0; j < empty.length; j++){
            if(empty[j] == 15) empty[j] = this.hexCharacters.f;
            if(empty[j] == 14) empty[j] = this.hexCharacters.e;
            if(empty[j] == 13) empty[j] = this.hexCharacters.d;
            if(empty[j] == 12) empty[j] = this.hexCharacters.c;
            if(empty[j] == 11) empty[j] = this.hexCharacters.b;
            if(empty[j] == 10) empty[j] = this.hexCharacters.a;
        }
        return empty.reverse().join('');
    }
}

$(".convert").on("keyup", e => {
    if(e.key == 13) e.preventDefault()
    convert.process();
})