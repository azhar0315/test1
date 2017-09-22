import { Component, OnInit, OnDestroy } from "@angular/core";
import { CustomerInterface } from './Service/Customer.interface';
import { CustomerService } from './Service/Customer.service';
import { CustomerObserver } from './Service/Customer.observer';
import { NgForm } from '@angular/forms';


declare var $: any;
declare var $tr: any;

@Component({
    selector: 'Customer',
    template: require('./Customer.html'),
    styles: [`
   input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]

})
export class CustomerReadComponent implements OnInit, OnDestroy, CustomerObserver {
    entries: Array<CustomerInterface> = [];
    entry: CustomerInterface = new CustomerInterface();

    search;
    number: Array<CustomerInterface> = [];
    jsondata;

    constructor(private repository: CustomerService) {

    }

    export(value) {
        this.repository.export(value).then((jason: any) => this.jsondata = jason).then((jason: any) => console.log(this.jsondata));

    }



    // // find() {
    // //     if (this.search.length > 0) {

    // //         this.repository.search(this.search)
    // //             .then((entries: Array<CustomerInterface>) => this.entries = entries)
    // //     }
    // //     if (this.search.length == 0) {
    // //         this.repository.fetchEntriesv1()
    // //             .then((entries: Array<CustomerInterface>) => this.entries = entries)
    // //     } 
    // }
    refresh() {
        this.repository.fetchEntriesv1()
            .then((entries: Array<CustomerInterface>) => this.entries = entries);
        console.log("refreash button is workin with output of ", this.entries)
    }
    find() {
        this.repository.search(this.search)
            .then((entries: Array<CustomerInterface>) => this.entries = entries);
    }

    save(entry) {

        this.entry.id = Date.now().toString();
        this.entry.view = 'Customer';
        this.entry.created = this.entry.updated = new Date();

        this.repository.saveEntryv1(this.entry);
    }

    ngOnInit() {
        this.repository.registerObserver(this);
        this.repository.fetchEntriesv1()
            .then((entries: Array<CustomerInterface>) => this.entries = entries);
        this.repository.createv1();

    }

    ngOnDestroy(): void {
        this.repository.unregisterObserver(this);
    }

    notify(): void {
        this.repository.fetchEntriesv1()
            .then((entries: Array<CustomerInterface>) => this.entries = entries);
    }
    // update(entry) {

    //     this.repository.saveEntryv1(entry);
    // }
    delete(value) {
        this.repository.deleteEntry(value)

    }
}
