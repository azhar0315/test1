
import { PaySlipInterface } from "./PaySlip.interface";
import { PaySlipObserver } from "./PaySlip.observer";
import { EmployeeInterface } from '../../Employee/Service/Employee.interface';

declare let PouchDB: any;
declare let emit: Function;

export class PaySlipService {

    private pouchDb: any;
    private pouchDbEventEmitter: any;
    private pouchDbSyncEventEmitter: any;
    private observer: Array<PaySlipObserver> = [];
    pager;

    constructor() {
        this.pouchDb = new PouchDB('crud-data');

        this.pouchDbEventEmitter = this.pouchDb.changes({
            since: 'now',
            live: true
        }).on('change', (event) => this.notifyObserver());
    }
    registerObserver(observer: PaySlipObserver): void {
        if (!this.observer.includes(observer)) {
            this.observer.push(observer);
        }
    }

    notifyObserver(): void {
        this.observer.forEach((observer: PaySlipObserver) => observer.notify());
    }



    private mapObjectToEntry(object: any): PaySlipInterface {
        let entry: PaySlipInterface = new PaySlipInterface();
        entry.view = object.view;
        entry.id = object._id;
        entry.rev = object._rev;
        entry.issuedate = object.issuedate,
            entry.Employeename = object.Employeename;
        entry.earning = object.earning;
        entry.description = object.description;
        entry.quantity = object.quantity;
        entry.rate = object.rate;
        entry.total = object.total;

        entry.grosstotal = object.grosstotal;
        entry.deduction = object.deduction;
        entry.deduction_description = object.deduction_description;
        entry.deduction_amount = object.deduction_amount;
        entry.deduction_Total = object.deduction_Total;
        entry.netpay = object.netpay;
        entry.employee_contribution = object.employee_contribution;
        entry.contribution_discription = object.contribution_discription;
        entry.Total_contribution = object.Total_contribution;




        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }


    private mapEntryToObject(entry: PaySlipInterface): Object {
        return {
            view: entry.view,
            _id: entry.id,
            _rev: entry.rev,
            type: PaySlipInterface.TYPE,
            issuedate: entry.issuedate,
            Employeename: entry.Employeename,
            earning: entry.earning,
            description: entry.description,
            quantity: entry.quantity,
            rate: entry.rate,
            total: entry.total,

            grosstotal: entry.grosstotal,
            deduction: entry.deduction,
            deduction_description: entry.deduction_description,
            deduction_amount: entry.deduction_amount,
            deduction_Total: entry.deduction_Total,
            netpay: entry.deduction,
            employee_contribution: entry.employee_contribution,
            contribution_discription: entry.contribution_discription,
            contribution_amount: entry.contribution_amount,
            Total_contribution: entry.Total_contribution,



            created: entry.created.toISOString(),
            updated: entry.updated.toISOString()
        };
    }

}