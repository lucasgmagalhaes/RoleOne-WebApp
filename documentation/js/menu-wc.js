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
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">role-one documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
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
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-16daf73cc5a70b32d96b293d7471df4d"' : 'data-target="#xs-components-links-module-AppModule-16daf73cc5a70b32d96b293d7471df4d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-16daf73cc5a70b32d96b293d7471df4d"' : 'id="xs-components-links-module-AppModule-16daf73cc5a70b32d96b293d7471df4d"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModuleForTest.html" data-type="entity-link">AppModuleForTest</a>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutesModule.html" data-type="entity-link">AppRoutesModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' : 'data-target="#xs-components-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' : 'id="xs-components-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' }>
                                        <li class="link">
                                            <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' : 'data-target="#xs-injectables-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' : 'id="xs-injectables-links-module-AuthModule-a3775f526be24ac5e43a2ece94e4555a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthRouteModule.html" data-type="entity-link">AuthRouteModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' : 'data-target="#xs-components-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' : 'id="xs-components-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' }>
                                        <li class="link">
                                            <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' : 'data-target="#xs-injectables-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' : 'id="xs-injectables-links-module-CoreModule-4c38337d7510a4ac543f5bafc63be53f"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NotificationService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CreateGameModule.html" data-type="entity-link">CreateGameModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CreateGameModule-9040b227112215db7a5b858321067f8d"' : 'data-target="#xs-components-links-module-CreateGameModule-9040b227112215db7a5b858321067f8d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CreateGameModule-9040b227112215db7a5b858321067f8d"' : 'id="xs-components-links-module-CreateGameModule-9040b227112215db7a5b858321067f8d"' }>
                                        <li class="link">
                                            <a href="components/CampaignComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampaignComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CustomClassModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomClassModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ItemAddedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemAddedComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ItemViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlayerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PlayerModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlayerModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QuestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QuestModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ThemeModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeModalComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DetailModule.html" data-type="entity-link">DetailModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DetailModule-b3236fcfe789a5430ba6f544b2f90d40"' : 'data-target="#xs-components-links-module-DetailModule-b3236fcfe789a5430ba6f544b2f90d40"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DetailModule-b3236fcfe789a5430ba6f544b2f90d40"' : 'id="xs-components-links-module-DetailModule-b3236fcfe789a5430ba6f544b2f90d40"' }>
                                        <li class="link">
                                            <a href="components/ConquestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConquestComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ConquestsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConquestsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProfileEditionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileEditionComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DetailRoutingModule.html" data-type="entity-link">DetailRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DirectivesModule.html" data-type="entity-link">DirectivesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DirectivesModule-ff5fdee607c8d49dc4806fb1b7604ebd"' : 'data-target="#xs-directives-links-module-DirectivesModule-ff5fdee607c8d49dc4806fb1b7604ebd"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-ff5fdee607c8d49dc4806fb1b7604ebd"' : 'id="xs-directives-links-module-DirectivesModule-ff5fdee607c8d49dc4806fb1b7604ebd"' }>
                                        <li class="link">
                                            <a href="directives/ClickOutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickOutDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeContainerModule.html" data-type="entity-link">HomeContainerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HomeContainerModule-95bf5014c234e15b45abb9989d76e745"' : 'data-target="#xs-components-links-module-HomeContainerModule-95bf5014c234e15b45abb9989d76e745"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HomeContainerModule-95bf5014c234e15b45abb9989d76e745"' : 'id="xs-components-links-module-HomeContainerModule-95bf5014c234e15b45abb9989d76e745"' }>
                                        <li class="link">
                                            <a href="components/CampainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampainComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CampainsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampainsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeContainerRoutesModule.html" data-type="entity-link">HomeContainerRoutesModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/InGameModule.html" data-type="entity-link">InGameModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-InGameModule-262b0f68a71e6fe34e82d70eac0e8d07"' : 'data-target="#xs-components-links-module-InGameModule-262b0f68a71e6fe34e82d70eac0e8d07"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-InGameModule-262b0f68a71e6fe34e82d70eac0e8d07"' : 'id="xs-components-links-module-InGameModule-262b0f68a71e6fe34e82d70eac0e8d07"' }>
                                        <li class="link">
                                            <a href="components/ChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainWindowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainWindowComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ModalModule.html" data-type="entity-link">ModalModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-PipesModule-5f7c2880d6a9c4724afa49fda02f783b"' : 'data-target="#xs-pipes-links-module-PipesModule-5f7c2880d6a9c4724afa49fda02f783b"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-PipesModule-5f7c2880d6a9c4724afa49fda02f783b"' : 'id="xs-pipes-links-module-PipesModule-5f7c2880d6a9c4724afa49fda02f783b"' }>
                                        <li class="link">
                                            <a href="pipes/ExperiencePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperiencePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PlayModule.html" data-type="entity-link">PlayModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PlayModule-3928c1b03c67656b420dddc3474c8c95"' : 'data-target="#xs-components-links-module-PlayModule-3928c1b03c67656b420dddc3474c8c95"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PlayModule-3928c1b03c67656b420dddc3474c8c95"' : 'id="xs-components-links-module-PlayModule-3928c1b03c67656b420dddc3474c8c95"' }>
                                        <li class="link">
                                            <a href="components/SelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectionComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SharedModule-ad9c2fbff49cfc6b9c7c2e4b7a6811bc"' : 'data-target="#xs-components-links-module-SharedModule-ad9c2fbff49cfc6b9c7c2e4b7a6811bc"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SharedModule-ad9c2fbff49cfc6b9c7c2e4b7a6811bc"' : 'id="xs-components-links-module-SharedModule-ad9c2fbff49cfc6b9c7c2e4b7a6811bc"' }>
                                        <li class="link">
                                            <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/StaticModule.html" data-type="entity-link">StaticModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-StaticModule-d88bbc4340859ed812553b7ae16c94d2"' : 'data-target="#xs-components-links-module-StaticModule-d88bbc4340859ed812553b7ae16c94d2"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-StaticModule-d88bbc4340859ed812553b7ae16c94d2"' : 'id="xs-components-links-module-StaticModule-d88bbc4340859ed812553b7ae16c94d2"' }>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/StaticRoutesModule.html" data-type="entity-link">StaticRoutesModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FireAuthService.html" data-type="entity-link">FireAuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FireService.html" data-type="entity-link">FireService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/GlobalErrorHandle.html" data-type="entity-link">GlobalErrorHandle</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LocationService.html" data-type="entity-link">LocationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ModalService.html" data-type="entity-link">ModalService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/StorageService.html" data-type="entity-link">StorageService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
                <li class="link">
                    <a href="guards/LoggedGuard.html" data-type="entity-link">LoggedGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/AuthUser.html" data-type="entity-link">AuthUser</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Campain.html" data-type="entity-link">Campain</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ClassGame.html" data-type="entity-link">ClassGame</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FireError.html" data-type="entity-link">FireError</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NotificationStructure.html" data-type="entity-link">NotificationStructure</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Quest.html" data-type="entity-link">Quest</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Theme.html" data-type="entity-link">Theme</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
