

export class EmployeeInterface {

    static readonly TYPE = 'Employee';

    id: String;
    view: String;
    rev: String;
    name: String;
    created: Date;
    updated: Date;
    code: String;
    currency: String;
    creditlimit: String;
    businessidentifier: String;
    billingaddress: String;
    telephonenumber: String;
    email: String;
    fax: String;
    mobile: String;
    additionalinformation: String

    compareTo(other: EmployeeInterface): number {
        return this.created.valueOf() - other.created.valueOf();
    }


}

export class items {
    itemname: string;
    description: String;
    unitprice: number;
    amount: number;
    discount: number;
    qty: number;

}