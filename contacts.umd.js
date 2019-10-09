(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('contacts', ['exports', '@angular/core', '@ionic/angular'], factory) :
    (factory((global.contacts = {}),global.ng.core,global.angular));
}(this, (function (exports,i0,angular) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsService = /** @class */ (function () {
        function ContactsService() {
        }
        ContactsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ContactsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ContactsService.ngInjectableDef = i0.defineInjectable({ factory: function ContactsService_Factory() { return new ContactsService(); }, token: ContactsService, providedIn: "root" });
        return ContactsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsComponent = /** @class */ (function () {
        function ContactsComponent() {
        }
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contacts',
                        template: "<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n    <ion-card-title>Card Title</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    Keep close to Nature's heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n  </ion-card-content>\n</ion-card>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ContactsComponent.ctorParameters = function () { return []; };
        return ContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsModule = /** @class */ (function () {
        function ContactsModule() {
        }
        ContactsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ContactsComponent],
                        exports: [
                            ContactsComponent
                        ],
                        imports: [
                            angular.IonicModule
                        ]
                    },] }
        ];
        return ContactsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ContactsService = ContactsService;
    exports.ContactsComponent = ContactsComponent;
    exports.ContactsModule = ContactsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=contacts.umd.js.map