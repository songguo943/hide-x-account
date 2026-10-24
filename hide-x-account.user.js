// ==UserScript==
// @name         Hide X Account Info
// @name:zh-CN   隐藏 X（推特）账号信息
// @namespace    https://github.com/songguo943/hide-x-account
// @version      1.2.0
// @description  Hide your avatar, display name and @handle on X (Twitter) web, so people around you can't see who you are.
// @description:zh-CN 隐藏 X（推特）网页版左下角的头像、名字和 @用户名，在图书馆、咖啡馆、办公室等公共场合保护隐私。
// @author       songguo943
// @license      MIT
// @homepageURL  https://github.com/songguo943/hide-x-account
// @supportURL   https://github.com/songguo943/hide-x-account/issues
// @downloadURL  https://raw.githubusercontent.com/songguo943/hide-x-account/main/hide-x-account.user.js
// @updateURL    https://raw.githubusercontent.com/songguo943/hide-x-account/main/hide-x-account.user.js
// @match        https://x.com/*
// @match        https://twitter.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
    /* 左下角账号按钮（头像 + 名字 + @用户名），新旧两种 testid 都写上 */
    /* Bottom-left account button (avatar + name + @handle); both old and new testids */
    [data-testid="SideNav_AccountSwitcher_Button"],
    [data-testid="SideNav_AccountMenu_Button"],
    /* 窄屏时左上角的头像按钮 */
    /* Avatar button at top-left on narrow windows */
    [data-testid="DashButton_ProfileIcon_Link"] {
        display: none !important;
    }
`);
