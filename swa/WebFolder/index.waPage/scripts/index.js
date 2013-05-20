
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var createNewBlankPerson = {};	// @button
	var savePerson = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	createNewBlankPerson.click = function createNewBlankPerson_click (event)// @startlock
	{// @endlock
		$('#personForm').show();
	};// @lock

	savePerson.click = function savePerson_click (event)// @startlock
	{// @endlock
		waf.sources.person.save({
			onSuccess: function(event){
				alert('Congradulations ' + waf.sources.person.fullName + ' you have been entered!');
				$('#personForm').hide();
			},
			onError: function(event){
				alert('Yikes, something went wrong...' + event.error['0'].message);				
			}
		})
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("createNewBlankPerson", "click", createNewBlankPerson.click, "WAF");
	WAF.addListener("savePerson", "click", savePerson.click, "WAF");
// @endregion
};// @endlock
