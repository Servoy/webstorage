angular.module('webstorageLocalstorage',['servoy'])
.factory("webstorageLocalstorage",function($services) 
{
	var scope = $services.getServiceScope('webstorageLocalstorage');
	return {
		/**
		 * Returns the name of a key based on an index
		 *
		 * @param {Number} index
		 *
		 * @return {String}
		 */
		key: function(index) {
			return window.localStorage.key(index);
		},

		/**
		 * Sets an item based on a key name and value
		 *
		 * @param {String} key
		 * @param {String} value
		 */
		setItem: function(key, value) {
			window.localStorage.setItem(key, value);
		},

		/**
		 * Returns the value of an item based on a key name
		 *
		 * @param {String} key
		 *
		 * @return {String}
		 */
		getItem: function(key) {
			return window.localStorage.getItem(key);
		},

		/**
		 * Removes an item based on a key name
		 *
		 * @param {String} key
		 */
		removeItem: function(key) {
			window.localStorage.removeItem(key);
		},

		/**
		 * Clears the entire local storage
		 */
		clear: function() {
			window.localStorage.clear();
		},

		/**
		 * Returns the length based on the amount of items
		 */
		getLength: function() {
			return window.localStorage.length;
		}
	}
})
.run(function($rootScope,$services)
{
	var scope = $services.getServiceScope('webstorageLocalstorage');
})