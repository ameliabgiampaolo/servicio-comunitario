'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">coreui-free-angular-admin-template documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' : 'data-bs-target="#xs-components-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' :
                                            'id="xs-components-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' :
                                        'id="xs-injectables-links-module-AppModule-1fc6f77e4f4c2637dbf953df8ea9d60c83727595270c9537e549104f2dd557837a6d91b54645b1e901865d0d7960fb8b88f0e1afce83544dc5dcfaac450156e0"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsModule.html" data-type="entity-link" >ChartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ChartsModule-d676c2995db7f1ef235ba341138e6eaea1e80a3d1a556793f87bd10ec824a16de043ba046bad5cfd9f000dc7745ab008aaf66113c62757396de67842465dd71e"' : 'data-bs-target="#xs-components-links-module-ChartsModule-d676c2995db7f1ef235ba341138e6eaea1e80a3d1a556793f87bd10ec824a16de043ba046bad5cfd9f000dc7745ab008aaf66113c62757396de67842465dd71e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartsModule-d676c2995db7f1ef235ba341138e6eaea1e80a3d1a556793f87bd10ec824a16de043ba046bad5cfd9f000dc7745ab008aaf66113c62757396de67842465dd71e"' :
                                            'id="xs-components-links-module-ChartsModule-d676c2995db7f1ef235ba341138e6eaea1e80a3d1a556793f87bd10ec824a16de043ba046bad5cfd9f000dc7745ab008aaf66113c62757396de67842465dd71e"' }>
                                            <li class="link">
                                                <a href="components/ChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsRoutingModule.html" data-type="entity-link" >ChartsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConsultModule.html" data-type="entity-link" >ConsultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ConsultModule-f9bf48cf87ad5a4804d83547fedda7a93870a64e599dcabd5a5f6d27027e0316b325f1ae46dad344bd095ac75c9f30fc0a02484a972a0d28f0cf82b521ad3646"' : 'data-bs-target="#xs-components-links-module-ConsultModule-f9bf48cf87ad5a4804d83547fedda7a93870a64e599dcabd5a5f6d27027e0316b325f1ae46dad344bd095ac75c9f30fc0a02484a972a0d28f0cf82b521ad3646"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsultModule-f9bf48cf87ad5a4804d83547fedda7a93870a64e599dcabd5a5f6d27027e0316b325f1ae46dad344bd095ac75c9f30fc0a02484a972a0d28f0cf82b521ad3646"' :
                                            'id="xs-components-links-module-ConsultModule-f9bf48cf87ad5a4804d83547fedda7a93870a64e599dcabd5a5f6d27027e0316b325f1ae46dad344bd095ac75c9f30fc0a02484a972a0d28f0cf82b521ad3646"' }>
                                            <li class="link">
                                                <a href="components/GradesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsultRoutingModule.html" data-type="entity-link" >ConsultRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-9a8a171a9a577cb4550faae6b4865eb4fcbc7e5522facb9ee3ae43bb09b66dee408bbac7836925698a637c3d8093724165d76d3b3e09c7ea600dde7102c122e1"' : 'data-bs-target="#xs-components-links-module-DashboardModule-9a8a171a9a577cb4550faae6b4865eb4fcbc7e5522facb9ee3ae43bb09b66dee408bbac7836925698a637c3d8093724165d76d3b3e09c7ea600dde7102c122e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-9a8a171a9a577cb4550faae6b4865eb4fcbc7e5522facb9ee3ae43bb09b66dee408bbac7836925698a637c3d8093724165d76d3b3e09c7ea600dde7102c122e1"' :
                                            'id="xs-components-links-module-DashboardModule-9a8a171a9a577cb4550faae6b4865eb4fcbc7e5522facb9ee3ae43bb09b66dee408bbac7836925698a637c3d8093724165d76d3b3e09c7ea600dde7102c122e1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocsComponentsModule.html" data-type="entity-link" >DocsComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DocsComponentsModule-d45632b592e54b30e65e2a063e75e5d29655b06fb89db1a4532a57308f994cead91d568ab2a2e2785e3db45b0b9f5c7ece819fac206a1ede6fa4cee396c82c34"' : 'data-bs-target="#xs-components-links-module-DocsComponentsModule-d45632b592e54b30e65e2a063e75e5d29655b06fb89db1a4532a57308f994cead91d568ab2a2e2785e3db45b0b9f5c7ece819fac206a1ede6fa4cee396c82c34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocsComponentsModule-d45632b592e54b30e65e2a063e75e5d29655b06fb89db1a4532a57308f994cead91d568ab2a2e2785e3db45b0b9f5c7ece819fac206a1ede6fa4cee396c82c34"' :
                                            'id="xs-components-links-module-DocsComponentsModule-d45632b592e54b30e65e2a063e75e5d29655b06fb89db1a4532a57308f994cead91d568ab2a2e2785e3db45b0b9f5c7ece819fac206a1ede6fa4cee396c82c34"' }>
                                            <li class="link">
                                                <a href="components/DocsCalloutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocsCalloutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocsExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocsExampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocsLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocsLinkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GradesManagementModule.html" data-type="entity-link" >GradesManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GradesManagementModule-fabe1f258a99238476523c0ac8d269240a6a3650901627ad11fdec1824b1ca4286316434b0d8dfabb2aaee85cecf9937124b07ae2864c4ffe645733bfe2923ad"' : 'data-bs-target="#xs-components-links-module-GradesManagementModule-fabe1f258a99238476523c0ac8d269240a6a3650901627ad11fdec1824b1ca4286316434b0d8dfabb2aaee85cecf9937124b07ae2864c4ffe645733bfe2923ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GradesManagementModule-fabe1f258a99238476523c0ac8d269240a6a3650901627ad11fdec1824b1ca4286316434b0d8dfabb2aaee85cecf9937124b07ae2864c4ffe645733bfe2923ad"' :
                                            'id="xs-components-links-module-GradesManagementModule-fabe1f258a99238476523c0ac8d269240a6a3650901627ad11fdec1824b1ca4286316434b0d8dfabb2aaee85cecf9937124b07ae2864c4ffe645733bfe2923ad"' }>
                                            <li class="link">
                                                <a href="components/GradesManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GradesManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GradesManagementRoutingModule.html" data-type="entity-link" >GradesManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-IconsModule-84ebacca3edae2bc7d090ca589f1814f71ecdf778ceb05e880bf7dad9f481d7848012275e5769838a8169325bc66a214f4c327a2e779e4fec5898bd6902223dd"' : 'data-bs-target="#xs-components-links-module-IconsModule-84ebacca3edae2bc7d090ca589f1814f71ecdf778ceb05e880bf7dad9f481d7848012275e5769838a8169325bc66a214f4c327a2e779e4fec5898bd6902223dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-84ebacca3edae2bc7d090ca589f1814f71ecdf778ceb05e880bf7dad9f481d7848012275e5769838a8169325bc66a214f4c327a2e779e4fec5898bd6902223dd"' :
                                            'id="xs-components-links-module-IconsModule-84ebacca3edae2bc7d090ca589f1814f71ecdf778ceb05e880bf7dad9f481d7848012275e5769838a8169325bc66a214f4c327a2e779e4fec5898bd6902223dd"' }>
                                            <li class="link">
                                                <a href="components/CoreUIIconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoreUIIconsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsRoutingModule.html" data-type="entity-link" >IconsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotificationsModule-4fd48e8dc12fbabcb923461af03f631558f54a597c61d3221a00ac571c87bf5d89dcfdda6191afcee86f4058da6d57531a7575fd61a661ae4316ec70062e80c5"' : 'data-bs-target="#xs-components-links-module-NotificationsModule-4fd48e8dc12fbabcb923461af03f631558f54a597c61d3221a00ac571c87bf5d89dcfdda6191afcee86f4058da6d57531a7575fd61a661ae4316ec70062e80c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationsModule-4fd48e8dc12fbabcb923461af03f631558f54a597c61d3221a00ac571c87bf5d89dcfdda6191afcee86f4058da6d57531a7575fd61a661ae4316ec70062e80c5"' :
                                            'id="xs-components-links-module-NotificationsModule-4fd48e8dc12fbabcb923461af03f631558f54a597c61d3221a00ac571c87bf5d89dcfdda6191afcee86f4058da6d57531a7575fd61a661ae4316ec70062e80c5"' }>
                                            <li class="link">
                                                <a href="components/AlertsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppToastComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BadgesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BadgesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsRoutingModule.html" data-type="entity-link" >NotificationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' : 'data-bs-target="#xs-components-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' :
                                            'id="xs-components-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Page404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Page404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Page500Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Page500Component</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' : 'data-bs-target="#xs-injectables-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' :
                                        'id="xs-injectables-links-module-PagesModule-baaf4436419be65539e28ff87576b988a05d738c42261a774f38b6343c34780c335b53822355382e01641b574b535ece6107b5f3a30362266a7ac731c2081b3d"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SchedulesManagementModule.html" data-type="entity-link" >SchedulesManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SchedulesManagementModule-94f6c18e26b818ec28c803b2ac03b63ae77de53843f258366328784e2dbfe076f5ee7032822d538a1c8cccd10d5f12202c5f7177c9fa7386b9e70b0fbd91772e"' : 'data-bs-target="#xs-components-links-module-SchedulesManagementModule-94f6c18e26b818ec28c803b2ac03b63ae77de53843f258366328784e2dbfe076f5ee7032822d538a1c8cccd10d5f12202c5f7177c9fa7386b9e70b0fbd91772e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchedulesManagementModule-94f6c18e26b818ec28c803b2ac03b63ae77de53843f258366328784e2dbfe076f5ee7032822d538a1c8cccd10d5f12202c5f7177c9fa7386b9e70b0fbd91772e"' :
                                            'id="xs-components-links-module-SchedulesManagementModule-94f6c18e26b818ec28c803b2ac03b63ae77de53843f258366328784e2dbfe076f5ee7032822d538a1c8cccd10d5f12202c5f7177c9fa7386b9e70b0fbd91772e"' }>
                                            <li class="link">
                                                <a href="components/SchedulesManagement.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchedulesManagement</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchedulesManagementRoutingModule.html" data-type="entity-link" >SchedulesManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolYearManagementModule.html" data-type="entity-link" >SchoolYearManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SchoolYearManagementModule-05c9aad02769d8dd0b72a1f34b721c9020d0e5c229d858b3ef3c4f259f6ef715c86985fd681544d3a9b2293c39934db7b29bd8e1576e5845a2999f833183a88c"' : 'data-bs-target="#xs-components-links-module-SchoolYearManagementModule-05c9aad02769d8dd0b72a1f34b721c9020d0e5c229d858b3ef3c4f259f6ef715c86985fd681544d3a9b2293c39934db7b29bd8e1576e5845a2999f833183a88c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchoolYearManagementModule-05c9aad02769d8dd0b72a1f34b721c9020d0e5c229d858b3ef3c4f259f6ef715c86985fd681544d3a9b2293c39934db7b29bd8e1576e5845a2999f833183a88c"' :
                                            'id="xs-components-links-module-SchoolYearManagementModule-05c9aad02769d8dd0b72a1f34b721c9020d0e5c229d858b3ef3c4f259f6ef715c86985fd681544d3a9b2293c39934db7b29bd8e1576e5845a2999f833183a88c"' }>
                                            <li class="link">
                                                <a href="components/SchoolYearManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolYearManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolYearManagementRoutingModule.html" data-type="entity-link" >SchoolYearManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SectionsManagementModule.html" data-type="entity-link" >SectionsManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SectionsManagementModule-7bee772b8ff821c2d49bb2d8380d3c9b5c0fcd45ce3f6f30dd620323e32741620c5fd2a11388462e756d87e7996700d9c8bd9ee7ea2eba81ef68da198162d8bc"' : 'data-bs-target="#xs-components-links-module-SectionsManagementModule-7bee772b8ff821c2d49bb2d8380d3c9b5c0fcd45ce3f6f30dd620323e32741620c5fd2a11388462e756d87e7996700d9c8bd9ee7ea2eba81ef68da198162d8bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionsManagementModule-7bee772b8ff821c2d49bb2d8380d3c9b5c0fcd45ce3f6f30dd620323e32741620c5fd2a11388462e756d87e7996700d9c8bd9ee7ea2eba81ef68da198162d8bc"' :
                                            'id="xs-components-links-module-SectionsManagementModule-7bee772b8ff821c2d49bb2d8380d3c9b5c0fcd45ce3f6f30dd620323e32741620c5fd2a11388462e756d87e7996700d9c8bd9ee7ea2eba81ef68da198162d8bc"' }>
                                            <li class="link">
                                                <a href="components/SectionsManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionsManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionsManagementRoutingModule.html" data-type="entity-link" >SectionsManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StudentManagementModule.html" data-type="entity-link" >StudentManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StudentManagementModule-2b00adb0f173bb193ce2610b81bf493087c7a6d990c20231464e268c646f76ba3afb10a6f60446565a6d1c83a1b8ade5f608131413b563dff908a86c6f0b1378"' : 'data-bs-target="#xs-components-links-module-StudentManagementModule-2b00adb0f173bb193ce2610b81bf493087c7a6d990c20231464e268c646f76ba3afb10a6f60446565a6d1c83a1b8ade5f608131413b563dff908a86c6f0b1378"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentManagementModule-2b00adb0f173bb193ce2610b81bf493087c7a6d990c20231464e268c646f76ba3afb10a6f60446565a6d1c83a1b8ade5f608131413b563dff908a86c6f0b1378"' :
                                            'id="xs-components-links-module-StudentManagementModule-2b00adb0f173bb193ce2610b81bf493087c7a6d990c20231464e268c646f76ba3afb10a6f60446565a6d1c83a1b8ade5f608131413b563dff908a86c6f0b1378"' }>
                                            <li class="link">
                                                <a href="components/StudentManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentManagementRoutingModule.html" data-type="entity-link" >StudentManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectManagementModule.html" data-type="entity-link" >SubjectManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SubjectManagementModule-4ca50f4702dd2b3c11db1283daf56a91219e6f61ca82d5fcc748f46cebbc478289487a6ae342b0c8e06f31bcd3d66924e274ca489df9616363414f24f1bfccb4"' : 'data-bs-target="#xs-components-links-module-SubjectManagementModule-4ca50f4702dd2b3c11db1283daf56a91219e6f61ca82d5fcc748f46cebbc478289487a6ae342b0c8e06f31bcd3d66924e274ca489df9616363414f24f1bfccb4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubjectManagementModule-4ca50f4702dd2b3c11db1283daf56a91219e6f61ca82d5fcc748f46cebbc478289487a6ae342b0c8e06f31bcd3d66924e274ca489df9616363414f24f1bfccb4"' :
                                            'id="xs-components-links-module-SubjectManagementModule-4ca50f4702dd2b3c11db1283daf56a91219e6f61ca82d5fcc748f46cebbc478289487a6ae342b0c8e06f31bcd3d66924e274ca489df9616363414f24f1bfccb4"' }>
                                            <li class="link">
                                                <a href="components/SubjectManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectManagementRoutingModule.html" data-type="entity-link" >SubjectManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeModule.html" data-type="entity-link" >ThemeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ThemeModule-776a4362203cb849454a38399f937851bd7489c8a94982e326a89f851fabbce925d4036d664afefaf72f619ac7e1c9b3f9e6e7c3583eab6fb85ab87d93f4d7e7"' : 'data-bs-target="#xs-components-links-module-ThemeModule-776a4362203cb849454a38399f937851bd7489c8a94982e326a89f851fabbce925d4036d664afefaf72f619ac7e1c9b3f9e6e7c3583eab6fb85ab87d93f4d7e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeModule-776a4362203cb849454a38399f937851bd7489c8a94982e326a89f851fabbce925d4036d664afefaf72f619ac7e1c9b3f9e6e7c3583eab6fb85ab87d93f4d7e7"' :
                                            'id="xs-components-links-module-ThemeModule-776a4362203cb849454a38399f937851bd7489c8a94982e326a89f851fabbce925d4036d664afefaf72f619ac7e1c9b3f9e6e7c3583eab6fb85ab87d93f4d7e7"' }>
                                            <li class="link">
                                                <a href="components/ColorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeColorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeColorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypographyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypographyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeRoutingModule.html" data-type="entity-link" >ThemeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserManagementModule.html" data-type="entity-link" >UserManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserManagementModule-0011bf9acfbf3e094fe6d5a0bd9c0ebcc2546498a64c4acd85063c229934ff8e66424b306474ab7dbc0b51d23c62de92129a0476751741a47ca17cab3ed4e5e2"' : 'data-bs-target="#xs-components-links-module-UserManagementModule-0011bf9acfbf3e094fe6d5a0bd9c0ebcc2546498a64c4acd85063c229934ff8e66424b306474ab7dbc0b51d23c62de92129a0476751741a47ca17cab3ed4e5e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserManagementModule-0011bf9acfbf3e094fe6d5a0bd9c0ebcc2546498a64c4acd85063c229934ff8e66424b306474ab7dbc0b51d23c62de92129a0476751741a47ca17cab3ed4e5e2"' :
                                            'id="xs-components-links-module-UserManagementModule-0011bf9acfbf3e094fe6d5a0bd9c0ebcc2546498a64c4acd85063c229934ff8e66424b306474ab7dbc0b51d23c62de92129a0476751741a47ca17cab3ed4e5e2"' }>
                                            <li class="link">
                                                <a href="components/UserManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserManagementRoutingModule.html" data-type="entity-link" >UserManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetsModule.html" data-type="entity-link" >WidgetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WidgetsModule-cffac2397eb6ac757d6b93aeae9f0c57612699e19ac87b49f4e062babc99d58f196243fae1ba6541cda1bc3f753efb2b090829fd01246a85875d015fcafe467a"' : 'data-bs-target="#xs-components-links-module-WidgetsModule-cffac2397eb6ac757d6b93aeae9f0c57612699e19ac87b49f4e062babc99d58f196243fae1ba6541cda1bc3f753efb2b090829fd01246a85875d015fcafe467a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WidgetsModule-cffac2397eb6ac757d6b93aeae9f0c57612699e19ac87b49f4e062babc99d58f196243fae1ba6541cda1bc3f753efb2b090829fd01246a85875d015fcafe467a"' :
                                            'id="xs-components-links-module-WidgetsModule-cffac2397eb6ac757d6b93aeae9f0c57612699e19ac87b49f4e062babc99d58f196243fae1ba6541cda1bc3f753efb2b090829fd01246a85875d015fcafe467a"' }>
                                            <li class="link">
                                                <a href="components/ChartSample.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartSample</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetsBrandComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsBrandComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetsDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetsEComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsEComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetsRoutingModule.html" data-type="entity-link" >WidgetsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ToastSampleIconComponent.html" data-type="entity-link" >ToastSampleIconComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/SavedUserModel.html" data-type="entity-link" >SavedUserModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfig.html" data-type="entity-link" >AppConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardChartsData.html" data-type="entity-link" >DashboardChartsData</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GradesService.html" data-type="entity-link" >GradesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhotoService.html" data-type="entity-link" >PhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchedulesManagementService.html" data-type="entity-link" >SchedulesManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolYearService.html" data-type="entity-link" >SchoolYearService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubjectService.html" data-type="entity-link" >SubjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Grade.html" data-type="entity-link" >Grade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartProps.html" data-type="entity-link" >IChartProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SchoolYear.html" data-type="entity-link" >SchoolYear</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Section.html" data-type="entity-link" >Section</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Student.html" data-type="entity-link" >Student</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subject.html" data-type="entity-link" >Subject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subject-1.html" data-type="entity-link" >Subject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subject-2.html" data-type="entity-link" >Subject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});