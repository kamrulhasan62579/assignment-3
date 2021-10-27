// https://github.com/kamrulhasan62579/assignment-3

// kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer < 0 ) {
        return console.log("Please input positive value")
    }
    let meter = kilometer * 1000;
    return meter;
}


// budgetCalculator 
function budgetCalculator(clock, phone, laptop) {
   if (clock < 0 || phone < 0 || laptop < 0) {
       return console.log("Please input positive value")
   }
    let clockPrice = clock * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;

    let totalPrice = clockPrice + phonePrice + laptopPrice;
    return totalPrice;
}


// hotelCost
function hotelCost(day) {
    let cost;
    if (day < 0) {
        return console.log("Please enter positive value")
    }
    if (day >= 1 && day <= 10) {
        cost = day * 100;
    }
        if (day >= 11 && day <= 20) {
        cost = ((day - 10) * 80) + 1000;
    }
        if (day >= 21) {
        cost = ((day - 20) * 50) + 1800;
    }
    return cost;
}


// megaFriend
function megaFriend(friendList) {
    if (friendList.length > 0) {
            let array = friendList.sort((a, b) => {
        return b.length - a.length;
        });
        return array[0];
    }
    if (friendList.length === 0) {
        return console.log("Please enter array's element")
    }
}
