function checkAB(num) {
    var arr = num.split('')
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'a'){
            for(var j = i; j < arr.length; j++){
                if(arr[j] == 'b'){
                    if(j - i == 4){
                        return true
                    }
                }
            }
        } else if(arr[i] == 'b'){
            for(var j = i; j < arr.length; j++){
                if(arr[j] == 'a'){
                    if(j - i == 4){
                        return true
                    }
                }
            }
        }
    }



    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false