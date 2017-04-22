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
		exepct(test).to.be.a('array');
	});
});
