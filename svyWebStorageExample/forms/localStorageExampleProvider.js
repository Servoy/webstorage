/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"AD1728BA-1E69-4A1F-87D2-8D5D4E6DAC57"}
 */
function getName() {
	return 'Local Storage';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"D1AD81E3-219B-4187-A5FC-5ACE6FD1597A"}
*/
function getDescription() {
	return 'Web Local Storage'
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"E4F36A3B-91D7-46B6-B522-2E59FEB6B8FE"}
*/
function getParent() {
	return forms.ngServiceSamples;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"F61907CB-0CD1-48D1-8DDF-C799FA44E8F5"}
*/
function getIconStyleClass() {
	return 'fa fa-database';
}
