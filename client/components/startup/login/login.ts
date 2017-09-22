import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'Login',
    template: require('./login.html'),


})
export class LoginComponent {

    constructor(private router: Router) {
        // $.getScript('../../assets/js/moment.min.js');

    }
    user;
    pass;

    localuser = "local";
    localpass = "local";

    submitForm() {
        console.log(this.user);
        console.log(this.pass);

        if (this.user === "admin" && this.pass === "admin") {
            console.log("lodin admin")
            this.router.navigate(['/app-Admin']);

        } else {
            console.log("admin not login")

        }
        if (this.user == "pop" && this.pass == "pop") {
            console.log("lodin local");
            // var ordernum = 1;
            // var moment = {
            //     starttime: (<HTMLInputElement>document.getElementById('time')).innerHTML,
            //     day: (<HTMLInputElement>document.getElementById('day')).innerHTML,
            //     month: (<HTMLInputElement>document.getElementById('month')).innerHTML,
            //     year: (<HTMLInputElement>document.getElementById('year')).innerHTML,
            // }
            // localStorage.setItem('starttime', JSON.stringify(moment));
            // localStorage.setItem('button', 'disable');
            this.router.navigate(['/app-POP']);

        } else {
            console.log("emp not login ")

        }
        if (this.user === "pos" && this.pass === "pos") {
            console.log("lodin kitchen")
            this.router.navigate(['/app-POS']);

        } else {
            console.log("POS not login")

        }

    }


}
