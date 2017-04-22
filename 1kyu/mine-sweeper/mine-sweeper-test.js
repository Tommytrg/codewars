/* jshint esversion:6 */
const chai = require('chai');
const expect = chai.expect;
const functions = require('./mine-sweeper');
//const lookForNumberCoords = require('./mine-sweeper');
const map =
  `? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?`;

describe('initializedMap function', ()=>{
	it('should return an array', ()=>{
		let test = functions.initializeMap(map);
		expect(test).to.be.a('Array');
	});
	it('should return an array of arrays', ()=>{
		let test = functions.initializeMap(map);
		expect(test.map(item=>item) ).to.be.a('Array');
	});
});

describe('lookForNumberCoords', ()=> {
	it('should return an array', ()=>{
		let test = functions.lookForNumberCoords(functions.initializeMap(map),0);
		expect(test).to.be.a('array');
	});
	it('should return coords [ [ 3, 2 ], [ 0, 5 ], [ 1, 5 ], [ 2, 5 ] ]', ()=>{
		let test = functions.lookForNumberCoords(functions.initializeMap(map),0);
		expect(test[0]).deep.equal([3, 2]);
		expect(test[1]).deep.equal([0, 5]);
		expect(test[2]).deep.equal([1, 5]);
		expect(test[3]).deep.equal([2, 5]);
	});
});