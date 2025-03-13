# Change GitHub Theme Without Logging In

For some genius reason, Microsoft decided to lock GitHub’s theme selection behind an account, **forcing you to stay logged in** to change it. Making github less accessibility for users.

While I agree that dark mode as a default is a fine idea, **GitHub's dark theme is not great**—I experience **eye fatigue** quickly. Since many projects are hosted on **Microsoft's GitHub**, and I refuse to log in just to change my theme, I decided to find a solution myself.

I'm not alone—there's an active discussion on GitHub about this issue:
🔗 **[GitHub Community Discussion](https://github.com/orgs/community/discussions/33190)**

### 🚀 **The Solution**
This Chrome extension **forces GitHub into light mode** by **overwriting the default dark theme**, bypassing the need to log in.

GitHub **automatically resets** `data-color-mode` to `auto` on every page load, so simply changing it manually doesn’t work. This extension continuously **overrides** it to ensure GitHub stays in **light mode**.

### 📌 Installation

I do not intend to publish this extension on the Chrome Web Store, but you can install it easily by following these steps:

1. **Clone the repository** or download the ZIP file and extract it.
2. Open **Chrome** and go to `chrome://extensions/`.
3. **Enable Developer Mode** (toggle in the top-right corner).
4. Click **"Load unpacked"** and select the `src` folder inside the repo.

📢 **Important Notes:**
- You **must keep** the local extension files—removing them will uninstall the extension.
- **Developer Mode must stay enabled**—disabling it will deactivate the extension.

### ⚖️ License
This project is licensed under the **GNU Affero General Public License v3.0**.
Feel free to **fork, modify, and even publish it** to the Chrome Web Store if you’d like! 🚀

### 🛠 **Acknowledgments**
- **Icon** from Flaticon (licensed for free personal & commercial use with attribution).
- **Inspiration** for overwriting the theme came from **GitHub user [matheusqmello](https://github.com/orgs/community/discussions/33190#discussioncomment-10988423)**.
- **Developed with assistance from ChatGPT**.
