
    window._currentDevice = 'tablet';
    window.Parameters = window.Parameters || {
        HomeUrl: 'http://app.multiscreensite.com/site/cdcfe824',
        AccountUUID: 'cd9352ec77bf46cfba03be564e107499',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: 'cdcfe824',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Mon Feb 24 12:20:23 UTC 2025',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialPostPageUuid: '',
        InitialDynamicItem: '',
        DynamicPageInfo: {
            isDynamicPage: false,
            base64JsonRowData: 'null',
        },
        InitialPageAlias: 'home',
        InitialPageUuid: 'ce599dfe3a9e4ecab6551fc06c86e6e1',
        InitialPageId: '1171511649',
        InitialEncodedPageAlias: 'aG9tZQ==',
        InitialHeaderUuid: '113d2d4951b5484c9e02d59e152c9784',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '52210',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/cdcfe824?preview=true&dm_device=tablet&dm_exportSite=true&nossl&dm_exportSite_protected=7611fcfb_1740475649330_5_ef448d05d399394d2e851c6c5c2117b534f0cec3005e240a62075d2b46d1ee8c',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        IsStoreSuspended: false,
        HasCustomDomain: true,
        SimpleSite: false,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'fr',
        currentLocale: 'fr',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: 5,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/cdcfe824',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: false,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        isInEditor: false,
        hasNativeStore: false,
        defaultLang: 'fr',
        hamburgerMigration: null,
        isFlexSite : false
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 23;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if (!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function () {
            },
            getCurrentDeviceType: function () {
                return window._currentDevice;
            },
            runOnReady: (ns, fn) => {
                const safeFn = dmAPI.toSafeFn(fn);
                ns = ns || 'global_' + Math.random().toString(36).slice(2, 11);
                const eventName = 'afterAjax.' + ns;

                if (document.readyState === 'complete') {
                    $.DM.events.off(eventName).on(eventName, safeFn);
                    setTimeout(function () {
                        safeFn({
                            isAjax: false,
                        });
                    }, 0);
                } else {
                    window?.waitForDeferred?.('dmAjax', () => {
                        $.DM.events.off(eventName).on(eventName, safeFn);
                        safeFn({
                            isAjax: false,
                        });
                    });
                }
            },
            toSafeFn: (fn) => {
                if (fn?.safe) {
                    return fn;
                }
                const safeFn = function (...args) {
                    try {
                        return fn?.apply(null, args);
                    } catch (e) {
                        console.log('function failed ' + e.message);
                    }
                };
                safeFn.safe = true;
                return safeFn;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }


/**
 * There are a few <link> tags with CSS resource in them that are preloaded in the page
 * in each of those there is a "onload" handler which invokes the loadCSS callback
 * defined here.
 * We are monitoring 3 main CSS files - the runtime, the global and the page.
 * When each load we check to see if we can append them all in a batch. If threre
 * is no page css (which may happen on inner pages) then we do not wait for it
 */
(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }
  
    function checkCss() {
      const pageCssLink = document.querySelector("[id*='CssLink']");
      const widgetCssLink = document.querySelector("[id*='widgetCSS']");

        if (cssLinks && cssLinks.runtime && cssLinks.global && (!pageCssLink || cssLinks.page) && (!widgetCssLink || cssLinks.widget)) {
            const storedRuntimeCssLink = cssLinks.runtime;
            const storedPageCssLink = cssLinks.page;
            const storedGlobalCssLink = cssLinks.global;
            const storedWidgetCssLink = cssLinks.widget;

            storedGlobalCssLink.disabled = true;
            loadCssLink(storedGlobalCssLink);

            if (storedPageCssLink) {
                storedPageCssLink.disabled = true;
                loadCssLink(storedPageCssLink);
            }

            if(storedWidgetCssLink) {
                storedWidgetCssLink.disabled = true;
                loadCssLink(storedWidgetCssLink);
            }

            storedRuntimeCssLink.disabled = true;
            loadCssLink(storedRuntimeCssLink);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    storedRuntimeCssLink.disabled = false;
                    storedGlobalCssLink.disabled = false;
                    if (storedPageCssLink) {
                      storedPageCssLink.disabled = false;
                    }
                    if (storedWidgetCssLink) {
                      storedWidgetCssLink.disabled = false;
                    }
                    // (SUP-4179) Clear the accumulated cssLinks only when we're
                    // sure that the document has finished loading and the document 
                    // has been parsed.
                    if(document.readyState === 'interactive') {
                      cssLinks = null;
                    }
                }, 0);
            });
        }
    }
  

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href && link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } 
      
      else if (link.id && link.id.includes("CssLink")) {
        cssLinks.page = link;
        checkCss();
      } else if (link.id && link.id.includes("widgetCSS")) {
        cssLinks.widget = link;
        checkCss();
      }
      
      else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      throw e
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();


    /* usage: window.getDeferred(<deferred name>).resolve() or window.getDeferred(<deferred name>).promise.then(...)*/
    function Def() {
        this.promise = new Promise((function (a, b) {
            this.resolve = a, this.reject = b
        }).bind(this))
    }

    const defs = {};
    window.getDeferred = function (a) {
        return null == defs[a] && (defs[a] = new Def), defs[a]
    }
    window.waitForDeferred = function (b, a, c) {
        let d = window?.getDeferred?.(b);
        d
            ? d.promise.then(a)
            : c && ["complete", "interactive"].includes(document.readyState)
                ? setTimeout(a, 1)
                : c
                    ? document.addEventListener("DOMContentLoaded", a)
                    : console.error(`Deferred  does not exist`);
    };
