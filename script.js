var femme = function(str) {
    return str.split('').map(function(char) {
        var d = Hangul.disassemble(char);
        if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])) {
            var tmp = d['3'];
            d[3] = d[2];
            d[2] = tmp;
        }
        return Hangul.assemble(d);
    }).join('');
};

$(function() {
    $('.change').on('click', function() {
        $('.result').text(femme($('.femme').val()));
    })
});
