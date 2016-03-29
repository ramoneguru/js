/**
 * Created by ifthenelse on 3/25/16.
 */
"use strict";

function Node(data) {
	this.dataSet = data;
	this.other = null;
}

function List() {
	this._head = null;
	this._length = 0;
}

List.prototype.append = function(obj) {
	var current,
		node = {
			data: obj,
			next: null
		};

	if(this._head === null) {
		this._head = node;
	} else {
		current = this._head;

		while(current.next !== null) {
			current = current.next;
		}

		current.next = node;
	}
	this._length += 1;
};

List.prototype.getItem = function(index) {
	var current, i = 0;
	if(index > -1 && index < this._length) {
		current = this._head;
		while(i < index) {
			current = current.next;
			i++;
		}
		return current.data;
	} else {
		return null;
	}
};

List.prototype.remove = function(index) {
	var current = this._head, previous, i = 0;

	if(index > -1 && index < this._length) {
		if(index === 0) {
			this._head = current.next;
		} else {
			while(i < index) {
				previous = current;
				current = current.next;
				i++;
			}
			previous.next = current.next;
		}
		this._length -= 1;
		return current.data;
	} else {
		return null;
	}
};

List.prototype.toArray = function() {
	var current = this._head, arr = [];
	while(current) {
		arr.push(current.data);
		current = current.next;
	}
	return arr;
};

List.prototype.toString = function() {
	return this.toArray().toString();
};

var list = new List();
var n = new Node("Omg what 1"), v = new Node("Omg what 2"), b = new Node("Omg what 3");
var t = {
	key1: "Key 1",
	key2: "Key 2"
};

list.append(n);
list.append(v);
list.append(b);
list.append(t);
//console.log(list);
//console.log(list.getItem(1));
//console.log(list.remove(1));
console.log(list);
console.log(list.toArray());
console.log(list.toString());