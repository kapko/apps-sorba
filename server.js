(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/router'), require('@sorba-app/sorba-ui-components'), require('@ionic/angular'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('contacts', ['exports', '@angular/forms', '@angular/router', '@sorba-app/sorba-ui-components', '@ionic/angular', '@angular/core'], factory) :
    (factory((global.contacts = {}),global.ng.forms,global.ng.router,global.sorbaUiComponents,global.angular,global.ng.core));
}(this, (function (exports,forms,router,sorbaUiComponents,angular,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsService = /** @class */ (function () {
        function ContactsService(env) {
            console.log('env', env);
        }
        /**
         * @return {?}
         */
        ContactsService.prototype.getEnv = /**
         * @return {?}
         */
            function () {
                // return environment;
            };
        ContactsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ContactsService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['env',] }] }
            ];
        };
        /** @nocollapse */ ContactsService.ngInjectableDef = i0.defineInjectable({ factory: function ContactsService_Factory() { return new ContactsService(i0.inject("env")); }, token: ContactsService, providedIn: "root" });
        return ContactsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsComponent = /** @class */ (function () {
        function ContactsComponent(contactService, router$$1) {
            this.contactService = contactService;
            this.router = router$$1;
            this.searchControl = new forms.FormControl('some text', []);
            this.searchControl
                .valueChanges
                .subscribe(( /**
         * @param {?} res
         * @return {?}
         */function (res) {
                console.log(res);
            }));
        }
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.goHome = /**
         * @return {?}
         */
            function () {
                this.router.navigate(['/']);
            };
        /**
         * @param {?} path
         * @return {?}
         */
        ContactsComponent.prototype.getRouter = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                this.router.navigate([this.router.url + "/" + path]);
            };
        ContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contacts',
                        template: "<lib-header></lib-header>\n\n<sr-content>\n  <sr-container noPadding=\"horizontal\">\n    <sr-content-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\">\n            <lib-search-contacts [control]=\"searchControl\"></lib-search-contacts>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim perferendis praesentium quas sint. Accusamus consequuntur eaque, explicabo facere fugiat illo ipsa, ipsam labore libero nemo nobis numquam quisquam sequi.\n          </ion-col>\n          <ion-col size=\"9\">\n            2222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto assumenda at beatae blanditiis consectetur consequatur cum debitis delectus deleniti dolorem ducimus eaque esse et, excepturi illo in ipsum iure libero, molestiae natus nesciunt nobis nulla obcaecati officia placeat quae quibusdam quisquam ratione reiciendis sapiente sed soluta totam veritatis voluptatibus voluptatum? Accusantium amet asperiores assumenda beatae dicta dolor dolore dolorum ducimus eligendi ex fugiat laboriosam laudantium maiores non odio odit officiis pariatur placeat, porro quaerat quibusdam quo quod ratione reiciendis sit sunt vitae? Cumque enim illo sapiente. Architecto culpa libero repellendus voluptatibus? Aliquid blanditiis, ducimus enim laudantium libero magnam, nostrum, obcaecati officia perspiciatis quam quidem ratione voluptas. Ab asperiores debitis dolores eius harum illo maiores nam quas vero voluptas! Aspernatur culpa debitis dolor doloremque dolores eveniet facere hic itaque laboriosam minima nihil nulla quae, quasi, tempore ullam. Earum, obcaecati, repellat! Alias beatae commodi debitis dicta eaque eos, esse, et ipsa iure minus nemo nesciunt nisi officia pariatur perferendis provident quaerat quisquam ratione recusandae reprehenderit repudiandae sed sit soluta unde veritatis vitae voluptatem voluptatum? Ab adipisci alias animi consequatur deleniti dicta dolor eos error facilis fugiat, hic ipsa laborum laudantium libero magnam minima nostrum, perferendis quis ratione sint voluptatem, voluptatibus?\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </sr-content-card>\n  </sr-container>\n  <sr-footer></sr-footer>\n</sr-content>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ContactsComponent.ctorParameters = function () {
            return [
                { type: ContactsService },
                { type: router.Router }
            ];
        };
        return ContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UsersComponent = /** @class */ (function () {
        function UsersComponent(router$$1) {
            this.router = router$$1;
        }
        /**
         * @return {?}
         */
        UsersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        UsersComponent.prototype.goHome = /**
         * @return {?}
         */
            function () {
                this.router.navigate(['/']);
            };
        UsersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-users',
                        template: "<ion-content>\n  <br /><br /><br /><br />\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title (click)=\"goHome()\">Card Title</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile, and\n      climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n  <router-outlet></router-outlet>\n</ion-content>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        UsersComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return UsersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            console.log('header');
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        HeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-header',
                        template: "<sr-header>\n  <sr-header-inner-block blockPosition=\"left\">\n    <sr-button buttonType=\"icon\" svgIcon=\"arrow-left\"></sr-button>\n    <sr-heading headingText=\"Contacts\" headingType=\"h1\"></sr-heading>\n  </sr-header-inner-block>\n\n  <sr-header-title>\n    <sr-icon class=\"notification-icon\" svgIcon=\"notifications-filled\" iconSize=\"36\"></sr-icon>\n  </sr-header-title>\n\n  <sr-header-inner-block blockPosition=\"right\">\n    <sr-menu\n      menuButtonType=\"icon\"\n      svgIcon=\"home\"\n      badgeContent=\"2\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      menuWidth=\"large\"\n    >\n      <sr-menu-body noPadding=\"true\">\n        <sr-notifications [data]=\"[{name: 'some', value: 1}]\"></sr-notifications>\n      </sr-menu-body>\n      <sr-button buttonType=\"additional\" [isBoxed]=\"true\" buttonText=\"Show all\"></sr-button>\n    </sr-menu>\n\n    <sr-menu menuButtonType=\"avatar\" xPosition=\"before\" yPosition=\"below\" avatarValue=\"y\">\n      <sr-menu-header class=\"main-menu-item\">\n        <sr-avatar [avatarSize]=\"48\" avatarValue=\"C\"></sr-avatar>\n        <sr-text>Codemotion</sr-text>\n      </sr-menu-header>\n      <sr-menu-footer itemsPosition=\"end\">\n        <sr-button buttonType=\"primary\" buttonText=\"Sign out\"></sr-button>\n      </sr-menu-footer>\n    </sr-menu>\n\n  </sr-header-inner-block>\n</sr-header>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return []; };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchContactsComponent = /** @class */ (function () {
        function SearchContactsComponent() {
        }
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                console.log(this.control);
            };
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} text
         * @return {?}
         */
        SearchContactsComponent.prototype.inputChangeHandler = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                console.log(text);
            };
        SearchContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-search-contacts',
                        template: "<sr-input-field\n  inputType=\"text\"\n  labelText=\"Search\"\n  (changeHandler)=\"inputChangeHandler($event)\"\n  [formControl]=\"control\"\n  [errorMessages]=\"null\"\n></sr-input-field>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SearchContactsComponent.ctorParameters = function () { return []; };
        SearchContactsComponent.propDecorators = {
            control: [{ type: i0.Input }]
        };
        return SearchContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            sorbaUiComponents.SorbaUiComponentsModule,
                            angular.IonicModule
                        ],
                        exports: [
                            sorbaUiComponents.SorbaUiComponentsModule,
                            angular.IonicModule,
                            // common components
                            HeaderComponent,
                            SearchContactsComponent
                        ],
                        declarations: [
                            HeaderComponent,
                            SearchContactsComponent
                        ],
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: 'contacts',
            component: ContactsComponent
        },
        {
            path: 'users',
            component: UsersComponent
        },
        {
            path: '**',
            redirectTo: 'contacts'
        }
    ];
    var ContactsModule = /** @class */ (function () {
        function ContactsModule() {
        }
        ContactsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ContactsComponent,
                            UsersComponent,
                        ],
                        exports: [
                            ContactsComponent,
                            UsersComponent,
                        ],
                        imports: [
                            SharedModule,
                            router.RouterModule.forChild(routes)
                        ],
                        providers: [ContactsService]
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

    exports.ContactsModule = ContactsModule;
    exports.ɵe = HeaderComponent;
    exports.ɵf = SearchContactsComponent;
    exports.ɵd = SharedModule;
    exports.ɵa = ContactsComponent;
    exports.ɵb = ContactsService;
    exports.ɵc = UsersComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=contacts.umd.js.map