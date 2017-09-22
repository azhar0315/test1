import { Component, OnInit, OnDestroy } from "@angular/core";
// import { EmployeeInterface } from './Service/Employee.interface';
// import { EmployeeService } from './Service/Employee.service';
// import { EmployeeObserver } from './Service/Employee.observer';
import { NgForm } from '@angular/forms';


declare var $: any;
// declare var $tr: any;
declare var demo: any;

@Component({
    selector: 'PaySlip',
    template: require('./PaySlip.html'),
    styles: [`
   input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]

})
export class PaySlipComponent implements OnInit, OnDestroy {
    // entries: Array<EmployeeInterface> = [];
    // entry: EmployeeInterface = new EmployeeInterface();

    // search;
    // number: Array<EmployeeInterface> = [];
    jsondata;

    // constructor(private repository: EmployeeService) {

    // }

    // export(value) {
    //     this.repository.export(value).then((jason: any) => this.jsondata = jason).then((jason: any) => console.log(this.jsondata));

    // }



    // // find() {
    // //     if (this.search.length > 0) {

    // //         this.repository.search(this.search)
    // //             .then((entries: Array<EmployeeInterface>) => this.entries = entries)
    // //     }
    // //     if (this.search.length == 0) {
    // //         this.repository.fetchEntriesv1()
    // //             .then((entries: Array<EmployeeInterface>) => this.entries = entries)
    // //     }
    // }
    // refresh() {
    //     this.repository.fetchEntriesv1()
    //         .then((entries: Array<EmployeeInterface>) => this.entries = entries);
    //     console.log("refreash button is workin with output of ", this.entries)
    // }
    // find() {
    //     this.repository.search(this.search)
    //         .then((entries: Array<EmployeeInterface>) => this.entries = entries);
    // }

    ngAfterViewInit() {
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

            // // Init Sliders
            // demo.initFormExtendedSliders();

            // Init DatetimePicker
            demo.initFormExtendedDatetimepickers();
        });



    }
    ngOnInit() {


    }

    ngOnDestroy(): void {
        console.log("ng on destroy");
    }


}
