const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator", () => {
    let simpleInterestAmount = calculateSimpleInterest(1000, 5, 1);
    let totalAmount = calculateTotalPayableAmount(1000, simpleInterestAmount);

    it("calculates simple interest", function() {
        expect(simpleInterestAmount).toBe(50);
    });
    it("calculates the total amount", function() {
        expect(totalAmount).toBe(1050);
    });



})