# Hide X Account Info · 隐藏 X 账号信息

[中文](#中文) | [English](#english)

---

## 中文

在图书馆、咖啡馆、办公室这类公共场合刷 X（推特）时，网页左下角会一直显示你的**头像、名字和 @用户名**，旁边或身后的人一眼就能看到你是谁。

这是一个油猴脚本，装好后会自动把这些信息藏起来，其他功能照常使用。

### 会隐藏哪些内容

| 位置 | 说明 |
|---|---|
| 左下角账号按钮 | 头像、名字、@用户名 |
| 窗口变窄时左上角的头像按钮 | 比如浏览器分屏、窗口缩小时出现的那个圆形头像 |

**不会隐藏的：** 你自己发的推文和回复里的名字和头像，以及打开自己主页时页面上的信息。在公共场合使用时，尽量别点进自己的主页。

### 使用方法（第一次用油猴的新手请按顺序来）

#### 第 1 步：安装 Tampermonkey（油猴）浏览器扩展

Tampermonkey 是用来运行这类小脚本的浏览器扩展，免费。按你用的浏览器点对应链接，然后点「添加至 Chrome」或「获取」：

- **Chrome**：[Chrome 应用商店 - Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Edge**：[Edge 加载项 - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
- **Firefox**：[Firefox 附加组件 - Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)

#### 第 2 步：打开「允许用户脚本」开关（Chrome / Edge 必做，Firefox 跳过）

新版 Chrome 和 Edge 默认不允许扩展运行用户脚本，**不打开这个开关，脚本装了也不会生效**。

**Chrome：**
1. 在地址栏输入 `chrome://extensions` 回车。
2. 找到 Tampermonkey，点「详情」。
3. 找到 **「允许用户脚本」**（Allow User Scripts），把开关打开。
4. 如果你的 Chrome 版本比较旧，详情页里没有这个开关，就把扩展页面右上角的 **「开发者模式」** 打开。

**Edge：**
1. 在地址栏输入 `edge://extensions` 回车。
2. 把左侧（或页面底部）的 **「开发人员模式」** 打开。
3. 如果 Tampermonkey 的详情页里有「允许用户脚本」开关，也一并打开。

#### 第 3 步：安装本脚本

👉 **[点这里安装脚本](https://raw.githubusercontent.com/songguo943/hide-x-account/main/hide-x-account.user.js)**

点开后 Tampermonkey 会自动弹出一个安装页面，点 **「安装」** 按钮即可。

> 如果点开后只看到一堆代码，没有出现安装页面，说明第 1 步或第 2 步没完成。也可以用下面的「手动安装」方法。

#### 第 4 步：确认生效

1. 打开或刷新 [x.com](https://x.com)。
2. 看左下角，头像和名字应该已经不见了。
3. 点浏览器右上角的 Tampermonkey 图标（如果没看到，先点拼图形状的「扩展」图标），列表里应该有 **「隐藏 X（推特）账号信息」**，开关是打开的。

### 手动安装（第 3 步不成功时用）

1. 打开 [hide-x-account.user.js](hide-x-account.user.js)，点右上角的「复制」按钮（两个方块叠在一起的图标），复制全部代码。
2. 点浏览器右上角的 Tampermonkey 图标，选 **「添加新脚本」**。
3. 编辑器里会有一段默认代码，按 `Ctrl+A`（Mac 是 `⌘A`）全选，再按 `Ctrl+V`（Mac 是 `⌘V`）粘贴，把它替换掉。
4. 按 `Ctrl+S`（Mac 是 `⌘S`）保存。
5. 刷新 x.com。

### 常见问题

**装了但名字还在？**
- 先确认第 2 步的「允许用户脚本」或「开发者模式」已经打开，然后刷新页面。
- 点 Tampermonkey 图标，确认这个脚本的开关是打开的。
- X 经常改版，改版后页面元素的名字可能变了，导致脚本失效。遇到这种情况请到 [Issues](https://github.com/songguo943/hide-x-account/issues) 反馈。

**想临时看到自己的账号信息（比如要切换账号）？**
点 Tampermonkey 图标，把这个脚本的开关关掉，再刷新页面。用完再打开。

**脚本会自动更新吗？**
会。Tampermonkey 会定期检查更新，修复后的版本会自动装上。

**会不会收集我的数据？**
不会。脚本只有十几行，只做一件事：往页面里加一段隐藏样式。它不联网、不读取任何信息。代码都在 [hide-x-account.user.js](hide-x-account.user.js) 里，可以自己看。

**怎么卸载？**
打开 Tampermonkey 的「管理面板」，找到这个脚本，点右侧的垃圾桶图标。

---

## English

When you browse X (Twitter) in a library, café or office, the bottom-left corner of the page always shows your **avatar, display name and @handle**. Anyone sitting next to or behind you can see who you are at a glance.

This userscript hides that information automatically. Everything else on X works as usual.

### What gets hidden

| Location | Details |
|---|---|
| Bottom-left account button | Avatar, display name, @handle |
| Avatar button at the top-left on narrow windows | The round avatar that appears when the window is small or split-screen |

**Not hidden:** your name and avatar on your own posts and replies, and on your own profile page. In public places, avoid opening your own profile.

### How to install (step by step for first-time users)

#### Step 1: Install the Tampermonkey browser extension

Tampermonkey is a free extension that runs small scripts like this one. Open the link for your browser and click "Add to Chrome" / "Get":

- **Chrome**: [Chrome Web Store - Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Edge**: [Edge Add-ons - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
- **Firefox**: [Firefox Add-ons - Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)

#### Step 2: Turn on "Allow User Scripts" (required for Chrome / Edge, skip on Firefox)

Recent versions of Chrome and Edge block extensions from running userscripts by default. **If you skip this step, the script will install but do nothing.**

**Chrome:**
1. Type `chrome://extensions` in the address bar and press Enter.
2. Find Tampermonkey and click **Details**.
3. Turn on **Allow User Scripts**.
4. On older Chrome versions without that toggle, turn on **Developer mode** in the top-right corner of the extensions page instead.

**Edge:**
1. Type `edge://extensions` in the address bar and press Enter.
2. Turn on **Developer mode** (left sidebar or bottom of the page).
3. If Tampermonkey's details page has an **Allow User Scripts** toggle, turn it on too.

#### Step 3: Install this script

👉 **[Click here to install](https://raw.githubusercontent.com/songguo943/hide-x-account/main/hide-x-account.user.js)**

Tampermonkey will open an install page. Click **Install**.

> If you only see a page of code and no install page, Step 1 or Step 2 isn't done yet. You can also use the manual method below.

#### Step 4: Check that it works

1. Open or refresh [x.com](https://x.com).
2. The avatar and name in the bottom-left corner should be gone.
3. Click the Tampermonkey icon in the browser toolbar (if it's not there, click the puzzle-piece "Extensions" icon first). **Hide X Account Info** should be listed and switched on.

### Manual install (if Step 3 doesn't work)

1. Open [hide-x-account.user.js](hide-x-account.user.js) and click the "Copy" button (two overlapping squares) at the top right to copy all the code.
2. Click the Tampermonkey icon and choose **Create a new script**.
3. The editor contains some default code. Press `Ctrl+A` (`⌘A` on Mac) to select all, then `Ctrl+V` (`⌘V` on Mac) to paste over it.
4. Press `Ctrl+S` (`⌘S` on Mac) to save.
5. Refresh x.com.

### FAQ

**Installed, but my name is still showing?**
- Make sure "Allow User Scripts" or "Developer mode" from Step 2 is on, then refresh the page.
- Click the Tampermonkey icon and make sure this script is switched on.
- X changes its page layout often, which can break the script. If that happens, please report it in [Issues](https://github.com/songguo943/hide-x-account/issues).

**Need to see your account info temporarily (e.g. to switch accounts)?**
Click the Tampermonkey icon, switch this script off and refresh. Switch it back on when you're done.

**Does it update automatically?**
Yes. Tampermonkey checks for updates periodically and installs fixed versions automatically.

**Does it collect any data?**
No. The script is about a dozen lines and does one thing: it adds a CSS rule that hides those elements. It makes no network requests and reads nothing. The full code is in [hide-x-account.user.js](hide-x-account.user.js).

**How do I uninstall?**
Open Tampermonkey's **Dashboard**, find this script and click the trash-can icon.

---

## License

[MIT](LICENSE)
