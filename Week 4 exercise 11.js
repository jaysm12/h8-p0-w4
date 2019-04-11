function shoppingTime(memberId, money) {
    if(memberId == false || memberId == undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
      } 
    
    var sepatu  = 1500000
    var bajuZoro = 500000
    var bajuHN = 250000
    var sweaterUniklooh = 175000
    var casingHandphone = 50000
    
    var obj = {
        memberId: memberId,
        money: money,
        listPurchased: []
    }
    
    if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    if(money >= sepatu){
        obj.listPurchased.push('Sepatu Stacattu')
        money = money - sepatu
    }
    if(money >= bajuZoro){
        obj.listPurchased.push('Baju Zoro')
        money = money - bajuZoro
    }
    if(money >= bajuHN){
        obj.listPurchased.push('baju H&N')
        money = money - bajuHN 
    }
    if(money >= sweaterUniklooh){
        obj.listPurchased.push('Sweater Uniklooh')
        money = money - sweaterUniklooh
    }
      // console.log(money)
    if(money >= casingHandphone){
        obj.listPurchased.push('Casing Handphone')
        money = money - casingHandphone
    }
      // console.log(money)
    
    obj.changeMoney = money
    
    
    
    
     return obj
}

  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja