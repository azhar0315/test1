//import { StartupComponent } from "../components/startup/startup";

// import { LoginComponent } from "../components/startup/login/login";
// import { LoginInvalidComponent } from "../components/startup/login/invalid";


// <<=================Application Dependecies Components===================>>

import { Router } from '@angular/router';

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
// import { DeskboardComponent } from "../components/deskboard.component";
import { AppMainComponent } from "../components/app-main.component";




//====================================================================================================================================
//====================================================================================================================================



// /<<=====================Admin Components========================>>

//Admin main Component
import { AdminMainComponent } from "../components/Admin/Admin";

// summary report setting business detail
import { SummaryReadComponent } from "../components/Admin/Summary/Summary";

//Admin Report
import { AdminReportsReadComponent } from "../components/Admin/Reports/Reports";

// Setting page
import { SettingsReadComponent } from "../components/Admin/Settings/Settings";

//Bussiness Datail
import { BusinessDetail } from "../components/Admin/Settings/BusinessDetail";



// Journal Entry components
import { AdminJournalEntryReadComponent } from "../components/Admin/JournalEntry/JournalEntry";
import { AdminJournalEntryEditComponent } from "../components/Admin/JournalEntry/JournalEntryEdit";
import { AdminJournalEntryviewComponent } from "../components/Admin/JournalEntry/JournalEntryRead";
import { AdminNewJournalEntryReadComponent } from "../components/Admin/JournalEntry/NewJournalEntry";














//====================================================================================================================================
//====================================================================================================================================


//<<=================Point of Purchase Components===================>>

//Point of Purchase main Component
import { POPMainComponent } from "../components/PointOfPurchase/PointOfPurchase";

import { POPSummaryReadComponent } from "../components/PointOfPurchase/Summary/Summary";

import { SupplierComponent } from "../components/PointOfPurchase/Supplier/Supplier";//  add azhar

//==================Inventory=================

import { InventoryItemReadComponent } from "../components/PointOfPurchase/InventoryItem/InventoryItemRead";

// Purchase Order AppMainComponent
import { PurchaseOrderReadComponent } from "../components/PointOfPurchase/PurchaseOrder/PurchaseOrder";
import { PurchaseOrderEditComponent } from "../components/PointOfPurchase/PurchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderviewComponent } from "../components/PointOfPurchase/PurchaseOrder/PurchaseOrderRead";
import { NewPurchaseOrderReadComponent } from "../components/PointOfPurchase/PurchaseOrder/NewPurchaseOrder";

// Purchase Invoice AppMainComponent
import { PurchaseInvoiceReadComponent } from "../components//PointOfPurchase/PurchaseInvoice/PurchaseInvoice";
import { PurchaseInvoiceEditComponent } from "../components//PointOfPurchase/PurchaseInvoice/PurchaseInvoiceEdit";
import { PurchaseInvoiceviewComponent } from "../components//PointOfPurchase/PurchaseInvoice/PurchaseInvoiceRead";
import { NewPurchaseInvoiceReadComponent } from "../components/PointOfPurchase/PurchaseInvoice/NewPurchaseInvoice";

// Journal Entry components
import { POPJournalEntryReadComponent } from "../components/PointOfPurchase/JournalEntry/JournalEntry";
import { POPJournalEntryEditComponent } from "../components/PointOfPurchase/JournalEntry/JournalEntryEdit";
import { POPJournalEntryviewComponent } from "../components/PointOfPurchase/JournalEntry/JournalEntryRead";
import { POPNewJournalEntryReadComponent } from "../components/PointOfPurchase/JournalEntry/NewJournalEntry";


// Reports
import { PointOfPurchaseReportsReadComponent } from "../components/PointOfPurchase/Reports/Reports";

//====================================================================================================================================
//====================================================================================================================================




// /<<=====================Point of Sales Components========================>>

//Point of Sale main Component
import { POSMainComponent } from "../components/PointOfSale/PointOfSale";

import { POSSummaryReadComponent } from "../components/PointOfSale/Summary/Summary";

import { CustomerReadComponent } from "../components/PointOfSale/Customer/Customer";

import { SalesQuoteReadComponent } from "../components/PointOfSale/SalesQuote/SalesQuote";
import { SalesQuoteEditComponent } from "../components/PointOfSale/SalesQuote/SalesQuoteEdit";
import { SalesQuoteviewComponent } from "../components/PointOfSale/SalesQuote/SalesQuoteRead";
import { NewSalesQuoteReadComponent } from "../components/PointOfSale/SalesQuote/NewSalesQuote";

// sales Order AppMainComponent
import { SalesOrderReadComponent } from "../components/PointOfSale/SalesOrder/SalesOrder";
import { SalesOrderEditComponent } from "../components/PointOfSale/SalesOrder/SalesOrderEdit";
import { SalesOrderviewComponent } from "../components/PointOfSale/SalesOrder/SalesOrderRead";
import { NewSalesOrderReadComponent } from "../components/PointOfSale/SalesOrder/NewSalesOrder";

// sales Invoice AppMainComponent
import { SalesInvoiceReadComponent } from "../components/PointOfSale/SalesInvoice/SalesInvoice";
import { SalesInvoiceEditComponent } from "../components/PointOfSale/SalesInvoice/SalesInvoiceEdit";
import { SalesInvoiceviewComponent } from "../components/PointOfSale/SalesInvoice/SalesInvoiceRead";
import { NewSalesInvoiceReadComponent } from "../components/PointOfSale/SalesInvoice/NewSalesInvoice";

// Delivery Notes AppMainComponent
import { DeliveryNotesComponent } from "../components/PointOfSale/DeliveryNotes/DeliveryNotes";
import { DeliveryNotesEditComponent } from "../components/PointOfSale/DeliveryNotes/DeliveryNotesEdit";
import { DeliveryNotesviewComponent } from "../components/PointOfSale/DeliveryNotes/DeliveryNotesRead";
import { NewDeliveryNotesReadComponent } from "../components/PointOfSale/DeliveryNotes/NewDeliveryNotes";

// Journal Entry components
import { POSJournalEntryReadComponent } from "../components/PointOfSale/JournalEntry/JournalEntry";
import { POSJournalEntryEditComponent } from "../components/PointOfSale/JournalEntry/JournalEntryEdit";
import { POSJournalEntryviewComponent } from "../components/PointOfSale/JournalEntry/JournalEntryRead";
import { POSNewJournalEntryReadComponent } from "../components/PointOfSale/JournalEntry/NewJournalEntry";

// Reports
import { PointOfSaleReportsReadComponent } from "../components/PointOfSale/Reports/Reports";



//==================================================================================================================
//====================================================================================================================================


//<<=====================HR Components========================>>



//HR main Component
import { HRMainComponent } from "../components/HR/HR";

import { HRSummaryReadComponent } from "../components/HR/Summary/Summary";

// Employee

import { EmployeeReadComponent } from "../components/HR/Employee/Employee";
// Pay Slip

import { PaySlipComponent } from "../components/HR/PaySlip/PaySlip";
// Journal Entry components
import { HRJournalEntryReadComponent } from "../components/HR/JournalEntry/JournalEntry";
import { HRJournalEntryEditComponent } from "../components/HR/JournalEntry/JournalEntryEdit";
import { HRJournalEntryviewComponent } from "../components/HR/JournalEntry/JournalEntryRead";
import { HRNewJournalEntryReadComponent } from "../components/HR/JournalEntry/NewJournalEntry";

// Reports
import { HRReportsReadComponent } from "../components/HR/Reports/Reports";





//==================================================================================================================
//====================================================================================================================================






const AppRoutes: Routes = [

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
        component: AdminMainComponent,
        children: [
            { path: '', component: SummaryReadComponent },
            { path: 'Summary', component: SummaryReadComponent },
            { path: 'Reports', component: AdminReportsReadComponent },
            { path: 'Settings', component: SettingsReadComponent },

            { path: 'business', component: BusinessDetail },

            { path: 'AdminJournalEntry', component: AdminJournalEntryReadComponent },
            { path: 'AdminJournalEntryEdit/:id', component: AdminJournalEntryEditComponent },
            { path: 'AdminJournalEntryView/:id', component: AdminJournalEntryviewComponent },
            { path: 'AdminnewJournalEntryread', component: AdminNewJournalEntryReadComponent },

            { path: 'SupplierComponent', component: SupplierComponent },

            { path: 'PurchaseOrder', component: PurchaseOrderReadComponent },
            { path: 'purchaseorderedit/:id', component: PurchaseOrderEditComponent },
            { path: 'purchaseorderview/:id', component: PurchaseOrderviewComponent },
            { path: 'NewPurchaseOrder', component: NewPurchaseOrderReadComponent },

            { path: 'PurchaseInvoice', component: PurchaseInvoiceReadComponent },
            { path: 'PurchaseInvoiceEdit/:id', component: PurchaseInvoiceEditComponent },
            { path: 'PurchaseInvoiceRead/:id', component: PurchaseInvoiceviewComponent },
            { path: 'NewPurchaseInvoice', component: NewPurchaseInvoiceReadComponent },


            { path: 'InventoryItemRead', component: InventoryItemReadComponent },


            { path: 'Customer', component: CustomerReadComponent },
            { path: 'SalesQuote', component: SalesQuoteReadComponent },
            { path: 'SalesQuoteEdit/:id', component: SalesQuoteEditComponent },
            { path: 'SalesQuoteRead/:id', component: SalesQuoteviewComponent },
            { path: 'NewsalesQuote', component: NewSalesQuoteReadComponent },

            { path: 'SalesInvoice', component: SalesInvoiceReadComponent },
            { path: 'SalesInvoiceEdit/:id', component: SalesInvoiceEditComponent },
            { path: 'SalesInvoiceRead/:id', component: SalesInvoiceviewComponent },
            { path: 'NewSalesInvoice', component: NewSalesInvoiceReadComponent },

            { path: 'SalesOrder', component: SalesOrderReadComponent },
            { path: 'SalesOrderEdit/:id', component: SalesOrderEditComponent },
            { path: 'SalesOrderRead/:id', component: SalesOrderviewComponent },
            { path: 'NewSalesOrder', component: NewSalesOrderReadComponent },

            { path: 'DeliveryNotes', component: DeliveryNotesComponent },
            { path: 'DeliveryNotesEdit/:id', component: DeliveryNotesEditComponent },
            { path: 'DeliveryNotesRead/:id', component: DeliveryNotesviewComponent },
            { path: 'NewDeliveryNotes', component: NewDeliveryNotesReadComponent },



        ]
    },
    { path: '', redirectTo: '/app-POP', pathMatch: 'full' },
    {
        path: 'app-POP',
        component: POPMainComponent,
        children: [
            { path: '', component: POPSummaryReadComponent },
            { path: 'POPReport', component: PointOfPurchaseReportsReadComponent },

            { path: 'POPSummary', component: POSSummaryReadComponent },
            { path: 'POPJournalEntry', component: POPJournalEntryReadComponent },
            { path: 'POPJournalEntryEdit/:id', component: POPJournalEntryEditComponent },
            { path: 'POPJournalEntryRead/:id', component: POPJournalEntryviewComponent },
            { path: 'POPNewJournalEntry', component: POPNewJournalEntryReadComponent },

            { path: 'SupplierComponent', component: SupplierComponent },

            { path: 'PurchaseOrder', component: PurchaseOrderReadComponent },
            { path: 'PurchaseOrderEdit/:id', component: PurchaseOrderEditComponent },
            { path: 'PurchaseOrderRead/:id', component: PurchaseOrderviewComponent },
            { path: 'NewPurchaseOrder', component: NewPurchaseOrderReadComponent },

            { path: 'PurchaseInvoice', component: PurchaseInvoiceReadComponent },
            { path: 'PurchaseInvoiceEdit/:id', component: PurchaseInvoiceEditComponent },
            { path: 'PurchaseInvoiceRead/:id', component: PurchaseInvoiceviewComponent },
            { path: 'NewPurchaseInvoice', component: NewPurchaseInvoiceReadComponent },

            { path: 'InventoryItemRead', component: InventoryItemReadComponent },


        ]
    },

    { path: '', redirectTo: '/app-POS', pathMatch: 'full' },
    {
        path: 'app-POS',
        component: POSMainComponent,
        children: [
            { path: '', component: POSSummaryReadComponent },
            { path: 'POSReport', component: PointOfSaleReportsReadComponent },

            { path: 'POSSummary', component: POSSummaryReadComponent },
            { path: 'POSJournalEntry', component: POSJournalEntryReadComponent },
            { path: 'POSJournalEntryEdit/:id', component: POSJournalEntryEditComponent },
            { path: 'POSJournalEntryRead/:id', component: POSJournalEntryviewComponent },
            { path: 'POSnewJournalEntry', component: POSNewJournalEntryReadComponent },

            { path: 'Inventory', component: InventoryItemReadComponent },

            { path: 'Customer', component: CustomerReadComponent },

            { path: 'SalesQuote', component: SalesQuoteReadComponent },
            { path: 'SalesQuoteEdit/:id', component: SalesQuoteEditComponent },
            { path: 'SalesQuoteRead/:id', component: SalesQuoteviewComponent },
            { path: 'NewSalesQuote', component: NewSalesQuoteReadComponent },

            { path: 'SalesInvoice', component: SalesInvoiceReadComponent },
            { path: 'SalesInvoiceEdit/:id', component: SalesInvoiceEditComponent },
            { path: 'SalesInvoiceRead/:id', component: SalesInvoiceviewComponent },
            { path: 'NewSalesInvoice', component: NewSalesInvoiceReadComponent },

            { path: 'SalesOrder', component: SalesOrderReadComponent },
            { path: 'SalesOrderEdit/:id', component: SalesOrderEditComponent },
            { path: 'SalesOrderRead/:id', component: SalesOrderviewComponent },
            { path: 'NewSalesOrder', component: NewSalesOrderReadComponent },

            { path: 'DeliveryNotes', component: DeliveryNotesComponent },
            { path: 'DeliveryNotesEdit/:id', component: DeliveryNotesEditComponent },
            { path: 'DeliveryNotesRead/:id', component: DeliveryNotesviewComponent },
            { path: 'NewDeliveryNotes', component: NewDeliveryNotesReadComponent },


        ]
    },


    {
        path: 'app-HR',
        component: HRMainComponent,
        children: [
            { path: '', component: HRReportsReadComponent },
            { path: 'HRSummary', component: HRSummaryReadComponent },
            { path: 'HRreport', component: HRReportsReadComponent },

            { path: 'Employee', component: EmployeeReadComponent },

            { path: 'PaySlip', component: PaySlipComponent },

            { path: 'HRJournalEntry', component: HRJournalEntryReadComponent },
            { path: 'HRJournalEntryEdit/:id', component: HRJournalEntryEditComponent },
            { path: 'HRJournalEntryView/:id', component: HRJournalEntryviewComponent },
            { path: 'HRnewJournalEntryread', component: HRNewJournalEntryReadComponent },


        ]
    },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
