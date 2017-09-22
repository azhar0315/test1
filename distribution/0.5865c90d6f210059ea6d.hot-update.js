webpackHotUpdate(0,{

/***/ 457:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"card\">\n        <div class=\"header\">\n            <h4 class=\"title\">Edit Purchase Invoice </h4>\n            <button class=\"btn btn-defualt btn-fill btn-sm\" [routerLink]=\"['/app-POP/PurchaseInvoice']\" type=\"button\">Back</button>\n\n        </div>\n        <br>\n        <br>\n\n        <form novalidate #form=\"ngForm\">\n\n\n            <!--enter new SalesOrder code here-->\n\n            <div class=\"container-fluid\">\n\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div>Invoice No.</div>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">#</span>\n                            <input type=\"text\" placeholder=\"Invoice no.\" class=\"form-control\" [(ngModel)]=\"entry.invoicenumber\" name=\"invoicenumber\"\n                                #invoicenumber=\"ngModel\" [rangeLength]=\"[0,25]\">\n                            <p *ngIf=\"invoicenumber.errors?.rangeLength\">must be less then 25 cherecters</p>\n                            <span class=\"input-group-addon\"></span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div>Purchase Order</div>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">#</span>\n                            <input type=\"text\" placeholder=\"Purchase Order\" class=\"form-control\" [(ngModel)]=\"entry. purchaseorder\" name=\" purchaseorder\"\n                                #purchaseorder=\"ngModel\" [rangeLength]=\"[0,25]\">\n                            <p *ngIf=\"purchaseorder.errors?.rangeLength\">must be less then 25 cherecters</p>\n                            <span class=\"input-group-addon\"></span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div>Sales Quote</div>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">#</span>\n                            <input type=\"text\" placeholder=\"Sales Quote\" class=\"form-control\" [(ngModel)]=\"entry. salesquote\" name=\" salesquote\" #salesquote=\"ngModel\"\n                                [rangeLength]=\"[0,25]\">\n                            <p *ngIf=\"salesquote.errors?.rangeLength\">must be less then 25 cherecters</p>\n                            <span class=\"input-group-addon\"></span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div> Invoice Date</div>\n                        <input class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\" type=\"text\" [(ngModel)]=\"entry.invoicedate\"\n                            name=\" invoicedate\" #invoicedate=\"ngModel\" #invoicedate (blur)=\"entry.invoicedate=invoicedate.value\">\n                    </div>\n                    <div class=\"col-sm-4\"></div>\n                    <div class=\"col-sm-3\">\n                        <div> Due Date</div>\n                        <input class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\" type=\"text\" [(ngModel)]=\"entry.duedate\" name=\"duedate\"\n                            #duedate=\"ngModel\" #duedate (blur)=\"entry.duedate=duedate.value\">\n                    </div>\n\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div> Supplier</div>\n                        <input autocomplete=\"off\" type=\"text\" (keyup)=\"find()\" (focus)=\"show()\" (blur)=\"hiden()\" id=\"cus\" class=\"form-control\" placeholder=\"Supplier name\"\n                            name=\"supplier\" [(ngModel)]=\"entry.supplier\" required>\n                        <div class=\"list-group\" id=\"res\" style=\"display:none; z-index: 1000; position: absolute; width: 167px;\">\n                            <button *ngFor=\"let supp of supplier;let i=index\" id={{i}}+supplier (click)=\"select(supp.name,supp.billingaddress)\" type=\"text\"\n                                class=\"list-group-item list-group-item-action\">{{supp.name}}</button>\n                        </div>\n\n\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div> Billing Address</div>\n                        <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"billing address\" name=\"billingaddress\" [(ngModel)]=\"entry.billingaddress\"\n                            required>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div> Invoice Summary</div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"optional\" [(ngModel)]=\"entry.invoicesummery\" name=\"invoicesummery\" #invoicesummery=\"ngModel\"\n                            [rangeLength]=\"[0,100]\">\n                        <p *ngIf=\"invoicesummery.errors?.rangeLength\">must be less then 100 words</p>\n                    </div>\n                </div>\n\n\n                <div *ngFor=\"let item of entry.items;let i=index\">\n                    <span class=\"fa fa-times pull-right\" *ngIf=\"entry.items.length > 1\" (click)=\"removeItem(i)\"></span> &nbsp;\n                    <div class=\"card\">\n                        <div class=\"container-fluid\">\n                            <div id=\"{{i}}\" class=\"row\">\n\n                                <input type=\"hidden\" id=\"index\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"entry.items.length\">\n                                <div class=\"col-sm-2\">\n                                    <div> Item name {{ i + 1}}</div>\n\n                                    <input autocomplete=\"off\" (focus)=\"showinven(i)\" (blur)=\"hideninven(i)\" (keyup)=\"findItem(item.itemname)\" id={{i}}inve class=\"form-control\"\n                                        placeholder=\"Item name\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.itemname\"\n                                        required>\n                                    <div class=\"list-group\" id={{i}}inven style=\"display:none; z-index: 1000; position: absolute; width: 167px;\">\n                                        <button *ngFor=\"let inven of inventory;\" id={{i}}inventory (click)=\"selectinventory(inven.itemName,inven.Descrpition,inven.salePrice,i)\"\n                                            type=\"text\" class=\"list-group-item list-group-item-action\">{{inven.itemName}}</button>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-2 col-md-3\">\n                                    <div> Description</div>\n                                    <input type=\"text\" class=\"form-control\" id={{i}}description placeholder=\"Description of quete\" name=\"description\" [ngModelOptions]=\"{standalone: true}\"\n                                        [(ngModel)]=\"item.description\" required>\n                                </div>\n\n                                <div class=\"col-sm-2\">\n                                    <div>Qty</div>\n                                    <input type=\"number\" class=\"form-control\" (blur)=\"findTotal()\" (change)=\"math(i)\" id={{i}}qty placeholder=\"0\" name=\"qty\"\n                                        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.qty\" required>\n                                </div>\n\n                                <div class=\"col-sm-2\">\n                                    <div>Unit Price</div>\n                                    <input type=\"number\" class=\"form-control\" id={{i}}unit-p placeholder=\"0\" name=\"unitprice\" [ngModelOptions]=\"{standalone: true}\"\n                                        [(ngModel)]=\"item.unitprice\" required>\n                                </div>\n\n                                <div class=\"col-sm-2 col-md-1\">\n                                    <div>Discount</div>\n                                    <input type=\"number\" class=\"form-control\" (change)=\"math(i)\" (blur)=\"findTotal()\" id={{i}}discount value=0 placeholder=\"%\"\n                                        name=\"discount\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.discount\" required>\n                                </div>\n                                <div class=\"col-sm-2 \">\n                                    <div>Amount</div>\n\n                                    <input type=\"number\" class=\"form-control\" id={{i}}amount (focus)=\"findTotal()\" placeholder=\"0%\" name=\"qwe\" [ngModelOptions]=\"{standalone: true}\"\n                                        [(ngModel)]=\"item.amount\" required>\n                                    <br>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div id=\"destination\"> </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-2\">\n                        <button (click)=\"add(entry)\" class=\"btn btn-warning btn-fill btn-sm \"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>More</button>\n                    </div>\n                    <div class=\"col-sm-8\"> &nbsp;</div>\n                    <div class=\"col-sm-2\">\n                        <input value=\"0\" type=\"number\" class=\"form-control\" placeholder=\"Total\" (focus)=\"findTotal()\" [(ngModel)]=\"tot\" name=\"total\"\n                            id=\"total\" required>\n                    </div>\n                </div>\n\n\n\n\n\n\n\n                <br>\n\n                <br>\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div> Notes</div>\n                        <textarea type=\"text\" rows=\"4\" cols=\"20\" class=\"form-control\" placeholder=\"optional\" [(ngModel)]=\"entry.notes\" name=\"notes\"\n                            #notes=\"ngModel\" [rangeLength]=\"[0,100]\"></textarea>\n                        <p *ngIf=\"notes.errors?.rangeLength\">must be less then 100 words</p>\n                    </div>\n                </div>\n                <br>\n\n\n\n            </div>\n\n            <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"btn btn-primary btn-fill btn-sm\" (click)=\"update(entry) \" [routerLink]=\"['/app-POP/PurchaseInvoice']\" type=\"button\">Update</button>\n                <button class=\"btn btn-danger btn-fill btn-sm\" (click)=\"delete(entry) \" [routerLink]=\"['/app-POP/PurchaseInvoice']\" type=\"button\">Delete</button>\n            </div>\n\n\n        </form>\n\n    </div>\n</div>"

/***/ }

})