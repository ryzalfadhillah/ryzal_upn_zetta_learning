function bookPurchasing (detail, discount = 5, tax = 2, stock = 10, quantity = 1) {
    let result = 0;
    let order = 0;
    let purchaseAgain = true;

    for (let i = 0; i <quantity; i++) {
        if(i > stock-1){
            purchaseAgain = false;
            break;
        }
        order ++;
    }
    
    if(detail && detail.price){
        const amountOfdiscount = (order * detail.price) * (discount / 100);
        const priceAfterDiscount = (order * detail.price) - amountOfdiscount;
        const amountOfTax =  priceAfterDiscount * (tax / 100);
        const priceAfterTax = priceAfterDiscount + amountOfTax;
        result = priceAfterTax;
        console.log("------------------------------------------------------");
        console.log("\t\t    BOOK PURCHASING");
        console.log("------------------------------------------------------");
        console.log(`Book Title\t\t: ${detail.title}`);
        console.log(`Quantity\t\t: ${order}`);
        console.log(`Amount of Discount\t: Rp.${amountOfdiscount}`);
        console.log(`Price after Discount\t: Rp.${priceAfterDiscount}`);
        console.log(`Amount of Tax\t\t: Rp.${amountOfTax}`);
        console.log(`Price After Tax\t\t: Rp.${priceAfterTax}`); 
        console.log("");
        if(purchaseAgain && (stock - order > 0)){
            console.log(`stock left\t\t: ${stock - order}`);
            console.log("Stock still available, you can order again");
        }else{
            console.log(`stock left\t\t: ${stock - order}`);
            console.log("Stock is sold out, you can't order again");
        }
    }
    return result;
}

function credits(result, month){
    console.log("");
    console.log(`Simulasi kredit selama ${month} bulan : `);
    const credit = result / month;
    const pembayaran = [];
    for(let i = 0; i < month; i++){
        pembayaran.push(credit);
        console.log(`Bulan ke-${i+1}\t\t: Rp.${pembayaran[i]}`);
    }
    console.log("------------------------------------------------------");
    return pembayaran;
}

book = {
    title: 'Dasar-dasar Pemrograman Javascript',
    price: 145000,
    printingStatus: true
};

credits(bookPurchasing({title: "Harry Potter", price: 100000, printingStatus: true}, 10, 5, 20, 10),6)
console.log("");

credits(bookPurchasing(book, 10, 2, 12, 15),3)
console.log("");

book.title = "Pemrograman Web";
book.price = 120000;
book.printingStatus = false;

credits(bookPurchasing(book, 10, 2, 10, 10),12);