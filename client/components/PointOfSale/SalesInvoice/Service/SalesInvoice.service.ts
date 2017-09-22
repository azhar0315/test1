//find and replace
//CrudService
//SalesInvoiceObserver
//SalesInvoiceInterface
//../interface/crud.interface
//../observables/crud.observer
// if (doc.view === "SalesInvoice") {
// _id: '_design/SalesInvoice',    
//    key: 'view2',




import { SalesInvoiceInterface, items } from "./SalesInvoice.interface";
// import {SalesInvoiceInterface} from "../interface/SalesInvoice.interface";
// import {View2Interface} from "../interface/view2.interface";
import { SalesInvoiceObserver } from "./SalesInvoice.observer";
import { CustomerInterface } from '../../Customer/Service/Customer.interface';
import { InventoryItemInterface } from '../../InventoryItem/Service/InventoryItem.interface';


declare let PouchDB: any;
declare let emit: Function;


export class SalesInvoiceService {

    private pouchDb: any;
    private pouchDbEventEmitter: any;
    private pouchDbSyncEventEmitter: any;
    private observer: Array<SalesInvoiceObserver> = [];
    pager;

    constructor() {
        this.pouchDb = new PouchDB('crud-data');

        this.pouchDbEventEmitter = this.pouchDb.changes({
            since: 'now',
            live: true
        }).on('change', (event) => this.notifyObserver());

        // this.pouchDbSyncEventEmitter = this.pouchDb.sync('http://localhost:5984/Crud-data', {
        //     live: true,
        //     retry: true
        // });
    }

    registerObserver(observer: SalesInvoiceObserver): void {
        if (!this.observer.includes(observer)) {
            this.observer.push(observer);
        }
    }


    export(value): Promise<Array<SalesInvoiceInterface>> {
        if (value === "Json") {
            console.log("3")
            return new Promise((resolve, reject) => {
                let mapFunc: Function = (doc: any) => emit(doc.view);

                let options: Object = {
                    key: 'SalesQuote',
                    include_docs: true
                };

                this.pouchDb.query(mapFunc, options)
                    .then((result: any) => {
                        let jason = JSON.stringify(result);
                        resolve(jason);

                        // let myJsonString = JSON.stringify(entries);

                        // console.log(entries);
                        // console.log (result);
                        // console.log (myJsonString);
                        // var xls = json2xls(myJsonString);

                        // fs.writeFileSync('data.xlsx', xls, 'binary');
                    })
                    .catch(reject);
            });
        }
        if (value === "Excel") {
            console.log("2")

        }
        if (value === "Pdf") {
            console.log("1")

        }
    }

    unregisterObserver(observer: SalesInvoiceObserver): void {
        var index: number = this.observer.indexOf(observer);
        if (index > -1) {
            this.observer.splice(index, 1);
        }
    }

    notifyObserver(): void {
        this.observer.forEach((observer: SalesInvoiceObserver) => observer.notify());
    }

    createv1() {
        let SalesInvoice: Object = {
            _id: '_design/SalesInvoice',
            views: {
                index: {
                    map: function mapFun(doc) {
                        if (doc.view === "SalesInvoice") {
                            emit(doc.view);
                        }
                    }.toString()
                }
            }
        };
        return new Promise((resolve, reject) => {

            // this.pouchDb.put(SalesInvoice)
            // save the design doc
            this.pouchDb.put(SalesInvoice).catch(function (err) {
                if (err.name !== 'conflict') {
                    throw err;
                }
                // ignore if doc already exists
            })
                .catch(reject);
        });
    }
    fetchEntriesv1(): Promise<Array<SalesInvoiceInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'SalesInvoice',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<SalesInvoiceInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    entries.sort((one: SalesInvoiceInterface, two: SalesInvoiceInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }




    // function to fetch customers
    fetchCustomer(): Promise<Array<CustomerInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'Customer',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<CustomerInterface> = result.rows.map((row: any) => this.mapObjectToCustomer(row.doc));
                    entries.sort((one: CustomerInterface, two: CustomerInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }

    searchCustomer(value): Promise<Array<CustomerInterface>> {
        return new Promise((resolve, reject) => {

            let options: Object = {
                selector: { name: { $regex: value } }
            };

            this.pouchDb.find(options)
                .then((result: any) => {
                    // let entries: Array<SalesQuoteInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    // resolve(entries);
                    let entries: Array<CustomerInterface> = result.docs.map((doc: any) => this.mapObjectToCustomer(doc));
                    resolve(entries);
                    // console.log(result.docs)
                })
                .catch(reject);
        });
    }


    searchItem(value): Promise<Array<InventoryItemInterface>> {
        return new Promise((resolve, reject) => {

            let options1: Object = {
                selector: { itemName: { $regex: value } }
            };

            this.pouchDb.find(options1)
                .then((result: any) => {
                    // let entries: Array<SalesQuoteInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    // resolve(entries);
                    let entries: Array<InventoryItemInterface> = result.docs.map((doc: any) => this.mapObjectToInventory(doc));
                    resolve(entries);
                    // console.log(result.docs)
                })
                .catch(reject);
        });
    }

    fetchItem(): Promise<Array<InventoryItemInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'InventoryItem',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<InventoryItemInterface> = result.rows.map((row: any) => this.mapObjectToInventory(row.doc));
                    entries.sort((one: InventoryItemInterface, two: InventoryItemInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }

    pagination(skipi): Promise<Array<SalesInvoiceInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                limit: 5,
                key: 'SalesQuote',
                include_docs: true,
                skip: skipi,
                descending: true
            };
            console.log("hello from service pagination =>>> " + skipi);

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<SalesInvoiceInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    entries.sort((one: SalesInvoiceInterface, two: SalesInvoiceInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }

    fetchInventry(): Promise<Array<InventoryItemInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'InventoryItem',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<InventoryItemInterface> = result.rows.map((row: any) => this.mapObjectToInventory(row.doc));
                    entries.sort((one: InventoryItemInterface, two: InventoryItemInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }
    fetchEntry(id: String): Promise<SalesInvoiceInterface> {
        console.log("hello from service =>>> " + id);
        return new Promise((resolve, reject) => {
            this.pouchDb.get(id)
                .then((object: any) => {
                    let entry: SalesInvoiceInterface = this.mapObjectToEntry(object);
                    resolve(entry);
                    console.log("hello from service fetchEntry() =>>> " + entry.invoicenumber);

                })
                .catch(reject);
        });

    }
    saveEntryv1(model: SalesInvoiceInterface): Promise<SalesInvoiceInterface> {
        return new Promise((resolve, reject) => {
            let object: Object = this.mapEntryToObject(model);

            this.pouchDb.put(object)
                .then(() => resolve(model))
                .catch(reject);

            console.log("from service hello() entry is done bosss ! " + model);

        });
    }

    ex(model: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let object: Object = this.mapEntryToObject(model);
            let object2: Object = {
                _id: model.id,
                items: [{
                    description: model.description,
                    itemname: model.itemname,
                    unitprice: model.unitprice,
                    qty: model.qty,
                    discount: model.discount,
                    amount: model.amount,
                }]
            };
            this.pouchDb.put(object)
                .then(() => resolve(model))
                .catch(reject);
            this.pouchDb.put(object2)
                .then(() => resolve(model))
                .catch(reject);
            console.log("from service hello() entry is done bosss ! " + model);

        });
    }
    newa(model: SalesInvoiceInterface): Promise<SalesInvoiceInterface> {
        return new Promise((resolve, reject) => {

            let object: Object = this.mapEntryToObject(model);
            this.pouchDb.put(object)
                .then(() => resolve(model))
                .catch(reject);


        });
    }

    deleteEntry(entry: SalesInvoiceInterface): Promise<SalesInvoiceInterface> {
        return new Promise((resolve, reject) => {
            let object: Object = this.mapEntryToObject(entry);
            this.pouchDb.remove(object)
                .then(() => resolve(entry))
                .catch(reject);
        });
    }
    hello(model: SalesInvoiceInterface): Promise<SalesInvoiceInterface> {

        model.id = Date.now().toString();
        model.view = 'SalesQuote';
        model.created = model.updated = new Date();
        return new Promise((resolve, reject) => {
            console.log("from service hello() job is done bosss ! ");
            let object: Object = this.mapEntryToObject(model);
            this.pouchDb.put(object)
                .then(() => resolve(model))
                .catch(reject);

        });
    }
    search(value): Promise<Array<SalesInvoiceInterface>> {
        return new Promise((resolve, reject) => {
            let options: Object = {
                selector: {
                    $or: [

                        { invoicenumber: { $regex: value } },
                        { purchaseorder: { $regex: value } },
                        { salesquote: { $regex: value } },
                        { invoicedate: { $regex: value } },
                        { duedate: { $regex: value } },
                        { customer: { $regex: value } },
                        { billingaddress: { $regex: value } },
                        { invoicesummery: { $regex: value } },
                        { notes: { $regex: value } },
                    ]
                },

            };

            this.pouchDb.find(options)
                .then((result: any) => {
                    let entries: Array<SalesInvoiceInterface> = result.docs.map((doc: any) => this.mapObjectTolist(doc));
                    resolve(entries);
                })
                .catch(reject);
        });
    }
    private mapObjectTolist(object: any): SalesInvoiceInterface {
        let entry: SalesInvoiceInterface = new SalesInvoiceInterface();
        entry.view = object.view;
        entry.id = object._id;
        entry.rev = object._rev;
        entry.invoicenumber = object.invoicenumber;
        entry.purchaseorder = object.purchaseorder;
        entry.salesquote = object.salesquote;
        entry.invoicedate = object.invoicedate;
        entry.duedate = object.duedate;
        entry.customer = object.customer;
        entry.billingaddress = object.billingaddress;
        entry.invoicesummery = object.invoicesummery;
        entry.items = object.item;

        entry.notes = object.notes;


        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }
    private mapObjectToEntry(object: any): SalesInvoiceInterface {
        let entry: SalesInvoiceInterface = new SalesInvoiceInterface();
        entry.view = object.view;
        entry.id = object._id;
        entry.rev = object._rev;
        entry.invoicenumber = object.invoicenumber;
        entry.purchaseorder = object.purchaseorder;
        entry.salesquote = object.salesquote;
        entry.invoicedate = object.invoicedate;
        entry.duedate = object.duedate;
        entry.customer = object.customer;
        entry.billingaddress = object.billingaddress;
        entry.invoicesummery = object.invoicesummery;
        entry.items = object.item;

        entry.notes = object.notes;


        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }

    private mapEntryToObject(entry: SalesInvoiceInterface): Object {
        return {
            view: entry.view,
            _id: entry.id,
            _rev: entry.rev,
            type: SalesInvoiceInterface.TYPE,
            invoicenumber: entry.invoicenumber,
            purchaseorder: entry.purchaseorder,
            salesquote: entry.salesquote,
            invoicedate: entry.invoicedate,
            duedate: entry.duedate,
            customer: entry.customer,
            billingaddress: entry.billingaddress,
            invoicesummery: entry.invoicesummery,
            item: entry.items,

            notes: entry.notes,


            created: entry.created.toISOString(),
            updated: entry.updated.toISOString()
        };
    }
    private mapEntryToObjectItems(entry: items): Object {
        return {

            description: entry.description,
            itemname: entry.itemname,
            unitprice: entry.unitprice,
            qty: entry.qty,
            discount: entry.discount,
            amount: entry.amount,

        };
    }

    private mapObjectToInventory(object: any): InventoryItemInterface {
        let entry: InventoryItemInterface = new InventoryItemInterface();
        entry.id = object._id;
        entry.rev = object._rev;
        entry.view = object.view;
        entry.itemCode = object.itemCode;
        entry.itemName = object.itemName;
        entry.unitName = object.unitName;
        entry.costPrice = object.costPrice;
        entry.salePrice = object.salePrice;
        entry.Descrpition = object.Descrpition;
        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }
    private mapObjectToCustomer(object: any): CustomerInterface {
        let entry: CustomerInterface = new CustomerInterface();
        entry.view = object.view;
        entry.id = object._id;
        entry.rev = object._rev;
        entry.name = object.name;
        entry.email = object.email;
        entry.code = object.code;
        entry.currency = object.currency;
        entry.businessidentifier = object.businessidentifierd;
        entry.billingaddress = object.billingaddress;
        entry.telephonenumber = object.telephonenumber;
        entry.fax = object.fax;
        entry.mobile = object.mobile;
        entry.additionalinformation = object.additionalinformation;


        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }
    private array(entry: SalesInvoiceInterface): Object {
        return {
            view: entry.view,
            _id: entry.id,
            _rev: entry.rev,
            type: SalesInvoiceInterface.TYPE,
            invoicenumber: entry.invoicenumber,
            purchaseorder: entry.purchaseorder,
            salesquote: entry.salesquote,
            invoicedate: entry.invoicedate,
            billingaddress: entry.billingaddress,
            invoicesummery: entry.invoicesummery,
            duedate: entry.duedate,
            item: entry.items,
            description: '',
            unitprice: '',
            qty: '',
            discount: '',
            amount: '',

            created: entry.created.toISOString(),
            updated: entry.updated.toISOString()
        };
    }

} 
