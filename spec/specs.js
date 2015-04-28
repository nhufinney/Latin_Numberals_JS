describe('roman', function(){

    it("return the exact roman number <10", function(){
        expect(roman(5)).to.equal("V");
    });

    it("return the exact roman number <50", function(){
        expect(roman(50)).to.equal("L");
    });

    it("return the exact roman number <50", function(){
        expect(roman(35)).to.equal("XXXV");
    });

    it("return the exact roman number >50", function(){
        expect(roman(55)).to.equal("LV");
    });

    it("returns 45 more than 3 times of X ", function(){
        expect(roman(45)).to.equal("XLV");
    });

    it("returns 87 : 3 times of X ", function(){
        expect(roman(87)).to.equal("LXXXVII");
    });

    it("returns 95 more than 3 times of X ", function(){
        expect(roman(97)).to.equal("XCVII");
    });

    it("returns 425 more than 3 times of C ", function(){
        expect(roman(425)).to.equal("CDXXV");
    });

    it("returns 925 more than 3 times of C ", function(){
        expect(roman(925)).to.equal("CMXXV");
    });

    it("returns 1136 more ... ", function(){
        expect(roman(1136)).to.equal("MCXXXVI");
    });

    it("returns 2223 ..... ", function(){
        expect(roman(2223)).to.equal("MMCCXXIII");
    });

    it("returns 3781 ..... ", function(){
        expect(roman(3781)).to.equal("MMMDCCLXXXI");
    });


});
