/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F82BE3CA-058D-4C3E-8E80-5A0AED75CC78"}
 */
var btnColorPreference = "btn-default";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE2F47FE-3D2B-404F-AD65-5FBE142D60C8"}
 */
var btnSizePreference = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4A05627-5044-4E2C-AC49-20732AF79291",variableType:8}
 */
var keyCount

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FB4302E-BA62-4102-A186-92DF6F5AB47E"}
 */
var searchText = null;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DFFBDEF9-646F-41EA-9240-4C3647713B83"}
 */
var KEY_SEARCHTEXT = "key.searchtext";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF9520FE-6012-4CD1-A726-97D5B84369E0"}
 */
var KEY_BTNCOLOR = "key.btncolor";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"943A2DC5-1F21-4100-914E-0AD5A3D78DF6"}
 */
var KEY_BTNSIZE = "key.btnsize";



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"BE57E09C-BA8C-421E-A47F-1F785BD22CC4"}
 */
function onShow(firstShow, event) {
	if (firstShow) {
		getItemSearchText(event);
		getItemButtonStyle(event);
	}
}



/**
 * @properties={typeid:24,uuid:"CE1822CD-AF90-499A-BDA4-780562687F24"}
 */
function updateUI() {



}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"033D7919-847E-47AF-BF38-CFFCFD532678"}
 */
function getItemSearchText(event) {
	searchText = plugins.webstorageLocalstorage.getItem(KEY_SEARCHTEXT)
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CDBB5BDB-5CA1-421B-A477-6371EF939E33"}
 */
function getItemButtonStyle(event) {
	elements.btnStyled.removeStyleClass(btnColorPreference)
	elements.btnStyled.removeStyleClass(btnSizePreference)

	btnColorPreference = plugins.webstorageLocalstorage.getItem(KEY_BTNCOLOR);
	btnSizePreference = plugins.webstorageLocalstorage.getItem(KEY_BTNSIZE);
	
	elements.btnStyled.addStyleClass(btnColorPreference)
	elements.btnStyled.addStyleClass(btnSizePreference)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FB191DED-588E-4E83-A875-424C492911C6"}
 */
function setItemSearchText(event) {
	plugins.webstorageLocalstorage.setItem(KEY_SEARCHTEXT, searchText)
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"5FC34098-88D9-43A9-8CFE-405EA9B3DBA6"}
 */
function setItemButtonStyle(event) {
	plugins.webstorageLocalstorage.setItem(KEY_BTNCOLOR, btnColorPreference)
	plugins.webstorageLocalstorage.setItem(KEY_BTNSIZE, btnSizePreference)
}


/**
 * @protected
 * @param result
 *
 * @properties={typeid:24,uuid:"27BDE048-2AB2-479F-BC21-F111B4642513"}
 */
function removeItemSearchText(result) {
	plugins.webstorageLocalstorage.removeItem(KEY_SEARCHTEXT);
}

/**
 * @protected
 * @param result
 *
 * @properties={typeid:24,uuid:"CECEF744-60DF-4989-9EA1-5C174C4B2BA9"}
 */
function removeItemButtonStyle(result) {
	plugins.webstorageLocalstorage.removeItem(KEY_BTNCOLOR);
	plugins.webstorageLocalstorage.removeItem(KEY_BTNSIZE);

}

/**
 * @param result
 *
 * @properties={typeid:24,uuid:"90D36441-0582-4337-803B-7DF84DBBC9E8"}
 */
function getLocalStorageCount(result) {
	keyCount = plugins.webstorageLocalstorage.getLength();
}

/**
 * @param result
 *
 * @properties={typeid:24,uuid:"C9B8E362-C201-4366-BE91-F7E4212983E3"}
 */
function clearAll(result) {
	plugins.webstorageLocalstorage.clear()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"0F0ACDC8-C104-4581-A9C4-8B106EDC5BE4"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.btnStyled.removeStyleClass(oldValue)
	elements.btnStyled.addStyleClass(newValue)
	return true
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"95EBF3E5-E0CE-4004-B4E3-C39189DBD437"}
 */
function onAction(event) {
	application.closeSolution();
}
