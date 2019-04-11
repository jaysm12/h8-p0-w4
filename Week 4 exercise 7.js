function urutkanAbjad(str) {
    var arr = str.split('')
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            var count = j + 1
            if(arr[count] < arr[j]){
                var tampung = arr[j]
                arr[j] = arr[count]
                arr[count] = tampung
            }
        }
    }

    return arr.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'