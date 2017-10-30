const chai = require('chai');
const expect = chai.expect;
const EmptyList = require('./functional-lists').emptyList;

describe('EmptyList', () => {
	it('should push correctly one value', () => {
  let el = new EmptyList();
		 el.push(1)
		expect(el.value).to.equal(1);
	});

	it('should push correctly two values', () => {
		let el = new EmptyList();
		el.push(1);
		el.push(2);
		expect(el.next.value).to.equal(2);
	});

	it('should push correctly three values', () => {
		let el = new EmptyList();
		el.push(1);
		el.push(2);
		el.push(3)
		expect(el.next.next.value).to.equal(3);
	});

	it('should push correctly four values', () => {
		let el = new EmptyList();
		el.push(1);
		el.push(2);
		el.push(3);
		el.push(4)
		expect(el.next.next.next.value).to.equal(4);
	});

	it('should push correctly five values', () => {
		let el = new EmptyList();
		el.push(1);
		el.push(2);
		el.push(3);
		el.push(4);
		el.push(5);
		expect(el.next.next.next.next.value).to.equal(5);
	});
});