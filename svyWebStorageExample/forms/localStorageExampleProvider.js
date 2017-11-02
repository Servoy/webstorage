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
	return 'Example of the Web Local Storage service'
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
/**
 * @public
 * @return {Array<String>} code lines
 * @SuppressWarnings(private) TODO suppress not working ?
 * @properties={typeid:24,uuid:"7DDBCAC0-B45A-4BC4-95C2-4304F82D2BFC"}
 */
function getSampleCode() {
	return printMethodCode(forms.localStorageSample.setItemSearchText)
	.concat(printMethodCode(forms.localStorageSample.getItemSearchText))
	.concat(printMethodCode(forms.localStorageSample.removeItemSearchText))
	.concat(printMethodCode(forms.localStorageSample.clearAll));

}


/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"CE4CE763-80C5-4659-B50F-75E467EDC7AA"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/webstorage';
}

/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"490036A1-93A6-48F1-BF9D-06DFAEFB2750"}
*/
function getMoreInfo() {
	var url = 'https://raw.githubusercontent.com/Servoy/webstorage/master/README.md';
	return plugins.http.getPageData(url);
}

/**
*
* @return {String} Download URL
*
* @properties={typeid:24,uuid:"93B0AC6D-725C-44E4-8A3F-A6F40B0D6CD9"}
*/
function getDownloadURL() {
	return 'https://github.com/Servoy/webstorage/releases/download/v1.0.0/svyWebStorageExample.servoy';
}
