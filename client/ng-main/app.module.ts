
// import { StartupComponent } from "../components/startup/startup";
// import { LoginComponent } from "../components/startup/login/login";
// import { LoginInvalidComponent } from "../components/startup/login/invalid";

import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
//=======================================================================================

//<<<================ Dependencies========================>>>
import './polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CustomFormsModule } from 'ng2-validation'



import { routing } from "../routes/app.routes";
import { AppMainComponent } from "../components/app-main.component";
import { DeskboardComponent } from "../components/deskboard.component";

//=============================================================================================================
//<<<=======================================ADMIN Components==================================================>>>
//=============================================================================================================

//<----------------------Bussiness Details ------------------------>
import { AdminMainComponent } from "../components/Admin/Admin";

//<---------------setting business detail component------------------->

import { SettingsReadComponent } from "../components/Admin/Settings/Settings";

//<----------------------Journal Entries------------------------->

import { AdminJournalEntryReadComponent } from "../components/Admin/JournalEntry/JournalEntry";
import { AdminJournalEntryEditComponent } from "../components/Admin/JournalEntry/JournalEntryEdit";
import { AdminJournalEntryviewComponent } from "../components/Admin/JournalEntry/JournalEntryRead";
import { AdminNewJournalEntryReadComponent } from "../components/Admin/JournalEntry/NewJournalEntry";

//<----------------------Reports---------------------------------->
import { AdminReportsReadComponent } from "../components/Admin/Reports/Reports";

//<----------------------Bussiness Summary ------------------------>
import { SummaryReadComponent } from "../components/Admin/Summary/Summary";

//<----------------------Bussiness Details ------------------------>
import { BusinessDetail } from "../components/Admin/Settings/BusinessDetail";


//===========================Services===========================================================================
import { AdminJournalEntryService } from "../components/Admin/JournalEntry/Service/JournalEntry.service";
import { AdminSummaryService } from "../components/Admin/Summary/Service/Summary.service";
import { AdminReportsService } from "../components/Admin/Reports/Service/Reports.service";
import { SettingsService } from "../components/Admin/Settings/Service/Settings.service";

//=============================================================================================================
//=============================================================================================================
//=============================================================================================================


//=============================================================================================================
//<<<=======================================POINT OF SALE Components==================================================>>>
//=============================================================================================================

//<----------------------POS Main Component ------------------------>
import { POSMainComponent } from "../components/PointOfSale/PointOfSale";

//<----------------------POS Summary Component ------------------------>

import { POSSummaryReadComponent } from "../components/PointOfSale/Summary/Summary";

//<<<<-------------------Customer component---------------------------->>>>>

import { CustomerReadComponent } from "../components/PointOfSale/Customer/Customer";

//<---------------------Sale Quote------------------------->

import { SalesQuoteReadComponent } from "../components/PointOfSale/SalesQuote/SalesQuote";
import { SalesQuoteEditComponent } from "../components/PointOfSale/SalesQuote/SalesQuoteEdit";
import { SalesQuoteviewComponent } from "../components/PointOfSale/SalesQuote/SalesQuoteRead";
import { NewSalesQuoteReadComponent } from "../components/PointOfSale/SalesQuote/NewSalesQuote";

//<---------------------Sale Order------------------------->

import { SalesOrderReadComponent } from "../components/PointOfSale/SalesOrder/SalesOrder";
import { SalesOrderEditComponent } from "../components/PointOfSale/SalesOrder/SalesOrderEdit";
import { SalesOrderviewComponent } from "../components/PointOfSale/SalesOrder/SalesOrderRead";
import { NewSalesOrderReadComponent } from "../components/PointOfSale/SalesOrder/NewSalesOrder";


//<---------------------Sale Invoice------------------------->

import { SalesInvoiceReadComponent } from "../components/PointOfSale/SalesInvoice/SalesInvoice";
import { SalesInvoiceEditComponent } from "../components/PointOfSale/SalesInvoice/SalesInvoiceEdit";
import { SalesInvoiceviewComponent } from "../components/PointOfSale/SalesInvoice/SalesInvoiceRead";
import { NewSalesInvoiceReadComponent } from "../components/PointOfSale/SalesInvoice/NewSalesInvoice";

//<---------------------Delivery Notes------------------------->

import { DeliveryNotesComponent } from "../components/PointOfSale/DeliveryNotes/DeliveryNotes";
import { DeliveryNotesEditComponent } from "../components/PointOfSale/DeliveryNotes/DeliveryNotesEdit";
import { DeliveryNotesviewComponent } from "../components/PointOfSale/DeliveryNotes/DeliveryNotesRead";
import { NewDeliveryNotesReadComponent } from "../components/PointOfSale/DeliveryNotes/NewDeliveryNotes";


//<---------------------Journal Enteries------------------------->

import { POSJournalEntryReadComponent } from "../components/PointOfSale/JournalEntry/JournalEntry";
import { POSJournalEntryEditComponent } from "../components/PointOfSale/JournalEntry/JournalEntryEdit";
import { POSJournalEntryviewComponent } from "../components/PointOfSale/JournalEntry/JournalEntryRead";
import { POSNewJournalEntryReadComponent } from "../components/PointOfSale/JournalEntry/NewJournalEntry";

//<----------------------Reports---------------------------------->
import { PointOfSaleReportsReadComponent } from "../components/PointOfSale/Reports/Reports";

//===========================Services===========================================================================
import { CustomerService } from "../components/PointOfSale/Customer/Service/Customer.service";
import { POSSummaryService } from "../components/PointOfSale/Summary/Service/Summary.service";
import { SalesOrderService } from "../components/PointOfSale/SalesOrder/Service/SalesOrder.service";
import { SalesQuoteService } from "../components/PointOfSale/SalesQuote/Service/SalesQuote.service";
import { SalesInvoiceService } from "../components/PointOfSale/SalesInvoice/Service/SalesInvoice.service";
import { DeliveryNotesService } from "../components/PointOfSale/DeliveryNotes/Service/DeliveryNotes.service";
import { PointOfSaleReportsService } from "../components/PointOfSale/Reports/Service/Reports.service";
import { POSJournalEntryService } from "../components/PointOfSale/JournalEntry/Service/JournalEntry.service";

//=============================================================================================================
//=============================================================================================================
//=============================================================================================================


//=============================================================================================================
//<<<=======================================POINT OF Purchase Components==================================================>>>
//=============================================================================================================


//<----------------------POP Main Component ------------------------>
import { POPMainComponent } from "../components/PointOfPurchase/PointOfPurchase";

//<----------------------POP Summary Component ------------------------>
import { POPSummaryReadComponent } from "../components/PointOfPurchase/Summary/Summary";

//<<<<-------------------Supplier  component---------------------------->>>>>

import { SupplierComponent } from "../components/PointOfPurchase/Supplier/Supplier";

//<---------------------Purchase Order------------------------->

import { PurchaseOrderReadComponent } from "../components/PointOfPurchase/PurchaseOrder/PurchaseOrder";
import { PurchaseOrderEditComponent } from "../components/PointOfPurchase/PurchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderviewComponent } from "../components/PointOfPurchase/PurchaseOrder/PurchaseOrderRead";
import { NewPurchaseOrderReadComponent } from "../components/PointOfPurchase/PurchaseOrder/NewPurchaseOrder";

//<---------------------Purchase Invoice------------------------->

import { PurchaseInvoiceReadComponent } from "../components/PointOfPurchase/PurchaseInvoice/PurchaseInvoice";
import { PurchaseInvoiceEditComponent } from "../components/PointOfPurchase/PurchaseInvoice/PurchaseInvoiceEdit";
import { PurchaseInvoiceviewComponent } from "../components/PointOfPurchase/PurchaseInvoice/PurchaseInvoiceRead";
import { NewPurchaseInvoiceReadComponent } from "../components/PointOfPurchase/PurchaseInvoice/NewPurchaseInvoice";

//<---------------------Purchase Invoice------------------------->

import { InventoryItemReadComponent } from "../components/PointOfPurchase/InventoryItem/InventoryItemRead";

//<----------------------Reports---------------------------------->
import { PointOfPurchaseReportsReadComponent } from "../components/PointOfPurchase/Reports/Reports";


//<---------------------Journal Enteries------------------------->

import { POPJournalEntryReadComponent } from "../components/PointOfPurchase/JournalEntry/JournalEntry";
import { POPJournalEntryEditComponent } from "../components/PointOfPurchase/JournalEntry/JournalEntryEdit";
import { POPJournalEntryviewComponent } from "../components/PointOfPurchase/JournalEntry/JournalEntryRead";
import { POPNewJournalEntryReadComponent } from "../components/PointOfPurchase/JournalEntry/NewJournalEntry";

//===========================Services===========================================================================
import { SupplierService } from "../components/PointOfPurchase/Supplier/Service/Supplier.service";
import { POPSummaryService } from "../components/PointOfPurchase/Summary/Service/Summary.service";

import { InventoryItemService } from "../components/PointOfPurchase/InventoryItem/Service/InventoryItem.service";
import { PurchaseInvoiceService } from "../components/PointOfPurchase/PurchaseInvoice/Service/PurchaseInvoice.service";
import { PurchaseOrderService } from "../components/PointOfPurchase/PurchaseOrder/Service/PurchaseOrder.service";
import { POPJournalEntryService } from "../components/PointOfPurchase/JournalEntry/Service/JournalEntry.service";
import { PointOfPurchaseReportsService } from "../components/PointOfPurchase/Reports/Service/Reports.service";

//=============================================================================================================
//=============================================================================================================
//=============================================================================================================




//=============================================================================================================
//<<<=======================================Human Resource Components==================================================>>>
//=============================================================================================================

//<----------------------HR Main Component ------------------------>
import { HRMainComponent } from "../components/HR/HR";

//<----------------------Reports---------------------------------->
import { HRReportsReadComponent } from "../components/HR/Reports/Reports";

//<---------------------Journal Enteries------------------------->
import { HRJournalEntryReadComponent } from "../components/HR/JournalEntry/JournalEntry";
import { HRJournalEntryEditComponent } from "../components/HR/JournalEntry/JournalEntryEdit";
import { HRJournalEntryviewComponent } from "../components/HR/JournalEntry/JournalEntryRead";
import { HRNewJournalEntryReadComponent } from "../components/HR/JournalEntry/NewJournalEntry";

//<---------------------Employee------------------------->

import { EmployeeReadComponent } from "../components/HR/Employee/Employee";

import { HRSummaryReadComponent } from "../components/HR/Summary/Summary";

import { PaySlipComponent } from "../components/HR/PaySlip/PaySlip";

//===========================Services===========================================================================
import { HRJournalEntryService } from "../components/HR/JournalEntry/Service/JournalEntry.service";
import { EmployeeService } from "../components/HR/Employee/Service/Employee.service";
import { HRReportsService } from "../components/HR/Reports/Service/Reports.service";
import { HRSummaryService } from "../components/HR/Summary/Service/Summary.service";

//=============================================================================================================
//=============================================================================================================
//=============================================================================================================







@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule,
        CustomFormsModule,
        routing,
        RouterModule,
        ReactiveFormsModule,
        // InputTextModule, DataTableModule, ButtonModule, DialogModule, DataListModule, FileUploadModule, GrowlModule
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

        SettingsReadComponent,
        AdminMainComponent,


        AppMainComponent,
        DeskboardComponent,

        AdminJournalEntryReadComponent,
        AdminJournalEntryEditComponent,
        AdminJournalEntryviewComponent,
        AdminNewJournalEntryReadComponent,

        AdminReportsReadComponent,

        SummaryReadComponent,

        BusinessDetail,

        // AdminJournalEntryService,





        //====================END OF ADMIN COMPONENT======================


        //====================POS COMPONENT======================
        POSMainComponent,

        POSSummaryReadComponent,

        CustomerReadComponent,

        // for Sales Qoutes
        SalesQuoteReadComponent,
        SalesQuoteEditComponent,
        SalesQuoteviewComponent,
        NewSalesQuoteReadComponent,

        // for Sales Order
        SalesOrderReadComponent,
        SalesOrderEditComponent,
        SalesOrderviewComponent,
        NewSalesOrderReadComponent,


        // for Sales Invoice
        SalesInvoiceReadComponent,
        SalesInvoiceEditComponent,
        SalesInvoiceviewComponent,
        NewSalesInvoiceReadComponent,


        // for DeliveryNotes
        DeliveryNotesComponent,
        DeliveryNotesEditComponent,
        DeliveryNotesviewComponent,
        NewDeliveryNotesReadComponent,

        POSJournalEntryReadComponent,
        POSJournalEntryEditComponent,
        POSJournalEntryviewComponent,
        POSNewJournalEntryReadComponent,

        PointOfSaleReportsReadComponent,



        //====================END OF POS COMPONENT======================


        //====================POP COMPONENT======================

        POPMainComponent,
        POPSummaryReadComponent,
        SupplierComponent,
        InventoryItemReadComponent,

        // for Purchase Order
        PurchaseOrderReadComponent,
        PurchaseOrderEditComponent,
        PurchaseOrderviewComponent,
        NewPurchaseOrderReadComponent,


        // for Purchase Invoice
        PurchaseInvoiceReadComponent,
        PurchaseInvoiceEditComponent,
        PurchaseInvoiceviewComponent,
        NewPurchaseInvoiceReadComponent,

        // for Journal Entry


        POPJournalEntryReadComponent,
        POPJournalEntryEditComponent,
        POPJournalEntryviewComponent,
        POPNewJournalEntryReadComponent,

        PointOfPurchaseReportsReadComponent,


        //====================END OF POP COMPONENT======================

        //====================HR COMPONENT======================
        HRMainComponent,

        HRSummaryReadComponent,

        PaySlipComponent,
        HRReportsReadComponent,

        HRJournalEntryReadComponent,
        HRJournalEntryEditComponent,
        HRJournalEntryviewComponent,
        HRNewJournalEntryReadComponent,

        EmployeeReadComponent

        //====================END OF HR COMPONENT======================




    ],
    providers: [


        //---------------------Admin---------------
        AdminJournalEntryService, AdminSummaryService,
        AdminReportsService, SettingsService,
        //--------------------end Admin--------------

        //---------------------POP-----------------------
        SupplierService, POPSummaryService, InventoryItemService, PurchaseInvoiceService,
        PurchaseOrderService, POPJournalEntryService, PointOfPurchaseReportsService,

        //-------------------end POP----------------------

        //--------------------POS-------------------------
        CustomerService, POSSummaryService, SalesOrderService, SalesQuoteService,
        SalesInvoiceService, DeliveryNotesService,
        PointOfSaleReportsService, POSJournalEntryService,
        //------------------end POS------------------------

        //--------------------HR-------------------------
        HRJournalEntryService, EmployeeService, HRReportsService, HRSummaryService,
        //--------------------end HR-------------------------
        { provide: LocationStrategy, useClass: HashLocationStrategy },


    ],
    bootstrap: [AppMainComponent]
})

export class AppModule { }
