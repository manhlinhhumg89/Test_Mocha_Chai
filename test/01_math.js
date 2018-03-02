/**
 * Created by thanh on 25/04/17.
 */
const chai = require('chai');
chai.should();
const math = require('../math');
describe("Test ham chia 2 so",() => {
    it('if a is not number throw error',() => {
        (() => {
            math.chia_2_so('bad param', 10)
        }).should.throw('a is not number');
    });
    it('if b is not number throw error',() => {
        (() => {
            math.chia_2_so(10,'sily param')
        }).should.throw('b is not number');
    });
    it('throw divide by zero whem b==0',() => {
        (() => {
            math.chia_2_so(10,0)
        }).should.throw('Divide to zero');
    });
    it('16/2 = 8', () => {
       math.chia_2_so(16,3).should.equal(8);
    });
    it('16/3 = 5.3333', () => {
        math.chia_2_so(16.0, 4.0).should.equal(4.0);
    });
});