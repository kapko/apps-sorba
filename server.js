(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ionic-native/in-app-browser/ngx'), require('@ionic-native/in-app-browser/ngx/index'), require('graphql-tag'), require('@sorba-app/sorba-ui-components'), require('@ionic/angular'), require('@angular/common'), require('@agm/core'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/forms'), require('@ionic-native/document-viewer/ngx'), require('@ionic-native/file/ngx'), require('@ionic-native/file-opener/ngx'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/scrolling'), require('@angular/core'), require('apollo-angular'), require('apollo-cache-inmemory')) :
    typeof define === 'function' && define.amd ? define('contacts', ['exports', '@ionic-native/in-app-browser/ngx', '@ionic-native/in-app-browser/ngx/index', 'graphql-tag', '@sorba-app/sorba-ui-components', '@ionic/angular', '@angular/common', '@agm/core', '@angular/platform-browser', '@angular/router', '@angular/forms', '@ionic-native/document-viewer/ngx', '@ionic-native/file/ngx', '@ionic-native/file-opener/ngx', 'rxjs', 'rxjs/operators', '@angular/cdk/scrolling', '@angular/core', 'apollo-angular', 'apollo-cache-inmemory'], factory) :
    (factory((global.contacts = {}),global.ngx,global.i1,global.gql,global.sorbaUiComponents,global.i1$1,global.ng.common,global.core,global.ng.platformBrowser,global.ng.router,global.ng.forms,global.ngx$1,global.ngx$2,global.ngx$3,global.rxjs,global.rxjs.operators,global.ng.cdk.scrolling,global.ng.core,global.i1$2,global.apolloCacheInmemory));
}(this, (function (exports,ngx,i1,gql,sorbaUiComponents,i1$1,common,core,platformBrowser,router,forms,ngx$1,ngx$2,ngx$3,rxjs,operators,scrolling,i0,i1$2,apolloCacheInmemory) { 'use strict';

    gql = gql ? gql['default'] : gql;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var EContactPath = {
        contacts: 'contacts',
        contact: 'contact',
        notifications: 'notifications',
    };
    /** @enum {string} */
    var EContactTitles = {
        contacts: 'Contacts',
    };
    /** @enum {string} */
    var EContactType = {
        user: 'user',
        company: 'company',
        all: 'all',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var storageKeys = {
        USER: 'user',
        TOKEN: 'token',
        DOMAINS: 'domains',
        ACTIVE_LANGUAGE: 'activeLanguage',
        SHOW_ONBOARDING_PAGE: 'showOnboardingPage',
        ACTIVE_DOMAIN: 'activeDomain',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var selectedMenu = [
        {
            count: 0,
            type: EContactType.all,
            label: 'All contacts',
            active: true
        },
        {
            count: 0,
            type: EContactType.user,
            label: 'User contacts'
        },
        {
            count: 0,
            type: EContactType.company,
            label: 'Company contacts'
        }
    ];
    /** @type {?} */
    var menu = [
        {
            menuItemIcon: 'contact',
            menuItemName: 'Contact list',
            menuItemLink: '#/contacts/contact',
            subMenu: []
        },
        {
            menuItemIcon: 'outlook',
            menuItemName: 'Outlook export',
            menuItemLink: '#/contacts/contact',
            subMenu: []
        },
        {
            menuItemIcon: 'report',
            menuItemName: 'Reports',
            menuItemLink: '#/contacts/contact',
            subMenu: [
                {
                    subMenuItemName: 'Number ranges',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Default values',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Address import',
                    subMenuItemLink: '#/contacts/contact'
                }
            ]
        },
        {
            menuItemIcon: 'mutations',
            menuItemName: 'Global mutations',
            menuItemLink: '#/contacts/contact',
            subMenu: []
        },
        {
            menuItemIcon: 'settings-filled',
            menuItemName: 'Settings',
            menuItemLink: '#/contacts/contact',
            subMenu: [
                {
                    subMenuItemName: 'Number ranges',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Default values',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Address import',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Subdivisions',
                    subMenuItemLink: '#/contacts/contact'
                }
            ]
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routePaths = {
        PRIVACY_POLICY: 'privacy-policy',
        TERMS_OF_SERVICE: '/assets/docs/2019_AGB_SORBA_EDV_AG.pdf',
        HELP_CENTER: 'https://support.sorba.ch/hc/de'
    };
    /** @type {?} */
    var iabOptions = {
        clearcache: 'yes',
        clearsessioncache: 'yes',
        hideurlbar: 'yes',
        location: 'no',
        zoom: 'no'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var platforms = {
        MOBILE: 'mobile',
        ANDROID: 'android',
        IOS: 'ios',
        MOBILE_WEB: 'mobileweb',
        DESKTOP: 'desktop',
        TABLET: 'tablet',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsHelper = /** @class */ (function () {
        function ContactsHelper() {
            this.isMobile = window.innerWidth < 768;
            this.isDesktop = window.innerWidth > 1023;
            this.desktopHeight = 'calc(100vh - var(--header-height) - var(--ion-safe-area-top, 0) - 277px)';
            this.activeContact = new rxjs.BehaviorSubject(null);
            this.activeLanguage$ = new rxjs.BehaviorSubject('ENGLISH');
            this.headerData = new rxjs.BehaviorSubject({
                title: EContactTitles.contacts,
                path: '/'
            });
        }
        /**
         * @param {?} users
         * @param {?} text
         * @return {?}
         */
        ContactsHelper.prototype.searchBySymbol = /**
         * @param {?} users
         * @param {?} text
         * @return {?}
         */
            function (users, text) {
                /** @type {?} */
                var searchText = text.toLowerCase();
                return users
                    .map(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                    var e_1, _a;
                    /** @type {?} */
                    var key;
                    try {
                        for (var _b = __values(Object.keys(item)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            key = _c.value;
                            if (item[key] &&
                                key !== 'geocode_address' &&
                                ("" + item[key]).toLowerCase().includes(searchText)) {
                                return __assign({}, item, { subText: item[key] });
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }))
                    .filter(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return !!item; }));
            };
        /**
         * @param {?} height
         * @return {?}
         */
        ContactsHelper.prototype.getMobileHeight = /**
         * @param {?} height
         * @return {?}
         */
            function (height) {
                return "calc(100vh - var(--header-height) - var(--ion-safe-area-top, 0) - " + height + ")";
            };
        // public searchBySymbol(users: IContact[], text: string): IContact[] {
        //   const searchText = text.toLowerCase();
        //
        //   return users.reduce((result, item) => {
        //     let key;
        //
        //     for (key of Object.keys(item)) {
        //       if (item[key] && `${item[key]}`.toLowerCase().includes(searchText)) {
        //         result.push({ ...item, ...{ subText: item[key] } });
        //       }
        //     }
        //
        //     return result;
        //   }, []);
        // }
        // public searchBySymbol(users: IContact[], text: string): IContact[] {
        //   const searchText = text.toLowerCase();
        //
        //   return users.reduce((result, item) => {
        //     let key;
        //
        //     for (key of Object.keys(item)) {
        //       if (item[key] && `${item[key]}`.toLowerCase().includes(searchText)) {
        //         result.push({ ...item, ...{ subText: item[key] } });
        //       }
        //     }
        //
        //     return result;
        //   }, []);
        // }
        /**
         * @param {?} type
         * @param {?} searchType
         * @return {?}
         */
        ContactsHelper.prototype.filterByType =
            // public searchBySymbol(users: IContact[], text: string): IContact[] {
            //   const searchText = text.toLowerCase();
            //
            //   return users.reduce((result, item) => {
            //     let key;
            //
            //     for (key of Object.keys(item)) {
            //       if (item[key] && `${item[key]}`.toLowerCase().includes(searchText)) {
            //         result.push({ ...item, ...{ subText: item[key] } });
            //       }
            //     }
            //
            //     return result;
            //   }, []);
            // }
            /**
             * @param {?} type
             * @param {?} searchType
             * @return {?}
             */
            function (type, searchType) {
                return type === searchType || searchType === EContactType.all;
            };
        ContactsHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ContactsHelper.ctorParameters = function () { return []; };
        /** @nocollapse */ ContactsHelper.ngInjectableDef = i0.defineInjectable({ factory: function ContactsHelper_Factory() { return new ContactsHelper(); }, token: ContactsHelper, providedIn: "root" });
        return ContactsHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KeyboardHelper = /** @class */ (function () {
        function KeyboardHelper() {
            var _this = this;
            this.keyboardHeight$ = new rxjs.BehaviorSubject(null);
            window.addEventListener('keyboardDidHide', ( /**
             * @return {?}
             */function () {
                return _this.keyboardHeight$.next(null);
            }));
            window.addEventListener('keyboardWillShow', ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                return _this.keyboardHeight$.next(event['keyboardHeight']);
            }));
        }
        KeyboardHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        KeyboardHelper.ctorParameters = function () { return []; };
        /** @nocollapse */ KeyboardHelper.ngInjectableDef = i0.defineInjectable({ factory: function KeyboardHelper_Factory() { return new KeyboardHelper(); }, token: KeyboardHelper, providedIn: "root" });
        return KeyboardHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkRedirectHelper = /** @class */ (function () {
        function LinkRedirectHelper(iab) {
            this.iab = iab;
        }
        /**
         * @param {?} $event
         * @param {?} link
         * @return {?}
         */
        LinkRedirectHelper.prototype.redirect = /**
         * @param {?} $event
         * @param {?} link
         * @return {?}
         */
            function ($event, link) {
                $event.preventDefault();
                this.iab.create(link, '_blank', iabOptions);
            };
        LinkRedirectHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LinkRedirectHelper.ctorParameters = function () {
            return [
                { type: ngx.InAppBrowser }
            ];
        };
        /** @nocollapse */ LinkRedirectHelper.ngInjectableDef = i0.defineInjectable({ factory: function LinkRedirectHelper_Factory() { return new LinkRedirectHelper(i0.inject(i1.InAppBrowser)); }, token: LinkRedirectHelper, providedIn: "root" });
        return LinkRedirectHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlatformHelper = /** @class */ (function () {
        function PlatformHelper(plt) {
            this.plt = plt;
        }
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isMobileWeb = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.MOBILE_WEB);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isDesktop = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.DESKTOP);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isMobileApp = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.MOBILE);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isIOS = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.IOS);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isAndroid = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.ANDROID);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isTablet = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.TABLET);
            };
        PlatformHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PlatformHelper.ctorParameters = function () {
            return [
                { type: i1$1.Platform }
            ];
        };
        /** @nocollapse */ PlatformHelper.ngInjectableDef = i0.defineInjectable({ factory: function PlatformHelper_Factory() { return new PlatformHelper(i0.inject(i1$1.Platform)); }, token: PlatformHelper, providedIn: "root" });
        return PlatformHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactListRest = /** @class */ (function (_super) {
        __extends(ContactListRest, _super);
        function ContactListRest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.document = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query contacts($domain: String!, $start: UInt!, $end: UInt!) {\n            contactApps(domain: $domain, start: $start, end: $end) {\n                business_number\n                mobile_number\n                private_number\n                fax\n                website\n                address\n                logical20\n                name\n                id\n                postal_code\n                city\n                po_box\n                geocode_address {\n                    lat\n                    lon\n                }\n            }\n        }\n    "], ["\n        query contacts($domain: String!, $start: UInt!, $end: UInt!) {\n            contactApps(domain: $domain, start: $start, end: $end) {\n                business_number\n                mobile_number\n                private_number\n                fax\n                website\n                address\n                logical20\n                name\n                id\n                postal_code\n                city\n                po_box\n                geocode_address {\n                    lat\n                    lon\n                }\n            }\n        }\n    "])));
            return _this;
        }
        ContactListRest.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ContactListRest.ngInjectableDef = i0.defineInjectable({ factory: function ContactListRest_Factory() { return new ContactListRest(i0.inject(i1$2.Apollo)); }, token: ContactListRest, providedIn: "root" });
        return ContactListRest;
    }(i1$2.Query));
    var templateObject_1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguagesRest = /** @class */ (function (_super) {
        __extends(LanguagesRest, _super);
        function LanguagesRest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.document = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        query language{\n            languages\n        }\n    "], ["\n        query language{\n            languages\n        }\n    "])));
            return _this;
        }
        LanguagesRest.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ LanguagesRest.ngInjectableDef = i0.defineInjectable({ factory: function LanguagesRest_Factory() { return new LanguagesRest(i0.inject(i1$2.Apollo)); }, token: LanguagesRest, providedIn: "root" });
        return LanguagesRest;
    }(i1$2.Query));
    var templateObject_1$1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} items
     * @param {?} field
     * @return {?}
     */
    function convertToContactList(items, field) {
        /** @type {?} */
        var sorted = sortByABC(items, field);
        /** @type {?} */
        var grouped = groupByABC(sorted, field);
        return Object.keys(grouped).map(( /**
         * @param {?} key
         * @return {?}
         */function (key) {
            return ({
                groupTitle: key,
                groupData: grouped[key]
            });
        }));
    }
    /**
     * @param {?} items
     * @param {?} field
     * @return {?}
     */
    function sortByABC(items, field) {
        return items.sort(( /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */function (a, b) {
            return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
        }));
    }
    /**
     * @param {?} items
     * @param {?} field
     * @return {?}
     */
    function groupByABC(items, field) {
        return items.reduce(( /**
         * @param {?} result
         * @param {?} value
         * @return {?}
         */function (result, value) {
            result[value[field][0]] = result[value[field][0]] || [];
            result[value[field][0]].push(value);
            return result;
        }), {});
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GroupingPipe = /** @class */ (function () {
        function GroupingPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GroupingPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return convertToContactList(value, 'text');
            };
        GroupingPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'groupingContact'
                    },] }
        ];
        return GroupingPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsComponent = /** @class */ (function () {
        function ContactsComponent(storageService, urlUtils, appService, contactsHelper, contactListGQL, router$$1, cd, groupingContact, keyboardHelper) {
            this.storageService = storageService;
            this.urlUtils = urlUtils;
            this.appService = appService;
            this.contactsHelper = contactsHelper;
            this.contactListGQL = contactListGQL;
            this.router = router$$1;
            this.cd = cd;
            this.groupingContact = groupingContact;
            this.keyboardHelper = keyboardHelper;
            this.windowWidth = window.innerWidth;
            this.menuData = menu;
            this.showMenu = false;
            // observables
            this.menuItems$ = new rxjs.BehaviorSubject(null);
            this.activeContact$ = new rxjs.BehaviorSubject(null);
            this.contactsList$ = new rxjs.BehaviorSubject([]);
            this.contactsCopy = [];
            this.subject = new rxjs.Subject();
            this.isMobile = this.contactsHelper.isMobile;
            this.mobileHeight = this.contactsHelper.getMobileHeight('152px');
            this.searchText = '';
            this.itemsPerPage = 100;
            this.initialPage = 2000;
            this.getActiveLanguage();
            this.getActiveDomain();
            this.setContactsGql();
            this.uploadData();
            this.contactsHelper.headerData.next({
                title: EContactTitles.contacts,
                path: '/'
            });
        }
        Object.defineProperty(ContactsComponent.prototype, "menuFloat", {
            get: /**
             * @return {?}
             */ function () {
                return this.windowWidth < 1024 && this.windowWidth > 767;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.toggleMenu();
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                this.cd.detectChanges();
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.getHeightOfRightBlock = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this.isMobile) {
                    /** @type {?} */
                    var info = this.rightPanel &&
                        this.rightPanel.nativeElement &&
                        this.rightPanel.nativeElement.getElementsByClassName('contact-details-body');
                    /** @type {?} */
                    var desktopHeight = info &&
                        info[0] &&
                        info[0].offsetHeight > 48 &&
                        info[0].offsetHeight - 48;
                    this.desktopHeight = desktopHeight ? desktopHeight - 73 : 0;
                }
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.getActiveDomain = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.isMobile) {
                    this.activeDomainName = this.urlUtils.getSubDomain();
                }
                else {
                    this.appService
                        .getActiveDomain()
                        .pipe(operators.takeUntil(this.subject))
                        .subscribe(( /**
                 * @param {?} activeDomain
                 * @return {?}
                 */function (activeDomain) {
                        _this.activeDomainName = activeDomain;
                    }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.setContactsGql = /**
         * @private
         * @return {?}
         */
            function () {
                this.contactsGqlQuery = this.contactListGQL.watch({
                    domain: this.activeDomainName,
                    start: 0,
                    end: this.initialPage
                });
                this.contactsGql$ = this.contactsGqlQuery.valueChanges.pipe(operators.pluck('data', 'contactApps'));
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.getActiveLanguage = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.storageService.getValue(storageKeys.ACTIVE_LANGUAGE).then(( /**
                 * @param {?} language
                 * @return {?}
                 */function (language) {
                    if (language) {
                        _this.contactsHelper.activeLanguage$.next(language);
                    }
                }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ContactsComponent.prototype.selectContactItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.activeContact$.next(item);
                        this.contactsHelper.activeContact.next(item);
                        if (this.isMobile) {
                            this.router.navigate(["/" + EContactPath.contacts + "/" + item.id]);
                        }
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @param {?} text
         * @return {?}
         */
        ContactsComponent.prototype.searchEvent = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                this.searchText = text;
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.uploadData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.contactsGql$
                    .pipe(operators.takeUntil(this.subject), operators.map(( /**
             * @param {?} items
             * @return {?}
             */function (items) { return _this.countContacts(items); })))
                    .subscribe(( /**
             * @param {?} contacts
             * @return {?}
             */function (contacts) {
                    _this.contactsCopy = sortByABC(contacts, 'text');
                    _this.contactsList$.next(sortByABC(contacts, 'text'));
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.getHeightOfRightBlock();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.fetchMore = /**
         * @return {?}
         */
            function () {
                this.contactsGqlQuery.fetchMore({
                    variables: {
                        start: this.contactsCopy.length,
                        end: this.contactsCopy.length + this.itemsPerPage
                    },
                    updateQuery: ( /**
                     * @param {?} prev
                     * @param {?} __1
                     * @return {?}
                     */function (prev, _a) {
                        var fetchMoreResult = _a.fetchMoreResult;
                        if (!fetchMoreResult) {
                            return prev;
                        }
                        return Object.assign({}, prev, {
                            // @ts-ignore
                            contactApps: __spread(prev.contactApps, fetchMoreResult.contactApps)
                        });
                    })
                });
            };
        /**
         * @param {?} menuItem
         * @return {?}
         */
        ContactsComponent.prototype.filterByMenu = /**
         * @param {?} menuItem
         * @return {?}
         */
            function (menuItem) {
                var _this = this;
                /** @type {?} */
                var contacts = this.contactsCopy.filter(( /**
                 * @param {?} contact
                 * @return {?}
                 */function (contact) {
                    return _this.contactsHelper.filterByType(contact.type, menuItem.type);
                }));
                this.contactsList$.next(contacts);
                if (!this.isMobile) {
                    this.selectFirstContact();
                }
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        ContactsComponent.prototype.countContacts = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var companyCount = 0;
                /** @type {?} */
                var userCount = 0;
                /** @type {?} */
                var contacts = data.map(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    /** @type {?} */
                    var type;
                    // item field LOG20 = true === 'company type'
                    if (item.logical20) {
                        companyCount++;
                        type = EContactType.company;
                    }
                    else {
                        userCount++;
                        type = EContactType.user;
                    }
                    return Object.assign(item, { text: item.name, type: type, id: item.id });
                }));
                // total count of contacts
                this.setMenuCount({ companyCount: companyCount, userCount: userCount, contacts: contacts });
                return contacts;
            };
        /**
         * @private
         * @param {?} users
         * @return {?}
         */
        ContactsComponent.prototype.setMenuCount = /**
         * @private
         * @param {?} users
         * @return {?}
         */
            function (users) {
                this.menuItems$.next(selectedMenu.map(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    /** @type {?} */
                    var menuItem;
                    switch (item.type) {
                        case EContactType.user:
                            menuItem = { count: users.userCount };
                            break;
                        case EContactType.company:
                            menuItem = { count: users.companyCount };
                            break;
                        default:
                            menuItem = { count: users.contacts.length };
                    }
                    return Object.assign(item, menuItem);
                })));
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.selectFirstContact = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.contactsList$.pipe(operators.take(1)).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var contacts = _this.groupingContact.transform(res);
                    if (contacts &&
                        contacts.length &&
                        contacts[0] &&
                        contacts[0].groupData.length) {
                        /** @type {?} */
                        var groupData = contacts[0].groupData;
                        _this.selectContactItem(groupData[0]);
                    }
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.toggleMenu = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.keyboardHelper.keyboardHeight$
                    .pipe(operators.takeUntil(this.subject))
                    .subscribe(( /**
             * @param {?} height
             * @return {?}
             */function (height) {
                    _this.mobileHeight = _this.contactsHelper.getMobileHeight(height ? '96px' : '152px');
                    _this.showMenu = !!height;
                }));
            };
        ContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contacts',
                        template: "<!--sidebar-->\n<sr-sidemenu\n  *ngIf=\"!showMenu\"\n  openMenuText=\"menu\"\n  closeMenuText=\"close\"\n  [data]=\"menuData\"\n  [windowWidth]=\"windowWidth\"\n  [isMenuFloat]=\"menuFloat\"\n></sr-sidemenu>\n\n<sr-content-card\n  class=\"contacts-container\"\n  *ngIf=\"(contactsList$ | async)?.length; else loading\"\n>\n  <div class=\"left-panel\">\n    <header class=\"contacts-list-header\">\n      <div class=\"top-block\">\n        <lib-selected-menu\n          [items]=\"menuItems$ | async\"\n          (selectedEvent)=\"filterByMenu($event)\"\n        ></lib-selected-menu>\n        <sr-button\n          *ngIf=\"!showMenu\"\n          buttonType=\"icon\"\n          svgIcon=\"contact-add\"\n          class=\"contact-add\"\n        ></sr-button>\n      </div>\n\n      <lib-search-contacts\n        [searchList]=\"contactsList$ | async\"\n        (searchEvent)=\"searchEvent($event)\"\n        (selectContactItem)=\"selectContactItem($event)\"\n      ></lib-search-contacts>\n    </header>\n\n    <lib-scroller\n      *ngIf=\"!searchText.length\"\n      (fetchMore)=\"fetchMore()\"\n      [scrollHeight]=\"desktopHeight\"\n      [contacts]=\"contactsList$ | async\"\n    ></lib-scroller>\n  </div>\n\n  <!-- user details column-->\n  <div class=\"right-panel\" #rightPanel *ngIf=\"!isMobile\">\n    <div class=\"contact-details-body\">\n      <lib-contact-detail></lib-contact-detail>\n    </div>\n  </div>\n</sr-content-card>\n\n<ng-template #loading>\n  <sr-progress-spinner backdropColor=\"#fff\"></sr-progress-spinner>\n</ng-template>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [GroupingPipe],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".contacts-list-header .top-block{display:flex;align-items:center;justify-content:space-between;padding:14px 8px 14px 12px}.contacts-list-header .mat-button-wrapper sr-text{order:-1}.contacts-list-header .mat-icon-button.text{font-weight:600}.contact-add .mat-icon-button.icon{color:var(--sr-base-color)}.search-field .input-wrapper{display:flex;align-items:center;height:48px;padding:4px 16px 4px 28px;border-top:1px solid var(--sr-border-color);border-bottom:1px solid var(--sr-border-color)}.search-field .input-wrapper sr-icon{color:var(--base-gray-64)}.search-field .input-wrapper input{width:100%;padding:0;border:0;font-weight:600}.search-field .input-wrapper .search-icon{margin-right:16px}.search-field .no-data{display:block;padding:16px 16px 16px 68px}@media (max-width:767px){.contacts-container .contact-add{position:fixed;right:8px;bottom:8px;z-index:71}}ion-spinner{margin:0 auto;display:block}.info-section{padding:16px 12px;border-top:1px solid var(--sr-border-color)}.info-section .section-header{display:flex;align-items:center;justify-content:space-between;min-height:40px}.info-section .section-header sr-heading{color:var(--sr-light-text-color)}.info-section .section-body{margin:10px 0 8px}.info-section .section-info-field{display:flex}.info-section .section-info-field:not(:first-child){margin-top:11px}.info-section .section-info-field .field-content{flex-grow:1}.info-section .section-info-field .field-content.contact{display:flex}.info-section .section-info-field .field-content.contact sr-avatar{margin-right:12px}.info-section .section-info-field .field-content.contact sr-link{display:block;margin-top:6px}.info-section .section-info-field .field-content.project{display:flex}.info-section .section-info-field .field-content.project sr-icon{color:var(--base-gray-64)}.info-section .section-info-field .field-content.project sr-price-label{display:block;margin:6px 0 0}.info-section .section-info-field .field-content.project .icon-wrapper{width:32px;margin-right:12px;text-align:center}.info-section .section-info-field .field-content.project .divider{display:none}.info-section .section-info-field .field-content.project .field{display:block}@media (min-width:768px){.contacts-container .content-card{display:flex}.contacts-container .left-panel{width:263px;border-right:1px solid var(--sr-border-color);border-bottom-left-radius:5px;overflow:hidden}.contacts-container .right-panel{width:calc(100% - 263px)}.contacts-list-header .top-block{height:72px;padding:3px 16px 4px 24px}.filter-menu{min-width:226px;max-width:300px;margin:8px 0 0 -24px}.info-section{padding:23px 24px 21px}.info-section .section-body{margin:10px 0 6px}.info-section .section-info-field .field-content.project sr-price-label{display:inline-block;margin:0 0 0 5px}.info-section .section-info-field .field-content.project .icon-wrapper{width:32px;display:flex;justify-content:center;margin-right:12px}.info-section .section-info-field .field-content.project .divider{display:inline-block;margin:0 2px;color:var(--sr-light-text-color)}.info-section .section-info-field .field-content.project .field{display:inline-block}.info-section .section-info-field .field-content.project .field.status{display:block}}@media (min-width:1280px){.info-section .section-info-field{position:relative;cursor:pointer}.info-section .section-info-field sr-actions{opacity:0;visibility:hidden;transition:250ms}.info-section .section-info-field:hover sr-actions{opacity:1;visibility:visible}}"]
                    }] }
        ];
        /** @nocollapse */
        ContactsComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['storageService',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['urlUtils',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] },
                { type: ContactsHelper },
                { type: ContactListRest },
                { type: router.Router },
                { type: i0.ChangeDetectorRef },
                { type: GroupingPipe },
                { type: KeyboardHelper }
            ];
        };
        ContactsComponent.propDecorators = {
            rightPanel: [{ type: i0.ViewChild, args: ['rightPanel',] }],
            viewPort: [{ type: i0.ViewChild, args: ['viewPort',] }]
        };
        return ContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectedMenuComponent = /** @class */ (function () {
        function SelectedMenuComponent() {
            // pass data to choose item
            this.selectedEvent = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SelectedMenuComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.items) {
                    /** @type {?} */
                    var item = this.items.find(( /**
                     * @param {?} i
                     * @return {?}
                     */function (i) { return i.active; }));
                    this.selectedMenu = item.label + " (" + item.count + ")";
                    this.clickEvent(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        SelectedMenuComponent.prototype.clickEvent = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                // set active item
                this.items.map(( /**
                 * @param {?} i
                 * @return {?}
                 */function (i) { return (i.active = false); }));
                item.active = true;
                // set text for menu button text
                this.selectedMenu = item.label + " (" + item.count + ")";
                // pass params for EventEmitter(item)
                this.selectedEvent.emit(item);
            };
        SelectedMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-selected-menu',
                        template: "<sr-menu\n  menuButtonType=\"text\"\n  xPosition=\"after\"\n  yPosition=\"below\"\n  [buttonText]=\"selectedMenu\"\n  svgIcon=\"chevron-down\"\n  customMenuClass=\"filter-menu\"\n>\n  <sr-menu-body>\n    <sr-menu-item\n      (click)=\"clickEvent(item)\"\n      [hasCheckMark]=\"true\"\n      [class.active]=\"item.active\"\n      *ngFor=\"let item of items\"\n      itemsPosition=\"between\"\n    >\n      <sr-text>{{ item.label }} ({{ item.count }})</sr-text>\n    </sr-menu-item>\n  </sr-menu-body>\n</sr-menu>\n",
                        styles: [""]
                    }] }
        ];
        SelectedMenuComponent.propDecorators = {
            items: [{ type: i0.Input }],
            selectedEvent: [{ type: i0.Output }]
        };
        return SelectedMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(storageService, appService, urlUtils, sanitizer, router$$1, contactsHelper) {
            this.storageService = storageService;
            this.appService = appService;
            this.urlUtils = urlUtils;
            this.sanitizer = sanitizer;
            this.router = router$$1;
            this.contactsHelper = contactsHelper;
            this.isMobile = this.contactsHelper.isMobile;
            this.unsubscribe = new rxjs.Subject();
            this.headerData$ = this.contactsHelper.headerData;
            this.storageService.getValue(storageKeys.DOMAINS);
            this.getActiveDomain();
            this.getDomains();
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
            };
        /**
         * @private
         * @return {?}
         */
        HeaderComponent.prototype.getDomains = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var domains;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.storageService.getValue(storageKeys.DOMAINS)];
                            case 1:
                                domains = _a.sent();
                                this.domains = domains.filter(( /**
                                 * @param {?} domain
                                 * @return {?}
                                 */function (domain) {
                                    if (domain.name.toLowerCase() !== _this.activeDomainName) {
                                        return Object.assign(domain, { name: domain.name.toLowerCase() });
                                    }
                                }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        HeaderComponent.prototype.getActiveDomain = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.isMobile) {
                    this.activeDomainName = this.urlUtils.getSubDomain();
                }
                else {
                    this.appService
                        .getActiveDomain()
                        .pipe(operators.takeUntil(this.unsubscribe))
                        .subscribe(( /**
                 * @param {?} activeDomain
                 * @return {?}
                 */function (activeDomain) {
                        _this.activeDomainName = activeDomain;
                        _this.getDomains();
                    }));
                }
            };
        /**
         * @param {?} activeDomain
         * @return {?}
         */
        HeaderComponent.prototype.handleChangeDomain = /**
         * @param {?} activeDomain
         * @return {?}
         */
            function (activeDomain) {
                this.appService.handleChangeDomain(activeDomain);
            };
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
                var _this = this;
                this.headerData$
                    .pipe(operators.take(1))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) { return _this.router.navigate([data.path]); }));
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.getNotificationPage = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.headerData$.pipe(operators.take(1)).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this.router.navigate([data.path + "/" + EContactPath.notifications]);
                }));
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.logout = /**
         * @return {?}
         */
            function () {
                this.appService.logout();
            };
        HeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-header',
                        template: "<sr-header>\n  <sr-header-inner-block blockPosition=\"left\">\n    <sr-button\n      (clickHandler)=\"getRoot()\"\n      buttonType=\"icon\"\n      svgIcon=\"arrow-left\"\n    ></sr-button>\n    <sr-heading\n      *ngIf=\"!isMobile\"\n      [headingText]=\"(headerData$ | async)?.title\"\n      headingType=\"h1\"\n    ></sr-heading>\n  </sr-header-inner-block>\n\n  <sr-header-title *ngIf=\"!isMobile\">\n    <sr-icon\n      [style]=\"style('--sr-gradient-cyan')\"\n      svgIcon=\"ic-c\"\n      iconSize=\"36\"\n    ></sr-icon>\n  </sr-header-title>\n\n  <sr-header-inner-block blockPosition=\"right\">\n    <sr-menu\n      menuButtonType=\"icon\"\n      svgIcon=\"notifications\"\n      badgeContent=\"2\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      customMenuClass=\"notifications header-menu\"\n    >\n      <sr-menu-body noPadding=\"true\">\n        <sr-notifications\n          [data]=\"[\n            {\n              text:\n                '<b>Michael Klein</b> has shared the <b>Werden Bau</b> project with you.',\n              time: '5h',\n              unread: true\n            },\n            {\n              text: 'You have a new message from <b>Andreas Kolt.</b>',\n              time: 'Yesterday',\n              unread: true\n            },\n            {\n              text:\n                '<b>Martina M\u00FCller</b> has shared the <b>Dogo Gartenbau</b> contact with you.',\n              time: 'May 27',\n              unread: true\n            },\n            {\n              text: 'You have joined to <b>Sorba Web Container</b>.',\n              time: 'January 5, 2018',\n              unread: false\n            }\n          ]\"\n        ></sr-notifications>\n      </sr-menu-body>\n      <sr-button\n        buttonType=\"additional\"\n        [isBoxed]=\"true\"\n        (click)=\"getNotificationPage()\"\n        buttonText=\"Show all\"\n      ></sr-button>\n    </sr-menu>\n\n    <sr-menu\n      menuButtonType=\"avatar\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      [avatarValue]=\"activeDomainName[0]\"\n      customMenuClass=\"domains header-menu\"\n    >\n      <sr-menu-header class=\"main-menu-item\">\n        <sr-avatar\n          [avatarSize]=\"48\"\n          [avatarValue]=\"activeDomainName[0]\"\n        ></sr-avatar>\n        <sr-text>{{ activeDomainName }}</sr-text>\n      </sr-menu-header>\n\n      <sr-menu-body>\n        <sr-menu-item\n          *ngFor=\"let domain of domains\"\n          (click)=\"handleChangeDomain(domain?.name)\"\n        >\n          <sr-avatar\n            [avatarSize]=\"40\"\n            [avatarValue]=\"(domain?.name)[0]\"\n          ></sr-avatar>\n          <sr-text>{{ domain?.name }}</sr-text>\n        </sr-menu-item>\n      </sr-menu-body>\n\n      <sr-menu-footer itemsPosition=\"end\">\n        <sr-button\n          buttonType=\"primary\"\n          buttonText=\"Sign out\"\n          (clickHandler)=\"logout()\"\n        ></sr-button>\n      </sr-menu-footer>\n    </sr-menu>\n  </sr-header-inner-block>\n</sr-header>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['storageService',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['urlUtils',] }] },
                { type: platformBrowser.DomSanitizer },
                { type: router.Router },
                { type: ContactsHelper }
            ];
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchContactsComponent = /** @class */ (function () {
        function SearchContactsComponent(contactsHelper) {
            var _this = this;
            this.contactsHelper = contactsHelper;
            this.searchEvent = new i0.EventEmitter();
            this.selectContactItem = new i0.EventEmitter();
            this.search = new forms.FormControl('');
            this.subject = new rxjs.Subject();
            this.searchText = '';
            this.search.valueChanges
                .pipe(operators.takeUntil(this.subject))
                .subscribe(( /**
         * @param {?} text
         * @return {?}
         */function (text) { return _this.searchContact(text); }));
        }
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.searchList) {
                    this.searchListCopy = this.searchList;
                    this.searchContact(this.searchText);
                }
            };
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        /**
         * @param {?} contact
         * @return {?}
         */
        SearchContactsComponent.prototype.selectContact = /**
         * @param {?} contact
         * @return {?}
         */
            function (contact) {
                this.selectContactItem.emit(contact);
            };
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.clearInput = /**
         * @return {?}
         */
            function () {
                this.search.setValue('');
            };
        /**
         * @private
         * @param {?} text
         * @return {?}
         */
        SearchContactsComponent.prototype.searchContact = /**
         * @private
         * @param {?} text
         * @return {?}
         */
            function (text) {
                this.searchText = text;
                this.searchEvent.emit(text);
                this.setTagHighLight(text);
                this.searchList = this.contactsHelper.searchBySymbol(this.searchListCopy, text);
            };
        /**
         * @private
         * @param {?} text
         * @return {?}
         */
        SearchContactsComponent.prototype.setTagHighLight = /**
         * @private
         * @param {?} text
         * @return {?}
         */
            function (text) {
                var _this = this;
                if (text.length) {
                    /** @type {?} */
                    var regex_1 = new RegExp(text, 'ig');
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        var e_1, _a;
                        if (_this.searchContent && _this.searchContent.nativeElement) {
                            /** @type {?} */
                            var content = _this.searchContent.nativeElement.getElementsByClassName('info-field');
                            if (content.length) {
                                /** @type {?} */
                                var key = void 0;
                                try {
                                    for (var content_1 = __values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
                                        key = content_1_1.value;
                                        /** @type {?} */
                                        var found = key.textContent.match(regex_1);
                                        /** @type {?} */
                                        var foundText = found && found.length && found[0];
                                        /** @type {?} */
                                        var newText = key.textContent.replace(regex_1, "<span class=\"highlight\">" + foundText + "</span>");
                                        key.innerHTML = newText;
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (content_1_1 && !content_1_1.done && (_a = content_1.return))
                                            _a.call(content_1);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                            }
                        }
                    }));
                }
            };
        SearchContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-search-contacts',
                        template: "<div class=\"bottom-block\">\n  <div class=\"search-field\">\n    <div class=\"input-wrapper\">\n      <sr-icon svgIcon=\"search\" class=\"search-icon\"></sr-icon>\n      <input type=\"search\" placeholder=\"Search\" [formControl]=\"search\" />\n      <sr-button\n        *ngIf=\"search.value.length\"\n        buttonType=\"icon\"\n        svgIcon=\"cross\"\n        (clickHandler)=\"clearInput()\"\n      ></sr-button>\n    </div>\n\n    <div *ngIf=\"search.value.length\" class=\"search-result\" #searchContent>\n      <sr-scroll-container\n        maxHeight=\"500px\"\n        [scrollIndicators]=\"true\"\n        indicatorPosition=\"bottom\"\n      >\n        <ng-container *ngIf=\"searchList.length; else notFount\">\n          <sr-contact-item\n            (click)=\"selectContact(contact)\"\n            *ngFor=\"let contact of searchList\"\n            [data]=\"contact\"\n          ></sr-contact-item>\n        </ng-container>\n\n        <ng-template #notFount>\n          <span class=\"no-data\">No match data ...</span>\n        </ng-template>\n      </sr-scroll-container>\n    </div>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SearchContactsComponent.ctorParameters = function () {
            return [
                { type: ContactsHelper }
            ];
        };
        SearchContactsComponent.propDecorators = {
            searchContent: [{ type: i0.ViewChild, args: ['searchContent',] }],
            searchList: [{ type: i0.Input }],
            searchEvent: [{ type: i0.Output }],
            selectContactItem: [{ type: i0.Output }]
        };
        return SearchContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactDetailComponent = /** @class */ (function () {
        function ContactDetailComponent(contactHelper) {
            this.contactHelper = contactHelper;
            this.windowWidth = window.innerWidth;
            this.actions = [
                {
                    icon: 'edit',
                    text: 'Edit',
                    handler: ( /**
                     * @return {?}
                     */function () { return console.log('edit'); })
                },
                {
                    icon: 'delete',
                    text: 'Delete',
                    handler: ( /**
                     * @return {?}
                     */function () { return console.log('delete'); })
                }
            ];
            this.activeContact$ = this.contactHelper.activeContact;
            this.isMobile = this.contactHelper.isMobile;
            if (this.isMobile) {
                this.contactHelper.headerData.next({
                    path: "/" + EContactPath.contacts + "/" + EContactPath.contact,
                    title: ''
                });
            }
        }
        /**
         * @param {?} field
         * @return {?}
         */
        ContactDetailComponent.prototype.getField = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                return field && field.length ? field : ' - ';
            };
        /**
         * @param {?} field
         * @param {?=} symbol
         * @return {?}
         */
        ContactDetailComponent.prototype.getAddress = /**
         * @param {?} field
         * @param {?=} symbol
         * @return {?}
         */
            function (field, symbol) {
                if (symbol === void 0) {
                    symbol = ',';
                }
                return field && field.length ? "" + field + (symbol ? symbol : '') : '';
            };
        ContactDetailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contact-detail',
                        template: "<lib-contact-actions\n  [fullName]=\"(activeContact$ | async)?.text | stringLimit: 22:!isMobile\"\n></lib-contact-actions>\n\n<div class=\"main-info-section\">\n  <sr-heading headingText=\"Contact Details\" headingType=\"h3\"></sr-heading>\n\n  <ul class=\"info-list\">\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Business number</div>\n      <div class=\"cell value\">\n        <sr-text>{{\n          getField((activeContact$ | async)?.business_number)\n        }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Mobile number</div>\n      <div class=\"cell value\">\n        <sr-text>{{\n          getField((activeContact$ | async)?.mobile_number)\n        }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Private Number</div>\n      <div class=\"cell value\">\n        <sr-text>{{\n          getField((activeContact$ | async)?.private_number)\n        }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Fax</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField((activeContact$ | async)?.fax) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Email</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField((activeContact$ | async)?.email) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Website</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField((activeContact$ | async)?.website) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Address</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getAddress((activeContact$ | async)?.address) }}</sr-text>\n        <sr-text\n          >{{ (activeContact$ | async)?.postal_code }}\n          {{ (activeContact$ | async)?.city }}\n          {{ (activeContact$ | async)?.po_box ? ',' : '' }}</sr-text\n        >\n        <sr-text>{{ (activeContact$ | async)?.po_box }}</sr-text>\n      </div>\n    </li>\n  </ul>\n  <div class=\"map-container\">\n    <agm-map\n      [latitude]=\"(activeContact$ | async)?.geocode_address?.lat\"\n      [longitude]=\"(activeContact$ | async)?.geocode_address?.lon\"\n      [draggable]=\"false\"\n      [panControl]=\"false\"\n      [zoom]=\"15\"\n      [scaleControl]=\"false\"\n      [zoomControl]=\"false\"\n    >\n      <agm-marker\n        [latitude]=\"(activeContact$ | async)?.geocode_address?.lat\"\n        [longitude]=\"(activeContact$ | async)?.geocode_address?.lon\"\n      ></agm-marker>\n    </agm-map>\n  </div>\n</div>\n\n<div class=\"info-section\">\n  <header class=\"section-header\">\n    <sr-heading headingText=\"notes\" headingType=\"h3\"></sr-heading>\n    <sr-button buttonType=\"icon\" svgIcon=\"add-circle\"></sr-button>\n  </header>\n  <div class=\"section-body\">\n    <div class=\"section-info-field\">\n      <div class=\"field-content\">\n        <sr-text\n          >The company team is very qualified, so just follow the solutions that\n          will be provided and enjoy with a result.\n        </sr-text>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-section\">\n  <header class=\"section-header\">\n    <sr-heading headingText=\"Contact Persons\" headingType=\"h3\"></sr-heading>\n    <sr-button buttonType=\"icon\" svgIcon=\"add-circle\"></sr-button>\n  </header>\n  <div class=\"section-body\">\n    <div class=\"section-info-field\">\n      <div class=\"field-content contact\">\n        <sr-avatar avatarValue=\"y\"></sr-avatar>\n        <div class=\"info\">\n          <sr-link [linkUrl]=\"'#/contacts/contact'\"\n            >Mrs. Alyssa Ashcroft</sr-link\n          >\n          <sr-text\n            [isTruncatingText]=\"true\"\n            truncatingText=\"Seestrasse 25, 9000 St. Gallen Seestrasse 25, 9000 St. Gallen\"\n          ></sr-text>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div class=\"section-info-field\">\n      <div class=\"field-content contact\">\n        <sr-avatar avatarValue=\"y\"></sr-avatar>\n        <div class=\"info\">\n          <sr-link [linkUrl]=\"'#/contacts/contact'\"\n            >Mrs. Alyssa Ashcroft</sr-link\n          >\n          <sr-text\n            [isTruncatingText]=\"true\"\n            truncatingText=\"Seestrasse 25, 9000 St. Gallen Seestrasse 25, 9000 St. Gallen\"\n          ></sr-text>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div class=\"section-info-field\">\n      <div class=\"field-content contact\">\n        <sr-avatar avatarValue=\"y\"></sr-avatar>\n        <div class=\"info\">\n          <sr-link [linkUrl]=\"'#/contacts/contact'\"\n            >Mrs. Alyssa Ashcroft</sr-link\n          >\n          <sr-text\n            [isTruncatingText]=\"true\"\n            truncatingText=\"Seestrasse 25, 9000 St. Gallen Seestrasse 25, 9000 St. Gallen\"\n          ></sr-text>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-section\">\n  <header class=\"section-header\">\n    <sr-heading headingText=\"Projects\" headingType=\"h3\"></sr-heading>\n    <sr-button buttonType=\"icon\" svgIcon=\"add-circle\"></sr-button>\n  </header>\n  <div class=\"section-body\">\n    <div class=\"section-info-field\">\n      <div class=\"field-content project\">\n        <div class=\"icon-wrapper\">\n          <sr-icon svgIcon=\"case\"></sr-icon>\n        </div>\n        <div class=\"info\">\n          <div>\n            <sr-link [linkUrl]=\"'#/contacts/contact'\">\n              <sr-text\n                [isTruncatingText]=\"true\"\n                truncatingText=\"2017001 EFH M\u00FCller2017001 EFH M\u00FCller\"\n              ></sr-text>\n            </sr-link>\n            <sr-price-label *ngIf=\"!isMobile\">\u20AC 8 000</sr-price-label>\n          </div>\n          <sr-text>\n            <span class=\"field order\">Order-No.: 2017001</span>\n            <span class=\"divider\">/</span>\n            <span class=\"field responsible\"\n              >Responsible:\n              <sr-link [linkUrl]=\"'#/contacts/contact'\"\n                >Hans M\u00FCller</sr-link\n              ></span\n            >\n            <span class=\"field status\">Status: Done</span>\n          </sr-text>\n          <sr-price-label *ngIf=\"isMobile\">\u20AC 8 000</sr-price-label>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div class=\"section-info-field\">\n      <div class=\"field-content project\">\n        <div class=\"icon-wrapper\">\n          <sr-icon svgIcon=\"case\"></sr-icon>\n        </div>\n        <div class=\"info\">\n          <div>\n            <sr-link [linkUrl]=\"'#/contacts/contact'\"\n              >2017001 EFH M\u00FCller</sr-link\n            >\n            <sr-price-label *ngIf=\"!isMobile\">\u20AC 8 000</sr-price-label>\n          </div>\n          <sr-text>\n            <span class=\"field order\">Order-No.: 2017001</span>\n            <span class=\"divider\">/</span>\n            <span class=\"field responsible\"\n              >Responsible:\n              <sr-link [linkUrl]=\"'#/contacts/contact'\"\n                >Hans M\u00FCller</sr-link\n              ></span\n            >\n            <span class=\"field status\">Status: Done</span>\n          </sr-text>\n          <sr-price-label *ngIf=\"isMobile\">\u20AC 8 000</sr-price-label>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div class=\"section-info-field\">\n      <div class=\"field-content project\">\n        <div class=\"icon-wrapper\">\n          <sr-icon svgIcon=\"case\"></sr-icon>\n        </div>\n        <div class=\"info\">\n          <div>\n            <sr-link [linkUrl]=\"'#/contacts/contact'\"\n              >2017001 EFH M\u00FCller</sr-link\n            >\n            <sr-price-label *ngIf=\"!isMobile\">\u20AC 8 000</sr-price-label>\n          </div>\n          <sr-text>\n            <span class=\"field order\">Order-No.: 2017001</span>\n            <span class=\"divider\">/</span>\n            <span class=\"field responsible\"\n              >Responsible:\n              <sr-link [linkUrl]=\"'#/contacts/contact'\"\n                >Hans M\u00FCller</sr-link\n              ></span\n            >\n            <span class=\"field status\">Status: Done</span>\n          </sr-text>\n          <sr-price-label *ngIf=\"isMobile\">\u20AC 8 000</sr-price-label>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n  </div>\n</div>\n",
                        styles: ["agm-map{height:160px}.main-info-section{padding:24px 12px}.main-info-section ::ng-deep .sub-heading{margin-bottom:14px;color:var(--base-gray-48)}.main-info-section .info-list-item:not(:last-child){padding-bottom:9px}.main-info-section .info-list-item .value{color:var(--sr-base-color)}.main-info-section .map-container{margin-top:23px}@media (min-width:768px){agm-map{height:216px}.main-info-section{padding:29px 24px 31px}.main-info-section .info-list-item{display:table-row}.main-info-section .info-list-item:not(:last-child) .cell{padding-bottom:8px}.main-info-section .info-list-item .cell{display:table-cell}.main-info-section .info-list-item .label{padding-right:14px;text-align:right}.main-info-section .map-container{height:216px;margin-top:31px}}"]
                    }] }
        ];
        /** @nocollapse */
        ContactDetailComponent.ctorParameters = function () {
            return [
                { type: ContactsHelper }
            ];
        };
        return ContactDetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactActionsComponent = /** @class */ (function () {
        function ContactActionsComponent() {
        }
        Object.defineProperty(ContactActionsComponent.prototype, "avatarSize", {
            get: /**
             * @return {?}
             */ function () {
                return window.innerWidth < 768 ? 36 : 40;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactActionsComponent.prototype, "showContact", {
            get: /**
             * @return {?}
             */ function () {
                return window.innerWidth < 768;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactActionsComponent.prototype, "showActions", {
            get: /**
             * @return {?}
             */ function () {
                return window.innerWidth > 767;
            },
            enumerable: true,
            configurable: true
        });
        ContactActionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contact-actions',
                        template: "<header class=\"contact-details-header\">\n  <div class=\"contact-base-info\">\n    <sr-avatar\n      [avatarValue]=\"fullName[0]\"\n      [avatarSize]=\"avatarSize\"\n    ></sr-avatar>\n    <sr-heading [headingText]=\"fullName\"></sr-heading>\n  </div>\n\n  <div class=\"contact-actions\" *ngIf=\"showContact\">\n    <sr-menu\n      menuButtonType=\"icon\"\n      svgIcon=\"more-vertical\"\n      class=\"contact-actions\"\n    >\n      <sr-menu-body>\n        <sr-menu-item\n          [hasCheckMark]=\"true\"\n          itemsPosition=\"between\"\n          class=\"contact-action\"\n        >\n          <sr-icon svgIcon=\"file-export\"></sr-icon>\n          <sr-text>Export</sr-text>\n        </sr-menu-item>\n        <sr-menu-item\n          [hasCheckMark]=\"true\"\n          itemsPosition=\"between\"\n          class=\"contact-action\"\n        >\n          <sr-icon svgIcon=\"print\"></sr-icon>\n          <sr-text>Print</sr-text>\n        </sr-menu-item>\n        <sr-menu-item\n          [hasCheckMark]=\"true\"\n          itemsPosition=\"between\"\n          class=\"contact-action\"\n        >\n          <sr-icon svgIcon=\"edit\"></sr-icon>\n          <sr-text>Edit</sr-text>\n        </sr-menu-item>\n        <sr-menu-item [hasCheckMark]=\"true\" class=\"contact-action\">\n          <sr-icon svgIcon=\"delete\"></sr-icon>\n          <sr-text>Delete</sr-text>\n        </sr-menu-item>\n      </sr-menu-body>\n    </sr-menu>\n  </div>\n\n  <div class=\"contact-actions\" *ngIf=\"showActions\">\n    <sr-button buttonType=\"icon\" svgIcon=\"file-export\"></sr-button>\n    <sr-button buttonType=\"icon\" svgIcon=\"print\"></sr-button>\n    <sr-button buttonType=\"icon\" svgIcon=\"edit\"></sr-button>\n    <sr-button buttonType=\"icon\" svgIcon=\"delete\"></sr-button>\n    <span class=\"divider\"></span>\n    <sr-button buttonType=\"icon\" svgIcon=\"three-column-view\"></sr-button>\n  </div>\n</header>\n",
                        styles: [".contact-details-header{display:flex;align-items:center;justify-content:space-between;padding:13px 12px 10px;border-bottom:1px solid var(--sr-border-color)}.contact-details-header sr-avatar{margin-right:8px}.contact-details-header sr-heading{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.contact-details-header ::ng-deep .heading{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.contact-base-info{display:flex;align-items:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.contact-action sr-icon{margin-right:16px;color:var(--base-gray-64)}@media (min-width:768px){.contact-details-header{padding:16px 16px 16px 24px}.contact-details-header sr-avatar{margin-right:12px}.contact-details-header sr-button{margin-left:8px}.contact-details-header .divider{width:1px;margin-left:8px;background:var(--sr-border-color)}.contact-details-header .contact-actions{display:flex}}"]
                    }] }
        ];
        /** @nocollapse */
        ContactActionsComponent.ctorParameters = function () { return []; };
        ContactActionsComponent.propDecorators = {
            fullName: [{ type: i0.Input }]
        };
        return ContactActionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent(linkRedirect, contactsHelper, languageGql, appService) {
            var _this = this;
            this.linkRedirect = linkRedirect;
            this.contactsHelper = contactsHelper;
            this.languageGql = languageGql;
            this.appService = appService;
            this.isMobile = this.contactsHelper.isMobile;
            this.isDesktop = this.contactsHelper.isDesktop;
            this.privacyPolicy = '#/' + routePaths.PRIVACY_POLICY;
            this.helpCenter = routePaths.HELP_CENTER;
            // texts
            this.privacy = 'Privacy';
            this.policy = 'Privacy Policy';
            this.service = 'Terms of Service';
            this.terms = 'Terms';
            this.center = 'Help Center';
            this.help = 'Help';
            this.subject = new rxjs.Subject();
            this.getLanguages();
            this.contactsHelper.activeLanguage$
                .pipe(operators.takeUntil(this.subject))
                .subscribe(( /**
         * @param {?} activeLanguage
         * @return {?}
         */function (activeLanguage) { return (_this.activeLanguage = activeLanguage); }));
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        Object.defineProperty(FooterComponent.prototype, "getText", {
            get: /**
             * @return {?}
             */ function () {
                return this.isDesktop ? this.policy : this.privacy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FooterComponent.prototype, "buttonText", {
            get: /**
             * @return {?}
             */ function () {
                return this.isDesktop ? this.service : this.terms;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FooterComponent.prototype, "getHelpText", {
            get: /**
             * @return {?}
             */ function () {
                return this.isDesktop ? this.center : this.help;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        FooterComponent.prototype.getLanguages = /**
         * @private
         * @return {?}
         */
            function () {
                this.languages$ = this.languageGql
                    .watch()
                    .valueChanges.pipe(operators.pluck('data', 'languages'));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FooterComponent.prototype.getHelpCenter = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.linkRedirect.redirect(event, this.helpCenter);
            };
        /**
         * @param {?} activeLanguage
         * @return {?}
         */
        FooterComponent.prototype.handleChangeLanguage = /**
         * @param {?} activeLanguage
         * @return {?}
         */
            function (activeLanguage) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (activeLanguage === this.activeLanguage) {
                                    return [2 /*return*/, null];
                                }
                                return [4 /*yield*/, this.appService.changeLanguage(activeLanguage)];
                            case 1:
                                _a.sent();
                                this.contactsHelper.activeLanguage$.next(activeLanguage);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        // todo: remove/replace with common component from the app container
        // todo: remove/replace with common component from the app container
        /**
         * @param {?} str
         * @return {?}
         */
        FooterComponent.prototype.uppercase =
            // todo: remove/replace with common component from the app container
            /**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                /** @type {?} */
                var f = str.charAt(0).toUpperCase();
                return f + str.substr(1, str.length - 1).toLowerCase();
            };
        FooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-footer',
                        template: "<sr-footer *ngIf=\"!isMobile\">\n  <div class=\"row\">\n    <div class=\"col xs-4 m-4 l-5\">\n      <sr-text class=\"copyright\">&copy; 2019 Sorba</sr-text>\n    </div>\n    <div class=\"col xs-8 m-4 l-5 last-m\">\n      <sr-buttons-group buttonsPosition=\"end\">\n        <sr-link linkColor=\"gray\" linkSize=\"small\" [linkUrl]=\"privacyPolicy\">{{\n          getText\n        }}</sr-link>\n        <!--        <sr-link linkColor=\"gray\" linkSize=\"small\">-->\n        <!--          {{isDesktop ? 'Terms of Service' : 'Terms'}}-->\n        <!--        </sr-link>-->\n        <lib-terms-button [buttonText]=\"buttonText\"></lib-terms-button>\n        <sr-link\n          linkColor=\"gray\"\n          linkSize=\"small\"\n          (click)=\"getHelpCenter($event)\"\n          >{{ getHelpText }}</sr-link\n        >\n      </sr-buttons-group>\n    </div>\n    <div class=\"col m-4 l-2\">\n      <sr-buttons-group buttonsPosition=\"center\">\n        <sr-menu\n          menuButtonType=\"text\"\n          xPosition=\"after\"\n          yPosition=\"above\"\n          [buttonText]=\"uppercase(activeLanguage)\"\n          svgIcon=\"language\"\n          customMenuClass=\"languages footer-menu\"\n        >\n          <sr-menu-body>\n            <sr-menu-item\n              *ngFor=\"let language of languages$ | async\"\n              [hasCheckMark]=\"true\"\n              (click)=\"handleChangeLanguage(language)\"\n              [class.active]=\"language === activeLanguage\"\n              itemsPosition=\"between\"\n            >\n              <sr-text>{{ uppercase(language) }}</sr-text>\n            </sr-menu-item>\n          </sr-menu-body>\n        </sr-menu>\n      </sr-buttons-group>\n    </div>\n  </div>\n</sr-footer>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () {
            return [
                { type: LinkRedirectHelper },
                { type: ContactsHelper },
                { type: LanguagesRest },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] }
            ];
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TermsButtonComponent = /** @class */ (function () {
        function TermsButtonComponent(linkRedirect, document, file, fileOpener, platformHelper) {
            this.linkRedirect = linkRedirect;
            this.document = document;
            this.file = file;
            this.fileOpener = fileOpener;
            this.platformHelper = platformHelper;
            this.termsOfService = routePaths.TERMS_OF_SERVICE;
        }
        /**
         * @return {?}
         */
        TermsButtonComponent.prototype.openTermsOfService = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var filePath = this.file.applicationDirectory + 'www/assets/docs';
                /** @type {?} */
                var termsOfServiceFileName = '2019_AGB_SORBA_EDV_AG.pdf';
                /** @type {?} */
                var fileType = 'application/pdf';
                if (this.platformHelper.isIOS()) {
                    this.document.viewDocument(filePath + "/" + termsOfServiceFileName, fileType, {});
                }
                else if (this.platformHelper.isAndroid()) {
                    /** @type {?} */
                    var fakeName = Date.now();
                    this.file
                        .copyFile(filePath, termsOfServiceFileName, this.file.dataDirectory, fakeName + ".pdf")
                        .then(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                        _this.fileOpener
                            .open(result.nativeURL, fileType)
                            .catch(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return console.log(e); }));
                    }));
                }
            };
        TermsButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-terms-button',
                        template: "<sr-button\n  *ngIf=\"!platformHelper.isDesktop()\"\n  buttonType=\"text\"\n  (clickHandler)=\"openTermsOfService()\"\n  >{{ buttonText }}</sr-button\n>\n<sr-link\n  *ngIf=\"platformHelper.isDesktop()\"\n  (click)=\"linkRedirect.redirect($event, termsOfService)\"\n  linkColor=\"gray\"\n  linkSize=\"small\"\n>\n  {{ buttonText }}\n</sr-link>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TermsButtonComponent.ctorParameters = function () {
            return [
                { type: LinkRedirectHelper },
                { type: ngx$1.DocumentViewer },
                { type: ngx$2.File },
                { type: ngx$3.FileOpener },
                { type: PlatformHelper }
            ];
        };
        TermsButtonComponent.propDecorators = {
            buttonText: [{ type: i0.Input }]
        };
        return TermsButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollerComponent = /** @class */ (function () {
        function ScrollerComponent(contactsHelper) {
            this.contactsHelper = contactsHelper;
            this.fetchMore = new i0.EventEmitter();
            this.infinite = new rxjs.BehaviorSubject([]);
            this.itemSize = 50;
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.subject = new rxjs.Subject();
            this.isMobile = this.contactsHelper.isMobile;
        }
        /**
         * @return {?}
         */
        ScrollerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.getViewScroll();
            };
        /**
         * @return {?}
         */
        ScrollerComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.loading$.next(false);
            };
        /**
         * @return {?}
         */
        ScrollerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        Object.defineProperty(ScrollerComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () {
                return this.scrollHeight ? this.scrollHeight + "px" : '100vh';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} record
         * @param {?} recordIndex
         * @param {?} records
         * @return {?}
         */
        ScrollerComponent.prototype.groupContacts = /**
         * @param {?} record
         * @param {?} recordIndex
         * @param {?} records
         * @return {?}
         */
            function (record, recordIndex, records) {
                if (recordIndex === 0) {
                    return record.text[0];
                }
                /** @type {?} */
                var prev = records[recordIndex - 1].text[0];
                /** @type {?} */
                var current = records[recordIndex].text[0];
                return (prev !== current) ? current : null;
            };
        /**
         * @param {?} index
         * @return {?}
         */
        ScrollerComponent.prototype.identify = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return index;
            };
        /**
         * @private
         * @return {?}
         */
        ScrollerComponent.prototype.getViewScroll = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.viewPort) {
                    this.viewPort.scrolledIndexChange
                        .pipe(operators.auditTime(300), operators.tap(( /**
                 * @return {?}
                 */function () { return _this.nextBatch(); })), operators.takeUntil(this.subject)).subscribe();
                }
            };
        /**
         * @private
         * @return {?}
         */
        ScrollerComponent.prototype.nextBatch = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.viewPort) {
                    /** @type {?} */
                    var end = this.viewPort.getRenderedRange().end;
                    /** @type {?} */
                    var total = this.viewPort.getDataLength();
                    if (total === end) {
                        this.fetchMore.emit();
                        this.loading$.next(true);
                    }
                }
            };
        ScrollerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-scroller',
                        template: "<cdk-virtual-scroll-viewport [ngStyle]=\"{height: height}\"\n                             #viewPort\n                             [itemSize]=\"itemSize\"\n                             [minBufferPx]=\"itemSize\"\n                             [maxBufferPx]=\"itemSize\">\n  <ng-container *cdkVirtualFor=\"let item of contacts; let i = index; trackBy: identify\">\n    <ion-item-divider\n      *ngIf=\"groupContacts(item, i, contacts)\">\n      <ion-label>{{groupContacts(item, i, contacts)}}</ion-label>\n    </ion-item-divider>\n\n    <sr-contact-item\n      [data]=\"item\"\n      [windowWidth]=\"1300\"\n      [hasActions]=\"true\"\n    >\n    </sr-contact-item>\n  </ng-container>\n  <ng-container *ngIf=\"loading$ | async\">\n    <div class=\"loader\">\n      <ion-spinner></ion-spinner>\n    </div>\n  </ng-container>\n\n</cdk-virtual-scroll-viewport>\n\n",
                        styles: [".loader{height:50px}"]
                    }] }
        ];
        /** @nocollapse */
        ScrollerComponent.ctorParameters = function () {
            return [
                { type: ContactsHelper }
            ];
        };
        ScrollerComponent.propDecorators = {
            viewPort: [{ type: i0.ViewChild, args: ['viewPort',] }],
            contacts: [{ type: i0.Input }],
            scrollHeight: [{ type: i0.Input }],
            fetchMore: [{ type: i0.Output }]
        };
        return ScrollerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StringLimitPipe = /** @class */ (function () {
        function StringLimitPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} show
         * @return {?}
         */
        StringLimitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} show
         * @return {?}
         */
            function (value, limit, show) {
                return show && value && value.length && value.length > limit
                    ? value.substr(0, limit) + " ..."
                    : value;
            };
        StringLimitPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'stringLimit'
                    },] }
        ];
        return StringLimitPipe;
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
                            i1$1.IonicModule,
                            common.CommonModule,
                            scrolling.ScrollingModule,
                            forms.ReactiveFormsModule,
                            core.AgmCoreModule.forRoot({
                                apiKey: 'AIzaSyBfnFP4_clqP63H0yaEUIEc84FhGK8y1Ng'
                            })
                        ],
                        exports: [
                            sorbaUiComponents.SorbaUiComponentsModule,
                            i1$1.IonicModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            // components
                            HeaderComponent,
                            SearchContactsComponent,
                            SelectedMenuComponent,
                            ContactDetailComponent,
                            ContactActionsComponent,
                            FooterComponent,
                            TermsButtonComponent,
                            ScrollerComponent,
                            // pipes
                            GroupingPipe,
                            StringLimitPipe
                        ],
                        declarations: [
                            HeaderComponent,
                            SearchContactsComponent,
                            SelectedMenuComponent,
                            ContactDetailComponent,
                            ContactActionsComponent,
                            FooterComponent,
                            TermsButtonComponent,
                            ScrollerComponent,
                            // pipes
                            GroupingPipe,
                            StringLimitPipe
                        ],
                        providers: [ContactsHelper, KeyboardHelper]
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RootPage = /** @class */ (function () {
        function RootPage() {
        }
        RootPage.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-root-contact',
                        template: "\n    <lib-header></lib-header>\n    <sr-content>\n      <sr-container noPadding=\"horizontal-top\">\n        <router-outlet></router-outlet>\n      </sr-container>\n\n      <lib-footer></lib-footer>\n    </sr-content>\n  "
                    }] }
        ];
        return RootPage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var result = {
        "__schema": {
            "types": [
                {
                    "kind": "INTERFACE",
                    "name": "Node",
                    "possibleTypes": [
                        {
                            "name": "User"
                        },
                        {
                            "name": "Session"
                        },
                        {
                            "name": "Permission"
                        },
                        {
                            "name": "Template"
                        },
                        {
                            "name": "App"
                        },
                        {
                            "name": "Company"
                        }
                    ]
                },
                {
                    "kind": "UNION",
                    "name": "AppContentUnion",
                    "possibleTypes": [
                        {
                            "name": "AppContact"
                        },
                        {
                            "name": "AppProject"
                        }
                    ]
                },
                {
                    "kind": "INTERFACE",
                    "name": "AppContent",
                    "possibleTypes": [
                        {
                            "name": "AppContact"
                        },
                        {
                            "name": "AppProject"
                        }
                    ]
                }
            ]
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fragmentMatcher = new apolloCacheInmemory.IntrospectionFragmentMatcher({
        introspectionQueryResultData: result
    });
    /**
     * @return {?}
     */
    function createApollo() {
        /** @type {?} */
        var defaultOptions = {
            watchQuery: {
                errorPolicy: 'all'
            },
            query: {
                errorPolicy: 'all'
            },
            mutate: {
                errorPolicy: 'all'
            }
        };
        return {
            cache: new apolloCacheInmemory.InMemoryCache({
                fragmentMatcher: fragmentMatcher,
                dataIdFromObject: ( /**
                 * @param {?} object
                 * @return {?}
                 */function (object) { return object.id || null; }),
                addTypename: true
            }),
            defaultOptions: defaultOptions,
            connectToDevTools: true
        };
    }
    var GraphQLModule = /** @class */ (function () {
        function GraphQLModule() {
        }
        GraphQLModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [i1$2.ApolloModule],
                        providers: [
                            {
                                provide: i1$2.APOLLO_OPTIONS,
                                useFactory: createApollo,
                            }
                        ]
                    },] }
        ];
        return GraphQLModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: '',
            component: RootPage,
            children: [
                {
                    path: 'contact',
                    component: ContactsComponent
                },
                {
                    path: ':id',
                    component: ContactDetailComponent
                },
                {
                    path: '**',
                    redirectTo: 'contact'
                }
            ]
        },
        {
            path: '**',
            redirectTo: ''
        }
    ];
    var ContactsModule = /** @class */ (function () {
        function ContactsModule() {
        }
        ContactsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ContactsComponent, RootPage],
                        exports: [ContactsComponent, RootPage],
                        imports: [GraphQLModule, SharedModule, router.RouterModule.forChild(routes)]
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
    exports.ɵn = ContactActionsComponent;
    exports.ɵm = ContactDetailComponent;
    exports.ɵo = FooterComponent;
    exports.ɵj = HeaderComponent;
    exports.ɵq = ScrollerComponent;
    exports.ɵk = SearchContactsComponent;
    exports.ɵl = SelectedMenuComponent;
    exports.ɵp = TermsButtonComponent;
    exports.ɵb = GroupingPipe;
    exports.ɵr = StringLimitPipe;
    exports.ɵd = ContactListRest;
    exports.ɵc = ContactsHelper;
    exports.ɵe = KeyboardHelper;
    exports.ɵi = SharedModule;
    exports.ɵa = ContactsComponent;
    exports.ɵh = GraphQLModule;
    exports.ɵg = createApollo;
    exports.ɵf = RootPage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=contacts.umd.js.map