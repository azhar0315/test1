//find and replace
//CrudService
//EmployeeObserver
//EmployeeInterface
//../interface/crud.interface
//../observables/crud.observer
// if (doc.view === "Employee") {
// _id: '_design/Employee',    
//    key: 'view2',




import { EmployeeInterface } from "./Employee.interface";
// import {EmployeeInterface} from "../interface/Employee.interface";
// import {View2Interface} from "../interface/view2.interface";
import { EmployeeObserver } from "./Employee.observer";

declare let PouchDB: any;
declare let emit: Function;


export class EmployeeService {

    private pouchDb: any;
    private pouchDbEventEmitter: any;
    private pouchDbSyncEventEmitter: any;
    private observer: Array<EmployeeObserver> = [];
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
    export(value): Promise<Array<EmployeeInterface>> {
        if (value === "Json") {
            console.log("3")
            return new Promise((resolve, reject) => {
                let mapFunc: Function = (doc: any) => emit(doc.view);

                let options: Object = {
                    key: 'Supplier',
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


    // search(value): Promise<Array<EmployeeInterface>> {
    //     return new Promise((resolve, reject) => {

    //         let options: Object = {
    //             selector: { issuedate: { $regex: value } }
    //         };

    //         this.pouchDb.find(options)
    //             .then((result: any) => {
    //                 // let entries: Array<SalesQuoteInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
    //                 // resolve(entries);
    //                 let entries: Array<EmployeeInterface> = result.docs.map((doc: any) => this.mapObjectToEntry(doc));
    //                 resolve(entries);
    //                 // console.log(result.docs)
    //             })
    //             .catch(reject);
    //     });
    // }

    registerObserver(observer: EmployeeObserver): void {
        if (!this.observer.includes(observer)) {
            this.observer.push(observer);
        }
    }

    unregisterObserver(observer: EmployeeObserver): void {
        var index: number = this.observer.indexOf(observer);
        if (index > -1) {
            this.observer.splice(index, 1);
        }
    }

    notifyObserver(): void {
        this.observer.forEach((observer: EmployeeObserver) => observer.notify());
    }

    createv1() {
        let Employee: Object = {
            _id: '_design/Employee',
            views: {
                index: {
                    map: function mapFun(doc) {
                        if (doc.view === "Employee") {
                            emit(doc.view);
                        }
                    }.toString()
                }
            }
        };
        return new Promise((resolve, reject) => {

            // this.pouchDb.put(Employee)
            // save the design doc
            this.pouchDb.put(Employee).catch(function (err) {
                if (err.name !== 'conflict') {
                    throw err;
                }
                // ignore if doc already exists
            })
                .catch(reject);
        });
    }
    fetchEntriesv1(): Promise<Array<EmployeeInterface>> {
        return new Promise((resolve, reject) => {
            let mapFunc: Function = (doc: any) => emit(doc.view);

            let options: Object = {
                key: 'Employee',
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result: any) => {
                    let entries: Array<EmployeeInterface> = result.rows.map((row: any) => this.mapObjectToEntry(row.doc));
                    entries.sort((one: EmployeeInterface, two: EmployeeInterface) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }

    fetchEntry(id: String): Promise<EmployeeInterface> {
        return new Promise((resolve, reject) => {
            this.pouchDb.get(id)
                .then((object: any) => {
                    let entry: EmployeeInterface = this.mapObjectToEntry(object);
                    resolve(entry);
                })
                .catch(reject);
        });
    }

    saveEntryv1(entry1: EmployeeInterface): Promise<EmployeeInterface> {
        return new Promise((resolve, reject) => {
            let object: Object = this.mapEntryToObject(entry1);
            this.pouchDb.put(object)
                .then(() => resolve(entry1))
                .catch(reject);
        });
    }


    deleteEntry(entry: EmployeeInterface): Promise<EmployeeInterface> {
        return new Promise((resolve, reject) => {
            let object: Object = this.mapEntryToObject(entry);
            this.pouchDb.remove(object)
                .then(() => resolve(entry))
                .catch(reject);
        });
    }

    private mapObjectTolist(object: any): EmployeeInterface {
        let entry: EmployeeInterface = new EmployeeInterface();
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
    search(value): Promise<Array<EmployeeInterface>> {
        return new Promise((resolve, reject) => {
            let options: Object = {
                selector: {
                    $or: [

                        { name: { $regex: value } },
                        { email: { $regex: value } },
                        { businessidentifier: { $regex: value } },
                        { billingaddress: { $regex: value } },
                        { telephonenumber: { $regex: value } },
                        { address: { $regex: value } },
                        { mobile: { $regex: value } },
                    ]
                },

            };

            this.pouchDb.find(options)
                .then((result: any) => {
                    let entries: Array<EmployeeInterface> = result.docs.map((doc: any) => this.mapObjectTolist(doc));
                    resolve(entries);
                })
                .catch(reject);
        });
    }
    private mapObjectToEntry(object: any): EmployeeInterface {
        let entry: EmployeeInterface = new EmployeeInterface();
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

    private mapEntryToObject(entry: EmployeeInterface): Object {
        return {
            view: entry.view,
            _id: entry.id,
            _rev: entry.rev,
            type: EmployeeInterface.TYPE,
            name: entry.name,
            email: entry.email,
            code: entry.code,
            currency: entry.currency,
            businessidentifier: entry.businessidentifier,
            billingaddress: entry.billingaddress,
            telephonenumber: entry.telephonenumber,
            fax: entry.fax,
            mobile: entry.mobile,
            additionalinformation: entry.additionalinformation,


            created: entry.created.toISOString(),
            updated: entry.updated.toISOString()
        };
    }

} 
