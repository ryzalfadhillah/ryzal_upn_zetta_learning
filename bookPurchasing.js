function bookPurchasing (detail, discount = 5, tax = 2) {
    let result = 0;
    if(detail && detail.price){
        const amountOfdiscount = detail.price * (discount / 100);
        const priceAfterDiscount = detail.price - amountOfdiscount;
        const amountOfTax =  priceAfterDiscount * (tax / 100);
        const priceAfterTax = priceAfterDiscount + amountOfTax;

        console.log(`Book Title\t\t: ${detail.title}`);
        console.log(`Amount of Discount\t: Rp.${amountOfdiscount}`);
        console.log(`Price after Discount\t: Rp.${priceAfterDiscount}`);
        console.log(`Amount of Tax\t\t: Rp.${amountOfTax}`);
        console.log(`Price After Tax\t\t: Rp.${priceAfterTax}`);
    }
    return result;
}

book = {
    title: 'Dasar-dasar Pemrograman Javascript',
    price: 145000,
    printingStatus: true
};

bookPurchasing({title: "Harry Potter", price: 100000, printingStatus: true}, 10, 5);
console.log("");
bookPurchasing(book, 10, 2);
console.log("");
book.title = "Pemrograman Web";
book.price = 120000;
book.printingStatus = false;
bookPurchasing(book, 10, 2);