function changeMe(arr) {
    if(arr.length == 0){
        return ''
    }
    for(var i = 0; i < arr.length; i++){
        var result = (i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':'       
        if(arr[i][3] == undefined){
            arr[i].push('Invalid Birth Year')
        } else {
            arr[i][3] = 2019 - arr[i][3]
        }
        var obj =  {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: arr[i][3]
            }
        console.log(result)    
        console.log(obj)
    } 
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""