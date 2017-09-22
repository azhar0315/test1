

export class PaySlipInterface {

    static readonly TYPE = 'Customer';

    id: String;
    view: String;
    rev: String;
    issuedate: String;
    Employeename: String;
    created: Date;
    updated: Date;
    earning: String;
    description: String;
    quantity: String;
    rate: String;
    total: String;
    grosstotal: String;
    deduction: String;
    deduction_description: String;
    deduction_amount: String;
    deduction_Total: String;
    netpay: String;
    employee_contribution: String;
    contribution_discription: String;
    contribution_amount: String;
    Total_contribution: String;


    compareTo(other: PaySlipInterface): number {
        return this.created.valueOf() - other.created.valueOf();
    }


}

