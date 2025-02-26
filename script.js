function calculateTotal(price, tax) {
    let total = price + tax;

    if (!Number.isInteger(total)) {
        return;
    }

    return total;
}

let result = calculateTotal(100, "10");
console.log("Total:", result);
