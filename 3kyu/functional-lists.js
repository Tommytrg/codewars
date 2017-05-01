function List() {}

function EmptyList() {
	this.value = '';
	this.next = {};
}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() {};
EmptyList.prototype.isEmpty = function() { /* implement this */ };
EmptyList.prototype.length = function() { /* implement this */ };
//works
EmptyList.prototype.push = function(x) { 

	let followValue = this.value;
	let followNext = this.next;
	do{
		if(Object.keys(followValue).length === 0){
			followValue.value = x;
			followValue.next = new EmptyList();
		}else{
			followValue = followValue.next;
		}
	}while(Object.keys(followValue).length === 0);
};

EmptyList.prototype.remove = function(x) { /* implement this */ };
EmptyList.prototype.append = function(xs) { /* implement this */ };

function ListNode(value, next) { /* implement this */ }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { /* implement this */ };

ListNode.prototype.toString = function() { /* implement this */ };

ListNode.prototype.head = function() { /* implement this */ };
ListNode.prototype.tail = function() { /* implement this */  };
ListNode.prototype.length = function() { /* implement this */ };
ListNode.prototype.push = function(x) { /* implement this */ };
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ };

module.exports = {
    list: List,
    emptyList: EmptyList 
};

//Pruebas

let el = new EmptyList();
el.push(1)
el.push(2);
console.log( el);