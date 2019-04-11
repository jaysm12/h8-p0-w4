
function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var arr = kata.split('')
    for(var i = 0; i < arr.length; i++){
        var tampung = ''
        for(var j = 0; j < abjad.length; j++){
            if(arr[i] == abjad[j]){
                tampung += abjad[j + 1]
            }
        }

        arr[i] = tampung
    }

    return arr.join('')
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu