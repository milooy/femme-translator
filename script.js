var femme = function(str) {
    for(var i=0; i<str.length; i++) {
        dArr = Hangul.disassemble(str[i]);
        if(dArr.length == 4) {
            if(dArr[1] == 'ㅗ' && dArr[2] == 'ㅏ') {
                var tmp = dArr['3'];
                dArr[3] = dArr[2];
                dArr[2] = tmp;
            }
            str =[str.slice(0, i), Hangul.assemble(dArr), str.slice(i+1)].join('');
        }
    }
    return str;
}

$(function() {
    $('.change').on('click', function() {
        $('.result').text(femme($('input').val()));
    })
});
