(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/platform-browser'), require('@angular/router'), require('@sorba-app/sorba-ui-components'), require('@ionic/angular'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('contacts', ['exports', '@angular/forms', '@angular/platform-browser', '@angular/router', '@sorba-app/sorba-ui-components', '@ionic/angular', '@angular/core'], factory) :
    (factory((global.contacts = {}),global.ng.forms,global.ng.platformBrowser,global.ng.router,global.sorbaUiComponents,global.angular,global.ng.core));
}(this, (function (exports,forms,platformBrowser,router,sorbaUiComponents,angular,i0) { 'use strict';

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
    /** @type {?} */
    var menu = [
        {
            menuItemIcon: 'contact',
            menuItemName: 'Contact list',
            menuItemLink: '#/watcher/contacts',
            subMenu: []
        },
        {
            menuItemIcon: 'outlook',
            menuItemName: 'Outlook export',
            menuItemLink: '#/watcher/contacts',
            subMenu: []
        },
        {
            menuItemIcon: 'report',
            menuItemName: 'Reports',
            menuItemLink: '#/watcher/contacts',
            subMenu: [
                {
                    subMenuItemName: 'Number ranges',
                    subMenuItemLink: '#/watcher/contacts'
                },
                {
                    subMenuItemName: 'Default values',
                    subMenuItemLink: '#/watcher/contacts'
                },
                {
                    subMenuItemName: 'Address import',
                    subMenuItemLink: '#/watcher/contacts'
                }
            ]
        },
        {
            menuItemIcon: 'mutations',
            menuItemName: 'Global mutations',
            menuItemLink: '#/watcher/contacts',
            subMenu: []
        },
        {
            menuItemIcon: 'settings-filled',
            menuItemName: 'Settings',
            menuItemLink: '#/watcher/contacts',
            subMenu: [
                {
                    subMenuItemName: 'Number ranges',
                    subMenuItemLink: '#/watcher/contacts'
                },
                {
                    subMenuItemName: 'Default values',
                    subMenuItemLink: '#/watcher/contacts'
                },
                {
                    subMenuItemName: 'Address import',
                    subMenuItemLink: '#/watcher/contacts'
                },
                {
                    subMenuItemName: 'Subdivisions',
                    subMenuItemLink: '#/watcher/contacts'
                }
            ]
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsComponent = /** @class */ (function () {
        function ContactsComponent(contactService, router$$1) {
            this.contactService = contactService;
            this.router = router$$1;
            this.menuData = menu;
            this.searchControl = new forms.FormControl('some text', []);
            this.searchControl.valueChanges.subscribe(( /**
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
            function () {
                this.windowWidth = window.innerWidth;
            };
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
                        template: "<lib-header></lib-header>\n\n<sr-sidemenu\n  openMenuText=\"menu\"\n  closeMenuText=\"close\"\n  [data]=\"menuData\"\n  [windowWidth]=\"windowWidth\"\n  [isMenuFloat]=\"false\"\n></sr-sidemenu>\n\n<sr-content>\n  <sr-container noPadding=\"horizontal\">\n    <sr-content-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\">\n            <lib-search-contacts\n              [control]=\"searchControl\"\n            ></lib-search-contacts>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n            enim perferendis praesentium quas sint. Accusamus consequuntur\n            eaque, explicabo facere fugiat illo ipsa, ipsam labore libero nemo\n            nobis numquam quisquam sequi.\n          </ion-col>\n          <ion-col size=\"9\">\n            2222 Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Aliquam animi architecto assumenda at beatae blanditiis consectetur\n            consequatur cum debitis delectus deleniti dolorem ducimus eaque esse\n            et, excepturi illo in ipsum iure libero, molestiae natus nesciunt\n            nobis nulla obcaecati officia placeat quae quibusdam quisquam\n            ratione reiciendis sapiente sed soluta totam veritatis voluptatibus\n            voluptatum? Accusantium amet asperiores assumenda beatae dicta dolor\n            dolore dolorum ducimus eligendi ex fugiat laboriosam laudantium\n            maiores non odio odit officiis pariatur placeat, porro quaerat\n            quibusdam quo quod ratione reiciendis sit sunt vitae? Cumque enim\n            illo sapiente. Architecto culpa libero repellendus voluptatibus?\n            Aliquid blanditiis, ducimus enim laudantium libero magnam, nostrum,\n            obcaecati officia perspiciatis quam quidem ratione voluptas. Ab\n            asperiores debitis dolores eius harum illo maiores nam quas vero\n            voluptas! Aspernatur culpa debitis dolor doloremque dolores eveniet\n            facere hic itaque laboriosam minima nihil nulla quae, quasi, tempore\n            ullam. Earum, obcaecati, repellat! Alias beatae commodi debitis\n            dicta eaque eos, esse, et ipsa iure minus nemo nesciunt nisi officia\n            pariatur perferendis provident quaerat quisquam ratione recusandae\n            reprehenderit repudiandae sed sit soluta unde veritatis vitae\n            voluptatem voluptatum? Ab adipisci alias animi consequatur deleniti\n            dicta dolor eos error facilis fugiat, hic ipsa laborum laudantium\n            libero magnam minima nostrum, perferendis quis ratione sint\n            voluptatem, voluptatibus?\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </sr-content-card>\n  </sr-container>\n\n  <sr-footer></sr-footer>\n</sr-content>\n",
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
        function HeaderComponent(sanitizer, router$$1) {
            this.sanitizer = sanitizer;
            this.router = router$$1;
            console.log('header');
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} gradient
         * @return {?}
         */
        HeaderComponent.prototype.style = /**
         * @param {?} gradient
         * @return {?}
         */
            function (gradient) {
                /** @type {?} */
                var colorStop1 = "var(" + gradient + ")";
                /** @type {?} */
                var colorStop2 = 'var(--sr-gradient-blue)';
                return this.sanitizer.bypassSecurityTrustStyle("--color-stop-1: " + colorStop1 + "; --color-stop-2: " + colorStop2);
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.getRoot = /**
         * @return {?}
         */
            function () {
                this.router.navigate(['/']);
            };
        HeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-header',
                        template: "<sr-header>\n  <sr-header-inner-block blockPosition=\"left\">\n    <sr-button\n      (clickHandler)=\"getRoot()\"\n      buttonType=\"icon\"\n      svgIcon=\"arrow-left\"\n    ></sr-button>\n    <sr-heading headingText=\"Contacts\" headingType=\"h1\"></sr-heading>\n  </sr-header-inner-block>\n\n  <sr-header-title>\n    <sr-icon\n      [style]=\"style('--sr-gradient-cyan')\"\n      svgIcon=\"ic-c\"\n      iconSize=\"36\"\n    ></sr-icon>\n  </sr-header-title>\n\n  <sr-header-inner-block blockPosition=\"right\">\n    <sr-menu\n      menuButtonType=\"icon\"\n      svgIcon=\"notifications\"\n      badgeContent=\"2\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      menuWidth=\"large\"\n    >\n      <sr-menu-body noPadding=\"true\">\n        <sr-notifications\n          [data]=\"[\n            {\n              text:\n                '<b>Michael Klein</b> has shared the <b>Werden Bau</b> project with you.',\n              time: '5h',\n              unread: true\n            },\n            {\n              text: 'You have a new message from <b>Andreas Kolt.</b>',\n              time: 'Yesterday',\n              unread: true\n            },\n            {\n              text:\n                '<b>Martina M\u00FCller</b> has shared the <b>Dogo Gartenbau</b> contact with you.',\n              time: 'May 27',\n              unread: true\n            },\n            {\n              text: 'You have joined to <b>Sorba Web Container</b>.',\n              time: 'January 5, 2018',\n              unread: false\n            }\n          ]\"\n        ></sr-notifications>\n      </sr-menu-body>\n      <sr-button\n        buttonType=\"additional\"\n        [isBoxed]=\"true\"\n        buttonText=\"Show all\"\n      ></sr-button>\n    </sr-menu>\n\n    <sr-menu\n      menuButtonType=\"avatar\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      avatarValue=\"y\"\n    >\n      <sr-menu-header class=\"main-menu-item\">\n        <sr-avatar [avatarSize]=\"48\" avatarValue=\"C\"></sr-avatar>\n        <sr-text>Codemotion</sr-text>\n      </sr-menu-header>\n      <sr-menu-footer itemsPosition=\"end\">\n        <sr-button buttonType=\"primary\" buttonText=\"Sign out\"></sr-button>\n      </sr-menu-footer>\n    </sr-menu>\n  </sr-header-inner-block>\n</sr-header>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer },
                { type: router.Router }
            ];
        };
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
            function () { };
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
                        template: "<sr-input-field\n  inputType=\"text\"\n  labelText=\"Search\"\n  [formControl]=\"control\"\n></sr-input-field>\n",
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
                        imports: [sorbaUiComponents.SorbaUiComponentsModule, angular.IonicModule],
                        exports: [
                            sorbaUiComponents.SorbaUiComponentsModule,
                            angular.IonicModule,
                            // common components
                            HeaderComponent,
                            SearchContactsComponent
                        ],
                        declarations: [HeaderComponent, SearchContactsComponent]
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
                        declarations: [ContactsComponent, UsersComponent],
                        exports: [ContactsComponent, UsersComponent],
                        imports: [SharedModule, router.RouterModule.forChild(routes)],
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