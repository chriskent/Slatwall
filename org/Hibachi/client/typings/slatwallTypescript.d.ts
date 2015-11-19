//{	
/// <reference path="../src/bootstrap.ts" />	
/// <reference path="../src/vendor.ts" />	
/// <reference path="../src/hibachi/hibachi.module.ts" />	
/// <reference path="../src/ngslatwall/ngslatwall.module.ts" />	
/// <reference path="../src/ngslatwallmodel/ngslatwallmodel.module.ts" />	
/// <reference path="../src/slatwall/slatwalladmin.module.ts" />	
/// <reference path="../src/hibachi/alert/alert.module.ts" />	
/// <reference path="../src/hibachi/collection/collection.module.ts" />	
/// <reference path="../src/hibachi/core/core.module.ts" />	
/// <reference path="../src/hibachi/dialog/dialog.module.ts" />	
/// <reference path="../src/hibachi/logger/logger.module.ts" />	
/// <reference path="../src/hibachi/pagination/pagination.module.ts" />	
/// <reference path="../src/hibachi/workflow/workflow.module.ts" />	
/// <reference path="../src/ngslatwall/services/slatwallservice.ts" />	
/// <reference path="../src/slatwall/filters/entityrbkey.ts" />	
/// <reference path="../src/slatwall/filters/swcurrency.ts" />	
/// <reference path="../src/slatwall/services/slatwallInterceptor.ts" />	
/// <reference path="../src/hibachi/alert/model/alert.ts" />	
/// <reference path="../src/hibachi/alert/service/alertservice.ts" />	
/// <reference path="../src/hibachi/collection/controllers/collections.ts" />	
/// <reference path="../src/hibachi/collection/components/swaddfilterbuttons.ts" />	
/// <reference path="../src/hibachi/collection/components/swcollection.ts" />	
/// <reference path="../src/hibachi/collection/components/swcollectiontable.ts" />	
/// <reference path="../src/hibachi/collection/components/swcolumnitem.ts" />	
/// <reference path="../src/hibachi/collection/components/swconditioncriteria.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteria.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteriaboolean.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteriadate.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteriamanytomany.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteriamanytoone.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriterianumber.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteriaonetomany.ts" />	
/// <reference path="../src/hibachi/collection/components/swcriteriastring.ts" />	
/// <reference path="../src/hibachi/collection/components/swdisplayitem.ts" />	
/// <reference path="../src/hibachi/collection/components/swdisplayoptions.ts" />	
/// <reference path="../src/hibachi/collection/components/sweditfilteritem.ts" />	
/// <reference path="../src/hibachi/collection/components/swfiltergroupitem.ts" />	
/// <reference path="../src/hibachi/collection/components/swfiltergroups.ts" />	
/// <reference path="../src/hibachi/collection/components/swfilteritem.ts" />	
/// <reference path="../src/hibachi/collection/services/collectionconfigservice.ts" />	
/// <reference path="../src/hibachi/collection/services/collectionservice.ts" />	
/// <reference path="../src/hibachi/core/entity/swdetail.ts" />	
/// <reference path="../src/hibachi/core/entity/swlist.ts" />	
/// <reference path="../src/hibachi/core/components/swactioncaller.ts" />	
/// <reference path="../src/hibachi/core/components/swactioncallerdropdown.ts" />	
/// <reference path="../src/hibachi/core/components/swclickoutside.ts" />	
/// <reference path="../src/hibachi/core/components/swcolumnsorter.ts" />	
/// <reference path="../src/hibachi/core/components/swconfirm.ts" />	
/// <reference path="../src/hibachi/core/components/swdirective.ts" />	
/// <reference path="../src/hibachi/core/components/swentityactionbar.ts" />	
/// <reference path="../src/hibachi/core/components/swentityactionbarbuttongroup.ts" />	
/// <reference path="../src/hibachi/core/components/swexpandablerecord.ts" />	
/// <reference path="../src/hibachi/core/components/swexportaction.ts" />	
/// <reference path="../src/hibachi/core/components/swfindhref.ts" />	
/// <reference path="../src/hibachi/core/components/swheaderwithtabs.ts" />	
/// <reference path="../src/hibachi/core/components/swhref.ts" />	
/// <reference path="../src/hibachi/core/components/swlistingcolumn.ts" />	
/// <reference path="../src/hibachi/core/components/swlistingdisplay.ts" />	
/// <reference path="../src/hibachi/core/components/swloading.ts" />	
/// <reference path="../src/hibachi/core/components/swlogin.ts" />	
/// <reference path="../src/hibachi/core/components/swnumbersonly.ts" />	
/// <reference path="../src/hibachi/core/components/swoptions.ts" />	
/// <reference path="../src/hibachi/core/components/swprocesscaller.ts" />	
/// <reference path="../src/hibachi/core/components/swpropertydisplay.ts" />	
/// <reference path="../src/hibachi/core/components/swrbkey.ts" />	
/// <reference path="../src/hibachi/core/components/swresizedimage.ts" />	
/// <reference path="../src/hibachi/core/components/swscrolltrigger.ts" />	
/// <reference path="../src/hibachi/core/components/swselection.ts" />	
/// <reference path="../src/hibachi/core/components/swsortable.ts" />	
/// <reference path="../src/hibachi/core/components/swtypeaheadsearch.ts" />	
/// <reference path="../src/hibachi/core/filters/percentage.ts" />	
/// <reference path="../src/hibachi/core/services/baseservice.ts" />	
/// <reference path="../src/hibachi/core/services/formservice.ts" />	
/// <reference path="../src/hibachi/core/services/metadataservice.ts" />	
/// <reference path="../src/hibachi/core/services/observerservice.ts" />	
/// <reference path="../src/hibachi/core/services/selectionservice.ts" />	
/// <reference path="../src/hibachi/core/services/utilityservice.ts" />	
/// <reference path="../src/hibachi/core/form/swform.ts" />	
/// <reference path="../src/hibachi/core/form/swformfield.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldjson.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldnumber.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldpassword.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldradio.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldsearchselect.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldselect.ts" />	
/// <reference path="../src/hibachi/core/form/swformfieldtext.ts" />	
/// <reference path="../src/hibachi/core/form/swformregistrar.ts" />	
/// <reference path="../src/hibachi/core/form/swinput.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidate.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationdatatype.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationeq.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationgte.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationlte.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationmaxlength.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationmaxvalue.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationminlength.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationminvalue.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationneq.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationnumeric.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationregex.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationrequired.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationunique.ts" />	
/// <reference path="../src/hibachi/core/validation/swvalidationuniqueornull.ts" />	
/// <reference path="../src/hibachi/dialog/model/pagedialog.ts" />	
/// <reference path="../src/hibachi/dialog/services/dialogservice.ts" />	
/// <reference path="../src/hibachi/giftcard/model/giftCard.ts" />	
/// <reference path="../src/hibachi/giftcard/model/giftRecipient.ts" />	
/// <reference path="../src/hibachi/logger/services/exceptionhandler.ts" />	
/// <reference path="../src/hibachi/pagination/components/swpaginationbar.ts" />	
/// <reference path="../src/hibachi/pagination/services/paginationservice.ts" />	
/// <reference path="../src/hibachi/workflow/components/swadmincreatesuperuser.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowbasic.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowcondition.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowconditiongroupitem.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowconditiongroups.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowtask.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowtaskactions.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowtasks.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowtrigger.ts" />	
/// <reference path="../src/hibachi/workflow/components/swworkflowtriggers.ts" />	
/// <reference path="../src/hibachi/workflow/services/workflowconditionservice.ts" />	
//}