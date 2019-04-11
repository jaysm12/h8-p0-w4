function digitPerkalianMinimum(angka) {
    var tampung = []
    for(var i = 1; i <= angka; i++){
        if(angka / i > 0){
            var hasil = angka / i
            if(hasil % 1 == 0){
                tampung.push([i + '', hasil + ''])
            }
        }
    }
    
    tampung = tampung.slice(0, Math.round(tampung.length / 2))
    var hasil = tampung[0][0].length + tampung[0][1].length
    for(var i = 0; i < tampung.length; i++){
        var digit = tampung[i][0].length + tampung[i][1].length
        if(digit < hasil){
            hasil = digit
        }
        
        
    }

    return hasil
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2