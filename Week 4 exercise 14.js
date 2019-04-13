function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = []
    
    for(var i = 0; i < arrPenumpang.length; i++){
        var obj = {}
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        for(var j = 0; j < rute.length; j++){
            if(rute[j] == obj.naikDari){
                for(var k = j; k < rute.length; k++){
                    if(rute[k] == obj.tujuan){
                        var jarak = k - j
                        obj.bayar = jarak * 2000
                    }
                }
            }
        }

        hasil.push(obj)
    }

    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]