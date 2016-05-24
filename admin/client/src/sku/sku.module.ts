/// <reference path='../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../typings/tsd.d.ts' />

//modules
import {coremodule} from "../../../../org/Hibachi/client/src/core/core.module";
//services

//controllers

//directives
import {SWPricingManager} from "./components/swpricingmanager";
import {SWImageDetailModalLauncher} from "./components/swimagedetailmodallauncher";
import {SWAddSkuPriceModalLauncher} from "./components/swaddskupricemodallauncher";
import {SWSkuStockAdjustmentModalLauncher} from "./components/swskustockadjustmentmodallauncher";
import {SWDefaultSkuRadio} from "./components/swdefaultskuradio"; 
import {SWSkuPriceEdit} from "./components/swskupriceedit";
import {SWSkuPricesEdit} from "./components/swskupricesedit";
import {SWSkuThumbnail} from "./components/swskuthumbnail";
//filters


var skumodule = angular.module('hibachi.sku',[coremodule.name]).config(()=>{
})
//constants
.constant('skuPartialsPath','sku/components/')
//services

//controllers

//directives
.directive('swPricingManager', SWPricingManager.Factory())
.directive('swImageDetailModalLauncher', SWImageDetailModalLauncher.Factory())
.directive('swAddSkuPriceModalLauncher', SWAddSkuPriceModalLauncher.Factory()) 
.directive('swSkuStockAdjustmentModalLauncher', SWSkuStockAdjustmentModalLauncher.Factory())
.directive('swDefaultSkuRadio', SWDefaultSkuRadio.Factory())
.directive('swSkuPriceEdit', SWSkuPriceEdit.Factory())
.directive('swSkuPricesEdit', SWSkuPricesEdit.Factory())
.directive('swSkuThumbnail', SWSkuThumbnail.Factory())
//filters

;
export{
	skumodule
}