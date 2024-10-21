# 📋 Clipboard History Manager for macOS

**Clipboard History Manager** is a lightweight, intuitive Electron-based application that brings powerful clipboard management to macOS. Just like Windows, it lets you keep track of everything you've copied, allowing you to paste from a list of recent clipboard entries seamlessly. With a simple shortcut, you can access your clipboard history and enhance your productivity by never losing a copied text snippet again!

![Clipboard History Manager Preview](./assets/preview.png) <!-- Add a screenshot if available -->

## ✨ Features

- **Clipboard History Tracking**: Automatically tracks all your clipboard entries (text only).
- **Quick Access**: Open the clipboard history window instantly using `Shift + Command + V`.
- **Drag and Move**: Easily drag the clipboard window to reposition it anywhere on your screen.
- **Pin Important Items**: Pin frequently used clipboard items, and they’ll stay saved even after the app restarts.
- **Limit of 30 Entries**: Keep your clipboard history neat and manageable by automatically removing older entries when the limit is reached.


## 📦 Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/clipboard-history-manager.git
    cd clipboard-history-manager
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Build and Start the Application**
    ```bash
    npm start
    ```

## 🛠️ How It Works

The Clipboard History Manager uses Electron to create a desktop environment where it constantly monitors clipboard changes. Whenever you copy new text, it adds it to the history list (max of 30 entries). Use the shortcut `Shift + Command + V` to pull up the list and choose what you want to paste next!

### Pinning Items
Pinned items are preserved across sessions and stored locally, ensuring your favorite snippets are always within reach. Just click the 📌 icon to pin or unpin items.

## 🎨 Customization

**Want to make it your own?** Feel free to customize the UI styles using the Tailwind CSS-based layout. Tweak the styles in `staticStyle.css` and `output.css` to match your theme.

## 🔧 Development

To get started with development:
1. **Make Edits in the Source Code**: Modify JavaScript, CSS, or HTML to customize the app.
2. **Build**: Use `npm run build` to package your changes and create a production-ready version.

### Local Storage Management

This app uses the browser’s `localStorage` to keep track of pinned items, ensuring your most-used snippets are available even after restarting.

## 🚀 Usage

1. **Copy Text**: Use `Command + C` as usual to copy text.
2. **Open Clipboard Manager**: Press `Shift + Command + V` to open the clipboard history window.
3. **Select & Paste**: Click on any entry to copy it back to the clipboard and paste where your cursor was last active.
4. **Pin Items**: Click the 📌 button to pin important snippets you want to keep.

## 🖼️ Screenshots

### Main Clipboard Window
![Main Window](./assets/main-window.png) <!-- Replace with actual screenshots -->

### Pinning Clipboard Items
![Pinning Items](./assets/pinning.png) <!-- Replace with actual screenshots -->

## ⚡ Keyboard Shortcuts

- **Open Clipboard Manager**: `Shift + Command + V`
- **Copy to Clipboard**: Click on an item in the list

## 🧑‍💻 Contributing

1. Fork it! 🍴
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 🚀

We welcome all contributions! Feel free to suggest new features, report bugs, or improve existing code.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Feedback

We'd love to hear your thoughts! Open an issue or drop a suggestion on our GitHub issues page.

---

Enjoy effortless clipboard management with **Clipboard History Manager**! 😃
