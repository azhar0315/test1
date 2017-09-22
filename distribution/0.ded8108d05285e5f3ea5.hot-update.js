webpackHotUpdate(0,{

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// import { StartupComponent } from "../components/startup/startup";
	// import { LoginComponent } from "../components/startup/login/login";
	// import { LoginInvalidComponent } from "../components/startup/login/invalid";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	//=======================================================================================
	//<<<================ Dependencies========================>>>
	__webpack_require__(40);
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(38);
	var router_1 = __webpack_require__(304);
	var http_1 = __webpack_require__(325);
	var forms_1 = __webpack_require__(326);
	var common_1 = __webpack_require__(37);
	var ng2_validation_1 = __webpack_require__(329);
	var app_routes_1 = __webpack_require__(400);
	var app_main_component_1 = __webpack_require__(566);
	var deskboard_component_1 = __webpack_require__(568);
	//=============================================================================================================
	//<<<=======================================ADMIN Components==================================================>>>
	//=============================================================================================================
	//<----------------------Bussiness Details ------------------------>
	var Admin_1 = __webpack_require__(401);
	//<---------------setting business detail component------------------->
	var Settings_1 = __webpack_require__(413);
	//<----------------------Journal Entries------------------------->
	var JournalEntry_1 = __webpack_require__(419);
	var JournalEntryEdit_1 = __webpack_require__(423);
	var JournalEntryRead_1 = __webpack_require__(425);
	var NewJournalEntry_1 = __webpack_require__(427);
	//<----------------------Reports---------------------------------->
	var Reports_1 = __webpack_require__(409);
	//<----------------------Bussiness Summary ------------------------>
	var Summary_1 = __webpack_require__(403);
	//<----------------------Bussiness Details ------------------------>
	var BusinessDetail_1 = __webpack_require__(418);
	//===========================Services===========================================================================
	var JournalEntry_service_1 = __webpack_require__(421);
	var Summary_service_1 = __webpack_require__(405);
	var Reports_service_1 = __webpack_require__(411);
	var Settings_service_1 = __webpack_require__(415);
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	//<<<=======================================POINT OF SALE Components==================================================>>>
	//=============================================================================================================
	//<----------------------POS Main Component ------------------------>
	var PointOfSale_1 = __webpack_require__(476);
	//<----------------------POS Summary Component ------------------------>
	var Summary_2 = __webpack_require__(478);
	//<<<<-------------------Customer component---------------------------->>>>>
	var Customer_1 = __webpack_require__(483);
	//<---------------------Sale Quote------------------------->
	var SalesQuote_1 = __webpack_require__(486);
	var SalesQuoteEdit_1 = __webpack_require__(490);
	var SalesQuoteRead_1 = __webpack_require__(492);
	var NewSalesQuote_1 = __webpack_require__(494);
	//<---------------------Sale Order------------------------->
	var SalesOrder_1 = __webpack_require__(496);
	var SalesOrderEdit_1 = __webpack_require__(500);
	var SalesOrderRead_1 = __webpack_require__(502);
	var NewSalesOrder_1 = __webpack_require__(504);
	//<---------------------Sale Invoice------------------------->
	var SalesInvoice_1 = __webpack_require__(506);
	var SalesInvoiceEdit_1 = __webpack_require__(510);
	var SalesInvoiceRead_1 = __webpack_require__(512);
	var NewSalesInvoice_1 = __webpack_require__(514);
	//<---------------------Delivery Notes------------------------->
	var DeliveryNotes_1 = __webpack_require__(516);
	var DeliveryNotesEdit_1 = __webpack_require__(520);
	var DeliveryNotesRead_1 = __webpack_require__(522);
	var NewDeliveryNotes_1 = __webpack_require__(524);
	//<---------------------Journal Enteries------------------------->
	var JournalEntry_2 = __webpack_require__(526);
	var JournalEntryEdit_2 = __webpack_require__(530);
	var JournalEntryRead_2 = __webpack_require__(532);
	var NewJournalEntry_2 = __webpack_require__(534);
	//<----------------------Reports---------------------------------->
	var Reports_2 = __webpack_require__(536);
	//===========================Services===========================================================================
	var Customer_service_1 = __webpack_require__(484);
	var Summary_service_2 = __webpack_require__(480);
	var SalesOrder_service_1 = __webpack_require__(498);
	var SalesQuote_service_1 = __webpack_require__(488);
	var SalesInvoice_service_1 = __webpack_require__(508);
	var DeliveryNotes_service_1 = __webpack_require__(518);
	var Reports_service_2 = __webpack_require__(538);
	var JournalEntry_service_2 = __webpack_require__(528);
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	//<<<=======================================POINT OF Purchase Components==================================================>>>
	//=============================================================================================================
	//<----------------------POP Main Component ------------------------>
	var PointOfPurchase_1 = __webpack_require__(429);
	//<----------------------POP Summary Component ------------------------>
	var Summary_3 = __webpack_require__(431);
	//<<<<-------------------Supplier  component---------------------------->>>>>
	var Supplier_1 = __webpack_require__(435);
	//<---------------------Purchase Order------------------------->
	var PurchaseOrder_1 = __webpack_require__(442);
	var PurchaseOrderEdit_1 = __webpack_require__(446);
	var PurchaseOrderRead_1 = __webpack_require__(448);
	var NewPurchaseOrder_1 = __webpack_require__(450);
	//<---------------------Purchase Invoice------------------------->
	var PurchaseInvoice_1 = __webpack_require__(452);
	var PurchaseInvoiceEdit_1 = __webpack_require__(456);
	var PurchaseInvoiceRead_1 = __webpack_require__(458);
	var NewPurchaseInvoice_1 = __webpack_require__(460);
	//<---------------------Purchase Invoice------------------------->
	var InventoryItemRead_1 = __webpack_require__(439);
	//<----------------------Reports---------------------------------->
	var Reports_3 = __webpack_require__(472);
	//<---------------------Journal Enteries------------------------->
	var JournalEntry_3 = __webpack_require__(462);
	var JournalEntryEdit_3 = __webpack_require__(466);
	var JournalEntryRead_3 = __webpack_require__(468);
	var NewJournalEntry_3 = __webpack_require__(470);
	//===========================Services===========================================================================
	var Supplier_service_1 = __webpack_require__(437);
	var Summary_service_3 = __webpack_require__(433);
	var InventoryItem_service_1 = __webpack_require__(440);
	var PurchaseInvoice_service_1 = __webpack_require__(454);
	var PurchaseOrder_service_1 = __webpack_require__(444);
	var JournalEntry_service_3 = __webpack_require__(464);
	var Reports_service_3 = __webpack_require__(474);
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	//<<<=======================================Human Resource Components==================================================>>>
	//=============================================================================================================
	//<----------------------HR Main Component ------------------------>
	var HR_1 = __webpack_require__(540);
	//<----------------------Reports---------------------------------->
	var Reports_4 = __webpack_require__(562);
	//<---------------------Journal Enteries------------------------->
	var JournalEntry_4 = __webpack_require__(552);
	var JournalEntryEdit_4 = __webpack_require__(556);
	var JournalEntryRead_4 = __webpack_require__(558);
	var NewJournalEntry_4 = __webpack_require__(560);
	//<---------------------Employee------------------------->
	var Employee_1 = __webpack_require__(546);
	var Summary_4 = __webpack_require__(542);
	var PaySlip_1 = __webpack_require__(550);
	//===========================Services===========================================================================
	var JournalEntry_service_4 = __webpack_require__(554);
	var Employee_service_1 = __webpack_require__(548);
	var Reports_service_4 = __webpack_require__(564);
	var Summary_service_4 = __webpack_require__(544);
	//=============================================================================================================
	//=============================================================================================================
	//=============================================================================================================
	var AppModule = /** @class */ (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule,
	                http_1.HttpModule,
	                forms_1.FormsModule,
	                ng2_validation_1.CustomFormsModule,
	                app_routes_1.routing,
	                router_1.RouterModule,
	                forms_1.ReactiveFormsModule,
	            ],
	            declarations: [
	                // LoginComponent,
	                // LoginInvalidComponent,
	                // StartupComponent,
	                // SystemComponent,
	                // SystemHomeComponent,
	                // DBComponent,
	                // UserComponent,
	                // ConfigComponent
	                // //WelcomeComponent,
	                // //WelcomeComponent,
	                //====================ADMIN COMPONENT======================
	                Settings_1.SettingsReadComponent,
	                Admin_1.AdminMainComponent,
	                app_main_component_1.AppMainComponent,
	                deskboard_component_1.DeskboardComponent,
	                JournalEntry_1.AdminJournalEntryReadComponent,
	                JournalEntryEdit_1.AdminJournalEntryEditComponent,
	                JournalEntryRead_1.AdminJournalEntryviewComponent,
	                NewJournalEntry_1.AdminNewJournalEntryReadComponent,
	                Reports_1.AdminReportsReadComponent,
	                Summary_1.SummaryReadComponent,
	                BusinessDetail_1.BusinessDetail,
	                // AdminJournalEntryService,
	                //====================END OF ADMIN COMPONENT======================
	                //====================POS COMPONENT======================
	                PointOfSale_1.POSMainComponent,
	                Summary_2.POSSummaryReadComponent,
	                Customer_1.CustomerReadComponent,
	                // for Sales Qoutes
	                SalesQuote_1.SalesQuoteReadComponent,
	                SalesQuoteEdit_1.SalesQuoteEditComponent,
	                SalesQuoteRead_1.SalesQuoteviewComponent,
	                NewSalesQuote_1.NewSalesQuoteReadComponent,
	                // for Sales Order
	                SalesOrder_1.SalesOrderReadComponent,
	                SalesOrderEdit_1.SalesOrderEditComponent,
	                SalesOrderRead_1.SalesOrderviewComponent,
	                NewSalesOrder_1.NewSalesOrderReadComponent,
	                // for Sales Invoice
	                SalesInvoice_1.SalesInvoiceReadComponent,
	                SalesInvoiceEdit_1.SalesInvoiceEditComponent,
	                SalesInvoiceRead_1.SalesInvoiceviewComponent,
	                NewSalesInvoice_1.NewSalesInvoiceReadComponent,
	                // for DeliveryNotes
	                DeliveryNotes_1.DeliveryNotesComponent,
	                DeliveryNotesEdit_1.DeliveryNotesEditComponent,
	                DeliveryNotesRead_1.DeliveryNotesviewComponent,
	                NewDeliveryNotes_1.NewDeliveryNotesReadComponent,
	                JournalEntry_2.POSJournalEntryReadComponent,
	                JournalEntryEdit_2.POSJournalEntryEditComponent,
	                JournalEntryRead_2.POSJournalEntryviewComponent,
	                NewJournalEntry_2.POSNewJournalEntryReadComponent,
	                Reports_2.PointOfSaleReportsReadComponent,
	                //====================END OF POS COMPONENT======================
	                //====================POP COMPONENT======================
	                PointOfPurchase_1.POPMainComponent,
	                Summary_3.POPSummaryReadComponent,
	                Supplier_1.SupplierComponent,
	                InventoryItemRead_1.InventoryItemReadComponent,
	                // for Purchase Order
	                PurchaseOrder_1.PurchaseOrderReadComponent,
	                PurchaseOrderEdit_1.PurchaseOrderEditComponent,
	                PurchaseOrderRead_1.PurchaseOrderviewComponent,
	                NewPurchaseOrder_1.NewPurchaseOrderReadComponent,
	                // for Purchase Invoice
	                PurchaseInvoice_1.PurchaseInvoiceReadComponent,
	                PurchaseInvoiceEdit_1.PurchaseInvoiceEditComponent,
	                PurchaseInvoiceRead_1.PurchaseInvoiceviewComponent,
	                NewPurchaseInvoice_1.NewPurchaseInvoiceReadComponent,
	                // for Journal Entry
	                JournalEntry_3.POPJournalEntryReadComponent,
	                JournalEntryEdit_3.POPJournalEntryEditComponent,
	                JournalEntryRead_3.POPJournalEntryviewComponent,
	                NewJournalEntry_3.POPNewJournalEntryReadComponent,
	                Reports_3.PointOfPurchaseReportsReadComponent,
	                //====================END OF POP COMPONENT======================
	                //====================HR COMPONENT======================
	                HR_1.HRMainComponent,
	                Summary_4.HRSummaryReadComponent,
	                PaySlip_1.PaySlipComponent,
	                Reports_4.HRReportsReadComponent,
	                JournalEntry_4.HRJournalEntryReadComponent,
	                JournalEntryEdit_4.HRJournalEntryEditComponent,
	                JournalEntryRead_4.HRJournalEntryviewComponent,
	                NewJournalEntry_4.HRNewJournalEntryReadComponent,
	                Employee_1.EmployeeReadComponent
	                //====================END OF HR COMPONENT======================
	            ],
	            providers: [
	                //---------------------Admin---------------
	                JournalEntry_service_1.AdminJournalEntryService, Summary_service_1.AdminSummaryService,
	                Reports_service_1.AdminReportsService, Settings_service_1.SettingsService,
	                //--------------------end Admin--------------
	                //---------------------POP-----------------------
	                Supplier_service_1.SupplierService, Summary_service_3.POPSummaryService, InventoryItem_service_1.InventoryItemService, PurchaseInvoice_service_1.PurchaseInvoiceService,
	                PurchaseOrder_service_1.PurchaseOrderService, JournalEntry_service_3.POPJournalEntryService, Reports_service_3.PointOfPurchaseReportsService,
	                //-------------------end POP----------------------
	                //--------------------POS-------------------------
	                Customer_service_1.CustomerService, Summary_service_2.POSSummaryService, SalesOrder_service_1.SalesOrderService, SalesQuote_service_1.SalesQuoteService,
	                SalesInvoice_service_1.SalesInvoiceService, DeliveryNotes_service_1.DeliveryNotesService,
	                Reports_service_2.PointOfSaleReportsService, JournalEntry_service_2.POSJournalEntryService,
	                //------------------end POS------------------------
	                //--------------------HR-------------------------
	                JournalEntry_service_4.HRJournalEntryService, Employee_service_1.EmployeeService, Reports_service_4.HRReportsService, Summary_service_4.HRSummaryService,
	                //--------------------end HR-------------------------
	                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
	            ],
	            bootstrap: [app_main_component_1.AppMainComponent]
	        })
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	//import { StartupComponent } from "../components/startup/startup";
	Object.defineProperty(exports, "__esModule", { value: true });
	var router_1 = __webpack_require__(304);
	//====================================================================================================================================
	//====================================================================================================================================
	// /<<=====================Admin Components========================>>
	//Admin main Component
	var Admin_1 = __webpack_require__(401);
	// summary report setting business detail
	var Summary_1 = __webpack_require__(403);
	//Admin Report
	var Reports_1 = __webpack_require__(409);
	// Setting page
	var Settings_1 = __webpack_require__(413);
	//Bussiness Datail
	var BusinessDetail_1 = __webpack_require__(418);
	// Journal Entry components
	var JournalEntry_1 = __webpack_require__(419);
	var JournalEntryEdit_1 = __webpack_require__(423);
	var JournalEntryRead_1 = __webpack_require__(425);
	var NewJournalEntry_1 = __webpack_require__(427);
	//====================================================================================================================================
	//====================================================================================================================================
	//<<=================Point of Purchase Components===================>>
	//Point of Purchase main Component
	var PointOfPurchase_1 = __webpack_require__(429);
	var Summary_2 = __webpack_require__(431);
	var Supplier_1 = __webpack_require__(435); //  add azhar
	//==================Inventory=================
	var InventoryItemRead_1 = __webpack_require__(439);
	// Purchase Order AppMainComponent
	var PurchaseOrder_1 = __webpack_require__(442);
	var PurchaseOrderEdit_1 = __webpack_require__(446);
	var PurchaseOrderRead_1 = __webpack_require__(448);
	var NewPurchaseOrder_1 = __webpack_require__(450);
	// Purchase Invoice AppMainComponent
	var PurchaseInvoice_1 = __webpack_require__(452);
	var PurchaseInvoiceEdit_1 = __webpack_require__(456);
	var PurchaseInvoiceRead_1 = __webpack_require__(458);
	var NewPurchaseInvoice_1 = __webpack_require__(460);
	// Journal Entry components
	var JournalEntry_2 = __webpack_require__(462);
	var JournalEntryEdit_2 = __webpack_require__(466);
	var JournalEntryRead_2 = __webpack_require__(468);
	var NewJournalEntry_2 = __webpack_require__(470);
	// Reports
	var Reports_2 = __webpack_require__(472);
	//====================================================================================================================================
	//====================================================================================================================================
	// /<<=====================Point of Sales Components========================>>
	//Point of Sale main Component
	var PointOfSale_1 = __webpack_require__(476);
	var Summary_3 = __webpack_require__(478);
	var Customer_1 = __webpack_require__(483);
	var SalesQuote_1 = __webpack_require__(486);
	var SalesQuoteEdit_1 = __webpack_require__(490);
	var SalesQuoteRead_1 = __webpack_require__(492);
	var NewSalesQuote_1 = __webpack_require__(494);
	// sales Order AppMainComponent
	var SalesOrder_1 = __webpack_require__(496);
	var SalesOrderEdit_1 = __webpack_require__(500);
	var SalesOrderRead_1 = __webpack_require__(502);
	var NewSalesOrder_1 = __webpack_require__(504);
	// sales Invoice AppMainComponent
	var SalesInvoice_1 = __webpack_require__(506);
	var SalesInvoiceEdit_1 = __webpack_require__(510);
	var SalesInvoiceRead_1 = __webpack_require__(512);
	var NewSalesInvoice_1 = __webpack_require__(514);
	// Delivery Notes AppMainComponent
	var DeliveryNotes_1 = __webpack_require__(516);
	var DeliveryNotesEdit_1 = __webpack_require__(520);
	var DeliveryNotesRead_1 = __webpack_require__(522);
	var NewDeliveryNotes_1 = __webpack_require__(524);
	// Journal Entry components
	var JournalEntry_3 = __webpack_require__(526);
	var JournalEntryEdit_3 = __webpack_require__(530);
	var JournalEntryRead_3 = __webpack_require__(532);
	var NewJournalEntry_3 = __webpack_require__(534);
	// Reports
	var Reports_3 = __webpack_require__(536);
	//==================================================================================================================
	//====================================================================================================================================
	//<<=====================HR Components========================>>
	//HR main Component
	var HR_1 = __webpack_require__(540);
	var Summary_4 = __webpack_require__(542);
	// Employee
	var Employee_1 = __webpack_require__(546);
	// Pay Slip
	var PaySlip_1 = __webpack_require__(550);
	// Journal Entry components
	var JournalEntry_4 = __webpack_require__(552);
	var JournalEntryEdit_4 = __webpack_require__(556);
	var JournalEntryRead_4 = __webpack_require__(558);
	var NewJournalEntry_4 = __webpack_require__(560);
	// Reports
	var Reports_4 = __webpack_require__(562);
	//==================================================================================================================
	//====================================================================================================================================
	var AppRoutes = [
	    // { path: '', redirectTo: '/Login', pathMatch: 'full' },
	    // {
	    //     path: 'Login',
	    //     component: LoginComponent,
	    //     children: [
	    //         { path: '', component: LoginComponent },
	    //         { path: 'login', component: LoginComponent },
	    //         { path: 'logininvalid', component: LoginInvalidComponent },
	    //     ]
	    // },
	    { path: '', redirectTo: '/app-Admin', pathMatch: 'full' },
	    // { path: 'app-Admin', component: AdminMainComponent },
	    {
	        path: 'app-Admin',
	        component: Admin_1.AdminMainComponent,
	        children: [
	            { path: '', component: Summary_1.SummaryReadComponent },
	            { path: 'Summary', component: Summary_1.SummaryReadComponent },
	            { path: 'Reports', component: Reports_1.AdminReportsReadComponent },
	            { path: 'Settings', component: Settings_1.SettingsReadComponent },
	            { path: 'business', component: BusinessDetail_1.BusinessDetail },
	            { path: 'AdminJournalEntry', component: JournalEntry_1.AdminJournalEntryReadComponent },
	            { path: 'AdminJournalEntryEdit/:id', component: JournalEntryEdit_1.AdminJournalEntryEditComponent },
	            { path: 'AdminJournalEntryView/:id', component: JournalEntryRead_1.AdminJournalEntryviewComponent },
	            { path: 'AdminnewJournalEntryread', component: NewJournalEntry_1.AdminNewJournalEntryReadComponent },
	            { path: 'SupplierComponent', component: Supplier_1.SupplierComponent },
	            { path: 'PurchaseOrder', component: PurchaseOrder_1.PurchaseOrderReadComponent },
	            { path: 'purchaseorderedit/:id', component: PurchaseOrderEdit_1.PurchaseOrderEditComponent },
	            { path: 'purchaseorderview/:id', component: PurchaseOrderRead_1.PurchaseOrderviewComponent },
	            { path: 'NewPurchaseOrder', component: NewPurchaseOrder_1.NewPurchaseOrderReadComponent },
	            { path: 'PurchaseInvoice', component: PurchaseInvoice_1.PurchaseInvoiceReadComponent },
	            { path: 'PurchaseInvoiceEdit/:id', component: PurchaseInvoiceEdit_1.PurchaseInvoiceEditComponent },
	            { path: 'PurchaseInvoiceRead/:id', component: PurchaseInvoiceRead_1.PurchaseInvoiceviewComponent },
	            { path: 'NewPurchaseInvoice', component: NewPurchaseInvoice_1.NewPurchaseInvoiceReadComponent },
	            { path: 'InventoryItemRead', component: InventoryItemRead_1.InventoryItemReadComponent },
	            { path: 'Customer', component: Customer_1.CustomerReadComponent },
	            { path: 'SalesQuote', component: SalesQuote_1.SalesQuoteReadComponent },
	            { path: 'SalesQuoteEdit/:id', component: SalesQuoteEdit_1.SalesQuoteEditComponent },
	            { path: 'SalesQuoteRead/:id', component: SalesQuoteRead_1.SalesQuoteviewComponent },
	            { path: 'NewsalesQuote', component: NewSalesQuote_1.NewSalesQuoteReadComponent },
	            { path: 'SalesInvoice', component: SalesInvoice_1.SalesInvoiceReadComponent },
	            { path: 'SalesInvoiceEdit/:id', component: SalesInvoiceEdit_1.SalesInvoiceEditComponent },
	            { path: 'SalesInvoiceRead/:id', component: SalesInvoiceRead_1.SalesInvoiceviewComponent },
	            { path: 'NewSalesInvoice', component: NewSalesInvoice_1.NewSalesInvoiceReadComponent },
	            { path: 'SalesOrder', component: SalesOrder_1.SalesOrderReadComponent },
	            { path: 'SalesOrderEdit/:id', component: SalesOrderEdit_1.SalesOrderEditComponent },
	            { path: 'SalesOrderRead/:id', component: SalesOrderRead_1.SalesOrderviewComponent },
	            { path: 'NewSalesOrder', component: NewSalesOrder_1.NewSalesOrderReadComponent },
	            { path: 'DeliveryNotes', component: DeliveryNotes_1.DeliveryNotesComponent },
	            { path: 'DeliveryNotesEdit/:id', component: DeliveryNotesEdit_1.DeliveryNotesEditComponent },
	            { path: 'DeliveryNotesRead/:id', component: DeliveryNotesRead_1.DeliveryNotesviewComponent },
	            { path: 'NewDeliveryNotes', component: NewDeliveryNotes_1.NewDeliveryNotesReadComponent },
	        ]
	    },
	    { path: '', redirectTo: '/app-POP', pathMatch: 'full' },
	    {
	        path: 'app-POP',
	        component: PointOfPurchase_1.POPMainComponent,
	        children: [
	            { path: '', component: Summary_2.POPSummaryReadComponent },
	            { path: 'POPReport', component: Reports_2.PointOfPurchaseReportsReadComponent },
	            { path: 'POPSummary', component: Summary_3.POSSummaryReadComponent },
	            { path: 'POPJournalEntry', component: JournalEntry_2.POPJournalEntryReadComponent },
	            { path: 'POPJournalEntryEdit/:id', component: JournalEntryEdit_2.POPJournalEntryEditComponent },
	            { path: 'POPJournalEntryRead/:id', component: JournalEntryRead_2.POPJournalEntryviewComponent },
	            { path: 'POPNewJournalEntry', component: NewJournalEntry_2.POPNewJournalEntryReadComponent },
	            { path: 'SupplierComponent', component: Supplier_1.SupplierComponent },
	            { path: 'PurchaseOrder', component: PurchaseOrder_1.PurchaseOrderReadComponent },
	            { path: 'PurchaseOrderEdit/:id', component: PurchaseOrderEdit_1.PurchaseOrderEditComponent },
	            { path: 'PurchaseOrderRead/:id', component: PurchaseOrderRead_1.PurchaseOrderviewComponent },
	            { path: 'NewPurchaseOrder', component: NewPurchaseOrder_1.NewPurchaseOrderReadComponent },
	            { path: 'PurchaseInvoice', component: PurchaseInvoice_1.PurchaseInvoiceReadComponent },
	            { path: 'PurchaseInvoiceEdit/:id', component: PurchaseInvoiceEdit_1.PurchaseInvoiceEditComponent },
	            { path: 'PurchaseInvoiceRead/:id', component: PurchaseInvoiceRead_1.PurchaseInvoiceviewComponent },
	            { path: 'NewPurchaseInvoice', component: NewPurchaseInvoice_1.NewPurchaseInvoiceReadComponent },
	            { path: 'InventoryItemRead', component: InventoryItemRead_1.InventoryItemReadComponent },
	        ]
	    },
	    { path: '', redirectTo: '/app-POS', pathMatch: 'full' },
	    {
	        path: 'app-POS',
	        component: PointOfSale_1.POSMainComponent,
	        children: [
	            { path: '', component: Summary_3.POSSummaryReadComponent },
	            { path: 'POSReport', component: Reports_3.PointOfSaleReportsReadComponent },
	            { path: 'POSSummary', component: Summary_3.POSSummaryReadComponent },
	            { path: 'POSJournalEntry', component: JournalEntry_3.POSJournalEntryReadComponent },
	            { path: 'POSJournalEntryEdit/:id', component: JournalEntryEdit_3.POSJournalEntryEditComponent },
	            { path: 'POSJournalEntryRead/:id', component: JournalEntryRead_3.POSJournalEntryviewComponent },
	            { path: 'POSnewJournalEntry', component: NewJournalEntry_3.POSNewJournalEntryReadComponent },
	            { path: 'Inventory', component: InventoryItemRead_1.InventoryItemReadComponent },
	            { path: 'Customer', component: Customer_1.CustomerReadComponent },
	            { path: 'SalesQuote', component: SalesQuote_1.SalesQuoteReadComponent },
	            { path: 'SalesQuoteEdit/:id', component: SalesQuoteEdit_1.SalesQuoteEditComponent },
	            { path: 'SalesQuoteRead/:id', component: SalesQuoteRead_1.SalesQuoteviewComponent },
	            { path: 'NewSalesQuote', component: NewSalesQuote_1.NewSalesQuoteReadComponent },
	            { path: 'SalesInvoice', component: SalesInvoice_1.SalesInvoiceReadComponent },
	            { path: 'SalesInvoiceEdit/:id', component: SalesInvoiceEdit_1.SalesInvoiceEditComponent },
	            { path: 'SalesInvoiceRead/:id', component: SalesInvoiceRead_1.SalesInvoiceviewComponent },
	            { path: 'NewSalesInvoice', component: NewSalesInvoice_1.NewSalesInvoiceReadComponent },
	            { path: 'SalesOrder', component: SalesOrder_1.SalesOrderReadComponent },
	            { path: 'SalesOrderEdit/:id', component: SalesOrderEdit_1.SalesOrderEditComponent },
	            { path: 'SalesOrderRead/:id', component: SalesOrderRead_1.SalesOrderviewComponent },
	            { path: 'NewSalesOrder', component: NewSalesOrder_1.NewSalesOrderReadComponent },
	            { path: 'DeliveryNotes', component: DeliveryNotes_1.DeliveryNotesComponent },
	            { path: 'DeliveryNotesEdit/:id', component: DeliveryNotesEdit_1.DeliveryNotesEditComponent },
	            { path: 'DeliveryNotesRead/:id', component: DeliveryNotesRead_1.DeliveryNotesviewComponent },
	            { path: 'NewDeliveryNotes', component: NewDeliveryNotes_1.NewDeliveryNotesReadComponent },
	        ]
	    },
	    {
	        path: 'app-HR',
	        component: HR_1.HRMainComponent,
	        children: [
	            { path: '', component: Reports_4.HRReportsReadComponent },
	            { path: 'HRSummary', component: Summary_4.HRSummaryReadComponent },
	            { path: 'HRreport', component: Reports_4.HRReportsReadComponent },
	            { path: 'Employee', component: Employee_1.EmployeeReadComponent },
	            { path: 'PaySlip', component: PaySlip_1.PaySlipComponent },
	            { path: 'HRJournalEntry', component: JournalEntry_4.HRJournalEntryReadComponent },
	            { path: 'HRJournalEntryEdit/:id', component: JournalEntryEdit_4.HRJournalEntryEditComponent },
	            { path: 'HRJournalEntryView/:id', component: JournalEntryRead_4.HRJournalEntryviewComponent },
	            { path: 'HRnewJournalEntryread', component: NewJournalEntry_4.HRNewJournalEntryReadComponent },
	        ]
	    },
	];
	exports.routing = router_1.RouterModule.forRoot(AppRoutes);


/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var DeliveryNotes_interface_1 = __webpack_require__(517);
	var DeliveryNotes_service_1 = __webpack_require__(518);
	var DeliveryNotesComponent = /** @class */ (function () {
	    function DeliveryNotesComponent(repository) {
	        this.repository = repository;
	        this.entries = [];
	        this.entry = new DeliveryNotes_interface_1.DeliveryNotesInterface();
	        this.number = [];
	    }
	    DeliveryNotesComponent.prototype.export = function (value) {
	        var _this = this;
	        this.repository.export(value).then(function (jason) { return _this.jsondata = jason; }).then(function (jason) { return console.log(_this.jsondata); });
	    };
	    DeliveryNotesComponent.prototype.refresh = function () {
	        var _this = this;
	        this.repository.fetchEntriesv1()
	            .then(function (entries) { return _this.entries = entries; });
	        console.log("refreash button is workin with output of ", this.entries);
	    };
	    DeliveryNotesComponent.prototype.find = function () {
	        var _this = this;
	        this.repository.search(this.search)
	            .then(function (entries) { return _this.entries = entries; });
	    };
	    DeliveryNotesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.repository.registerObserver(this);
	        this.repository.fetchEntriesv1()
	            .then(function (entries) { return _this.entries = entries; });
	        // .then((entries: Array<DeliveryNotesInterface>) => this.total = this.entries.length)
	        this.repository.createv1();
	    };
	    DeliveryNotesComponent.prototype.ngAfterViewInit = function () {
	        $.ajax({
	            url: './assets/js/bootstrap-datetimepicker.js',
	            dataType: 'script',
	            async: false
	        });
	        $.ajax({
	            url: './assets/js/light-bootstrap-dashboard.js',
	            dataType: 'script',
	            async: false
	        });
	        $().ready(function () {
	            // Init DatetimePicker
	            demo.initFormExtendedDatetimepickers();
	        });
	    };
	    DeliveryNotesComponent.prototype.ngOnDestroy = function () {
	        this.repository.unregisterObserver(this);
	    };
	    DeliveryNotesComponent.prototype.notify = function () {
	        var _this = this;
	        this.repository.fetchEntriesv1()
	            .then(function (entries) { return _this.entries = entries; });
	    };
	    DeliveryNotesComponent.prototype.delete = function (value) {
	        this.repository.deleteEntry(value);
	    };
	    DeliveryNotesComponent = __decorate([
	        core_1.Component({
	            selector: 'DeliveryNotes',
	            template: __webpack_require__(519),
	            styles: ["\n    input.ng-dirty.ng-invalid { border: solid red 2px; }\n    input.ng-dirty.ng-valid { border: solid green 2px; }\n     .invoice-box{\n        max-width:1600px;\n        margin:auto;\n        padding:30px;\n        border:1px solid #eee;\n        box-shadow:0 0 10px rgba(0, 0, 0, .15);\n        font-size:16px;\n        line-height:24px;\n        font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n        color:#555;\n    }\n    \n    .invoice-box table{\n        width:100%;\n        line-height:inherit;\n        text-align:left;\n    }\n    \n    .invoice-box table td{\n        padding:5px;\n        vertical-align:top;\n    }\n    \n    .invoice-box table tr td:nth-child(2){\n        text-align:right;\n    }\n    \n    .invoice-box table tr.top table td{\n        padding-bottom:20px;\n    }\n    \n    .invoice-box table tr.top table td.title{\n        font-size:45px;\n        line-height:45px;\n        color:#333;\n    }\n    \n    .invoice-box table tr.information table td{\n        padding-bottom:40px;\n    }\n    \n    .invoice-box table tr.heading td{\n        background:#eee;\n        border-bottom:1px solid #ddd;\n        font-weight:bold;\n    }\n    \n    .invoice-box table tr.details td{\n        padding-bottom:20px;\n    }\n    \n    .invoice-box table tr.item td{\n        border-bottom:1px solid #eee;\n    }\n    \n    .invoice-box table tr.item.last td{\n        border-bottom:none;\n    }\n    \n    .invoice-box table tr.total td:nth-child(2){\n        border-top:2px solid #eee;\n        font-weight:bold;\n    }\n    \n    @media only screen and (max-width: 600px) {\n        .invoice-box table tr.top table td{\n            width:100%;\n            display:block;\n            text-align:center;\n        }\n        \n        .invoice-box table tr.information table td{\n            width:100%;\n            display:block;\n            text-align:center;\n        }\n    }\n  "]
	        }),
	        __metadata("design:paramtypes", [DeliveryNotes_service_1.DeliveryNotesService])
	    ], DeliveryNotesComponent);
	    return DeliveryNotesComponent;
	}());
	exports.DeliveryNotesComponent = DeliveryNotesComponent;


/***/ }

})