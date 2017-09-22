//find and replace
//CrudService
//HRSummaryObserver
//HRSummaryInterface
//../interface/crud.interface
//../observables/crud.observer
// if (doc.view === "HRSummary") {
// _id: '_design/HRSummary',    
//    key: 'view2',




import { HRSummaryInterface, items } from "./Summary.interface";
// import {HRSummaryInterface} from "../interface/HRSummary.interface";
// import {View2Interface} from "../interface/view2.interface";
import { HRSummaryObserver } from "./Summary.observer";
import { EmployeeInterface } from '../../Employee/Service/Employee.interface';
//import { InventoryItemInterface } from '../../InventoryItem/Service/InventoryItem.interface';



declare let PouchDB: any;
declare let emit: Function;


export class HRSummaryService {

    private pouchDb: any;
    private pouchDbEventEmitter: any;
    private pouchDbSyncEventEmitter: any;
    private observer: Array<HRSummaryObserver> = [];
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

    registerObserver(observer: HRSummaryObserver): void {
        if (!this.observer.includes(observer)) {
            this.observer.push(observer);
        }
    }

    unregisterObserver(observer: HRSummaryObserver): void {
        var index: number = this.observer.indexOf(observer);
        if (index > -1) {
            this.observer.splice(index, 1);
        }
    }

    notifyObserver(): void {
        this.observer.forEach((observer: HRSummaryObserver) => observer.notify());
    }

    createv1() {
        let HRSummary: Object = {
            _id: '_design/HRSummary',
            views: {
                index: {
                    map: function mapFun(doc) {
                        if (doc.view === "HRSummary") {
                            emit(doc.view);
                        }
                    }.toString()
                }
            }
        };
        return new Promise((resolve, reject) => {

            // this.pouchDb.put(HRSummary)
            // save the design doc
            this.pouchDb.put(HRSummary).catch(function (err) {
                if (err.name !== 'conflict') {
                    throw err;
                }
                // ignore if doc already exists
            })
                .catch(reject);
        });
    }

    fetchEntriesv1(): Promise<Array<HRSummaryInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'HRSummary',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<HRSummaryInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    entries.sort((one: HRSummaryInterface, two: HRSummaryInterface) => two.compareTo(one));
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
                    // let entries: Array<InventoryItemInterface> = result.rows.map((row: any) => this.mapObjectToInventory(row.doc));
                    // entries.sort((one: InventoryItemInterface, two: InventoryItemInterface) => two.compareTo(one));
                    // resolve(entries);
                })
                .catch(reject);
        });
    }

    fetchEmployee(): Promise<Array<EmployeeInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'Employee',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<EmployeeInterface> = result.rows.map((row: any) => this.mapObjectToEmployee(row.doc));
                    entries.sort((one: EmployeeInterface, two: EmployeeInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }

    searchEmployee(value): Promise<Array<EmployeeInterface>> {
        return new Promise((resolve, reject) => {

            let options: Object = {
                selector: { name: { $regex: value } }
            };

            this.pouchDb.find(options)
                .then((result: any) => {
                    // let entries: Array<HRSummaryInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    // resolve(entries);
                    let entries: Array<EmployeeInterface> = result.docs.map((doc: any) => this.mapObjectToEmployee(doc));
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
                    // let entries: Array<HRSummaryInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
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
    search(value): Promise<Array<HRSummaryInterface>> {
        return new Promise((resolve, reject) => {

            let options: Object = {
                selector: { issuedate: { $regex: value } }
            };

            this.pouchDb.find(options)
                .then((result: any) => {
                    // let entries: Array<HRSummaryInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    // resolve(entries);
                    let entries: Array<HRSummaryInterface> = result.docs.map((doc: any) => this.mapObjectToEntry(doc));
                    resolve(entries);
                    // console.log(result.docs)
                })
                .catch(reject);
        });
    }

    pagination(skipi, value): Promise<Array<HRSummaryInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view)
            // ,reduce: '_count';

            let options: Object = {
                limit: value,
                key: 'HRSummary',
                include_docs: true,
                skip: skipi,
                descending: true,
                // reduce: true,
            };
            console.log("hello from service pagination =>>> " + skipi);

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<HRSummaryInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    entries.sort((one: HRSummaryInterface, two: HRSummaryInterface) => two.compareTo(one));
                    resolve(entries);
                    console.log(result)

                })
                .catch(reject);
        });
    }

    numbering(): Promise<Array<HRSummaryInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view)
            // ,reduce: '_count';

            let options: Object = {
                // limit : value, 
                key: 'HRSummary',
                include_docs: true,
                // skip : 0,
                // descending : true,
                // reduce: true,
            };
            // console.log("hello from service pagination =>>> " + skipi);

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<HRSummaryInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    resolve(entries);
                    this.pager = entries.length
                    console.log(this.pager)

                })
                .catch(reject);

        });
    }

    fetchEntry(id: String): Promise<HRSummaryInterface> {
        console.log("hello from service =>>> " + id);
        return new Promise((resolve, reject) => {
            this.pouchDb.get(id)
                .then((object: any) => {
                    let entry: HRSummaryInterface = this.mapObjectToEntry(object);
                    resolve(entry);
                    console.log("hello from service fetchEntry() =>>> " + entry.reference);

                })
                .catch(reject);
        });

    }

    saveEntryv1(model: HRSummaryInterface): Promise<HRSummaryInterface> {
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

    newa(model: HRSummaryInterface): Promise<HRSummaryInterface> {
        return new Promise((resolve, reject) => {

            let object: Object = this.mapEntryToObject(model);
            this.pouchDb.put(object)
                .then(() => resolve(model))
                .catch(reject);


        });
    }

    deleteEntry(entry: HRSummaryInterface): Promise<HRSummaryInterface> {

        return new Promise((resolve, reject) => {
            let object: Object = this.mapEntryToObject(entry);
            this.pouchDb.remove(object)
                .then(() => resolve(entry))
                .catch(reject);
            console.log("from service hello() entry is done bosss ! " + entry);
            console.log("from service hello() object is done bosss ! " + object);

        });


    }
    hello(model: HRSummaryInterface): Promise<HRSummaryInterface> {

        model.id = Date.now().toString();
        model.view = 'HRSummary';
        model.created = model.updated = new Date();
        return new Promise((resolve, reject) => {
            console.log("from service hello() job is done bosss ! ");
            let object: Object = this.mapEntryToObject(model);
            this.pouchDb.put(object)
                .then(() => resolve(model))
                .catch(reject);

        });
    }

    private mapObjectToEntry(object: any): HRSummaryInterface {
        let entry: HRSummaryInterface = new HRSummaryInterface();
        entry.view = object.view;
        entry.id = object._id;
        entry.rev = object._rev;
        entry.reference = object.reference;
        entry.issuedate = object.issuedate;
        entry.Employee = object.Employee;
        entry.billingaddress = object.billingaddress;
        entry.quotesummery = object.quotesummery;
        entry.items = object.item;
        entry.description = object.desription;
        entry.unitprice = object.unitprice;
        entry.qty = object.qty;
        entry.discount = object.discount;
        entry.amount = object.amount;
        entry.notes = object.notes;
        entry.heading = object.heading;


        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }

    // private mapEntryToObject(entry: HRSummaryInterface): Object {
    //     return {
    //         view: entry.view,
    //         _id: entry.id,
    //         _rev: entry.rev,
    //         type: HRSummaryInterface.TYPE,
    //         reference: entry.reference,
    //         issuedate: entry.issuedate,
    //         Employee: entry.Employee,
    //         billingaddress: entry.billingaddress,
    //         quotesummery: entry.quotesummery,
    //         item: entry.items,
    //         description: entry.description,
    //         unitprice: entry.unitprice,
    //         qty: entry.qty,
    //         discount: entry.discount,
    //         amount: entry.amount,
    //         notes: entry.notes,
    //         heading: entry.heading,


    //         created: entry.created.toISOString(),
    //         updated: entry.updated.toISOString()
    //     };
    // }
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
    // private mapObjectToInventory(object: any): InventoryItemInterface {
    //     let entry: InventoryItemInterface = new InventoryItemInterface();
    //     entry.id = object._id;
    //     entry.rev = object._rev;
    //     entry.view = object.view;
    //     entry.itemCode = object.itemCode;
    //     entry.itemName = object.itemName;
    //     entry.unitName = object.unitName;
    //     entry.costPrice = object.costPrice;
    //     entry.salePrice = object.salePrice;
    //     entry.Descrpition = object.Descrpition;
    //     entry.created = new Date(object.created);
    //     entry.updated = new Date(object.updated);
    //     return entry
    // }
    // private mapObjectToEmployee(object: any): EmployeeInterface {
    //     let entry: EmployeeInterface = new EmployeeInterface();
    //     entry.view = object.view;
    //     entry.id = object._id;
    //     entry.rev = object._rev;
    //     entry.name = object.name;
    //     entry.email = object.email;
    //     entry.code = object.code;
    //     entry.currency = object.currency;
    //     entry.businessidentifier = object.businessidentifierd;
    //     entry.billingaddress = object.billingaddress;
    //     entry.telephonenumber = object.telephonenumber;
    //     entry.fax = object.fax;
    //     entry.mobile = object.mobile;
    //     entry.additionalinformation = object.additionalinformation;


    //     entry.created = new Date(object.created);
    //     entry.updated = new Date(object.updated);
    //     return entry
    // }
    // private array(entry: HRSummaryInterface): Object {
    //     return {
    //         view: entry.view,
    //         _id: entry.id,
    //         _rev: entry.rev,
    //         type: HRSummaryInterface.TYPE,
    //         reference: entry.reference,
    //         issuedate: entry.issuedate,
    //         Employee: entry.Employee,
    //         billingaddress: entry.billingaddress,
    //         quotesummery: entry.quotesummery,
    //         item: entry.items,
    //         description: '',
    //         unitprice: '',
    //         qty: '',
    //         discount: '',
    //         amount: '',
    //         notes: entry.notes,
    //         heading: entry.heading,


    //         created: entry.created.toISOString(),
    //         updated: entry.updated.toISOString()
    //     };
    // }
} 