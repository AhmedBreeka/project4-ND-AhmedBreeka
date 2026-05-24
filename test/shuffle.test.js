import { expect } from 'chai';
// import mocha from 'mocha';
import { shuffle } from '../src/shuffle.js';

describe('shuffle function', () => {
    
    it("should shuffle the indexes of an array", () => {
        const cards = [1, 2, 3, 4, 5];
        const shuffledCards = shuffle(cards);

        expect(shuffledCards).to.have.members(cards);
        expect(shuffledCards).to.not.deep.equal(cards);
    });
});