'use strict';
angular.module('slatwalladmin')
.factory('formService',[
	'$log',
	function(
		$log
	){
		var _forms = {};
		var _pristinePropertyValue = {};
		
		function form(name,object,editing){
			this.name = name;
			this.object= object;
			this.editing = editing;
		};
		
		var formService = {
			setPristinePropertyValue:function(property,value){
				_pristinePropertyValue[property] = value;
			},
			getPristinePropertyValue:function(property){
				return _pristinePropertyValue[property];
			},
			clearForm:function(form){
				$log.debug('clear form');
				$log.debug(form);
				for(key in form){
					if(key.charAt(0) !== '$'){
						console.log(form[key]);
					}
				}
			},
			setForm: function(form){
				_forms[form.$name] = form;
			},
			getForm:function(formName){
				return _forms[formName];
			},
			createForm:function(name,object,editing){
				var _form = new form(
					name,
					object,
					editing
				);
				this.setForm(_form);
				return _form;
			},
			resetForm:function(form){
				for(var key in form){
					if(key.charAt(0) !== '$'){
						if(angular.isDefined(this.getPristinePropertyValue(key))){
							form[key].$setViewValue(this.getPristinePropertyValue(key));
						}else{
							form[key].$setViewValue('');
						}
						form[key].$render();
						
					}
				}
				form.$submitted = false;
				form.$setPristine();
			}
			
		};
		
		return formService;
	}
]);