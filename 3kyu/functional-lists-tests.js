const chai = require('chai');
const expect = chai.expect;
const EmptyList = require('./functional-lists').emptyList;

describe('emptyList', ()=>{
	it('should push correctly one value', ()=>{
		let el = new EmptyList();
		el.push(1)
		expect(el.value).to.equal(1);
	});

	it('should push correctly two values', ()=>{
		let el = new EmptyList();
		el.push(1);
		el.push(2);
		console.log(el.next)
		expect(el.next).to.equal(2);
	});

});