//collection service is used to maintain the state of the ui

angular.module('slatwalladmin.services')
.factory('workflowService',
[
	'$log',
	'$slatwall',
	'alertService',
function(
	$log,
	$slatwall,
	alertService
){
	//properties
	function _workflow(){
		this.workflowID = "";
		this.activeFlag = false;
		this.workflowName = "";
		this.workflowObject = "";
		this.workflowTriggers = [];
		this.workflowTasks = [];
	}
		
	_workflow.prototype = {
		
	};
	
	var _workflows = {};
	
	return workflowService = {
		newWorkflow:function(){
			return new _workflow;
		},
		formatWorkflow:function(workflowObject){
			var workflow = this.newWorkflow();
			for(key in workflowObject){
				workflow[key] = workflowObject[key];
			}
			return workflow;
		},
		setWorkflow:function(workflow){
			_workflows[workflow.workflowID] = workflow;
		},
		getWorkflow:function(workflowID){
			return _workflows[workflowID];
		}
	};
}]);