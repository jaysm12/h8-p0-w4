function cariMedian(arr) {
  var middle = Math.round(arr.length / 2)
  if(arr.length % 2 == 0){
      var hasil = ((arr[middle] + arr[middle - 1]) / 2)
      return hasil 
    } else {
      return arr[middle - 1]
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5