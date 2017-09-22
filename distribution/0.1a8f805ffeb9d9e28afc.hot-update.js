webpackHotUpdate(0,{

/***/ 451:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"card\">\n        <div class=\"header\">\n            <h4 class=\"title\">New Purchase Order </h4>\n            <button class=\"btn btn-defualt btn-fill btn-sm\" [routerLink]=\"['/app-POP/PurchaseOrder']\" type=\"button\">Back</button>\n\n        </div>\n        <br>\n        <br>\n\n        <form novalidate #form=\"ngForm\">\n\n\n            <!--enter new SalesOrder code here-->\n\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div> Issuse Date</div>\n                        <input class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\" type=\"text\" [(ngModel)]=\"entry.issuedate\" name=\"issuedate\"\n                            #issuedate=\"ngModel\" #issuedate (blur)=\"entry.issuedate=issuedate.value\" required>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div>Reference No.</div>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">#</span>\n                            <input type=\"text\" placeholder=\"reference no.\" class=\"form-control\" [(ngModel)]=\"entry.reference\" name=\"reference\" #reference=\"ngModel\"\n                                [rangeLength]=\"[0, 25]\" required>\n                            <p *ngIf=\"reference.errors?.rangeLength\">must be less then 25 cherecters</p>\n                            <span class=\"input-group-addon\"></span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div> Supplier</div>\n                        <input autocomplete=\"off\" type=\"text\" (keyup)=\"find()\" (focus)=\"show()\" (blur)=\"hiden()\" id=\"cus\" class=\"form-control\" placeholder=\"Supplier name\"\n                            name=\"supplier\" [(ngModel)]=\"entry.supplier\" required>\n                        <div class=\"list-group\" id=\"res\" style=\"display:none; z-index: 1000; position: absolute; width: 167px;\">\n                            <button *ngFor=\"let supp of supplier;let i=index\" id={{i}}+supplier (click)=\"select(supp.name,supp.billingaddress)\" type=\"text\"\n                                class=\"list-group-item list-group-item-action\">{{supp.name}}</button>\n                        </div>\n\n\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div> Billing Address</div>\n                        <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"billing address\" name=\"billingaddress\" [(ngModel)]=\"entry.billingaddress\"\n                            required>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div> Summary</div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"optional\" [(ngModel)]=\"entry.summery\" name=\"summery\" #summery=\"ngModel\"\n                            [rangeLength]=\"[0, 100]\" required>\n                        <p *ngIf=\"summery.errors?.rangeLength\">must be less then 100 worlds</p>\n                    </div>\n                </div>\n\n\n                <div *ngFor=\"let item of test;let i=index\">\n                    <span class=\"fa fa-times pull-right\" *ngIf=\"test.length > 1\" (click)=\"removeItem(i)\"></span> &nbsp;\n                    <div class=\"card\">\n                        <div class=\"container-fluid\">\n                            <div id=\"{{i}}\" class=\"row\">\n\n\n                                <input type=\"hidden\" id=\"index\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"test.length\">\n                                <div class=\"col-sm-2\">\n                                    <div> Item name</div>\n\n                                    <input autocomplete=\"off\" class=\"form-control\" (focus)=\"showinven(i)\" (blur)=\"hideninven(i)\" placeholder=\"Item name\" name=\"itemname\"\n                                        (keyup)=\"findItem(item.itemname)\" id={{i}}inve [(ngModel)]=\"item.itemname\" required>\n                                    <div class=\"list-group\" id={{i}}inven style=\"display:none; z-index: 1000; position: absolute; width: 167px;\">\n                                        <button *ngFor=\"let inven of inventory;\" id={{i}}inventory (click)=\"selectinventory(inven.itemName,inven.Descrpition,inven.salePrice,i)\"\n                                            type=\"text\" class=\"list-group-item list-group-item-action\">{{inven.itemName}}</button>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-2 col-md-3\">\n                                    <div> Description</div>\n                                    <input type=\"text\" class=\"form-control\" id={{i}}description placeholder=\"Description of quete\" name=\"description\" [(ngModel)]=\"item.description\"\n                                        required>\n                                </div>\n\n                                <div class=\"col-sm-2\">\n                                    <div>Qty</div>\n                                    <input type=\"number\" id={{i}}qty (change)=\"math(i)\" (blur)=\"findTotal()\" class=\"form-control\" placeholder=\"0\" name=\"qty\"\n                                        [(ngModel)]=\"item.qty\" value='1' required>\n                                </div>\n\n                                <div class=\"col-sm-2\">\n                                    <div>Unit Price</div>\n                                    <input type=\"number\" class=\"form-control\" id={{i}}unit-p placeholder=\"0\" name=\"unitprice\" [(ngModel)]=\"item.unitprice\" required>\n                                </div>\n\n                                <div class=\"col-sm-2 col-md-1\">\n                                    <div>Discount</div>\n                                    <input type=\"number\" class=\"form-control\" (change)=\"math(i)\" (blur)=\"findTotal()\" placeholder=\"%\" id={{i}}discount value=0\n                                        name=\"discount\" [(ngModel)]=\"item.discount\" required>\n                                </div>\n                                <div class=\"col-sm-2 \">\n                                    <div>Amount</div>\n\n                                    <input type=\"number\" id={{i}}amount class=\"form-control\" placeholder=\"0%\" [(ngModel)]=\"item.amount\" (focus)=\"findTotal()\"\n                                        name=\"qwe\" required>\n                                    <br>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div id=\"destination\"> </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-2\">\n                        <button (click)=\"add(test)\" class=\"btn btn-warning btn-fill btn-sm \"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>More</button>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        &nbsp;\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <input value=\"0\" type=\"number\" class=\"form-control\" placeholder=\"Total\" (focus)=\"findTotal()\" [(ngModel)]=\"total\" name=\"total\"\n                            id=\"total\" required>\n                    </div>\n                </div>\n\n\n\n\n\n\n                <br>\n                <br>\n\n\n\n\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div> Delivery Date</div>\n                        <input class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\" type=\"text\" [(ngModel)]=\"entry.deliverydate\"\n                            name=\"issuedate\" #deliverydate=\"ngModel\" #deliverydate (blur)=\"entry.deliverydate=deliverydate.value\"\n                            required>\n                    </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div> Delivery Address</div>\n                        <textarea rows=\"4\" cols=\"20\" p class=\"form-control\" [(ngModel)]=\"entry.deliveryaddress\" name=\"deliveryaddress\" #deliveryaddress=\"ngModel\"\n                            [rangeLength]=\"[0, 35]\"></textarea>\n                        <p *ngIf=\"deliveryaddress.errors?.rangeLength\">must be less then 10 words</p>\n                    </div>\n                </div>\n\n                <br>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div> Delivery Instruction</div>\n                        <textarea type=\"text\" rows=\"4\" cols=\"20\" class=\"form-control\" placeholder=\"optional\" [(ngModel)]=\"entry.deliveryinstructions\"\n                            #deliveryinstructions=\"ngModel\" [rangeLength]=\"[0, 100]\" name=\"deliveryinstructions\" required></textarea>\n                        <p *ngIf=\"deliveryinstructions.errors?.rangeLength\">must be less then 100 worlds</p>\n                    </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div> Authorized</div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Authoerised by\" [(ngModel)]=\"entry.authorizedby\" name=\"authorizedby\"\n                            #authorizedby=\"ngModel\" [rangeLength]=\"[0, 15]\" required>\n                        <p *ngIf=\"authorizedby.errors?.rangeLength\">must be less then 15 words</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"btn btn-primary btn-fill btn-sm\" (click)=\"save(entry) \" [routerLink]=\"['/app-POP/PurchaseOrder']\" type=\"button\">Save</button>\n\n            </div>\n\n        </form>\n\n    </div>\n\n</div>"

/***/ }

})