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
	if(this.value === ''){
		this.value = x;
		this.next = new EmptyList();
	}else{
	 	let aux = this.next;
		let find = false;
    while(!find){
			if(aux.value === ''){
				aux.value = x;
				aux.next = new EmptyList();
				find = true;
			}else{
				aux = aux.next;
			}
		}

		
	}
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

