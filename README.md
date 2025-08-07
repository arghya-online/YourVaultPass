# YourVaultPass – Secure, Private Password Generator

**YourVaultPass** is a browser-based password generator built with **React** and **Tailwind CSS**, focused on security, privacy, and simplicity. It enables users to generate strong, random passwords with full control over character options — all without any data tracking, installations, or signups.

Whether you're a developer, IT professional, or an everyday user, YourVaultPass is designed to be intuitive and secure for everyone.

---

##  Key Features

- **Secure & Random Passwords**  
  Generate cryptographically strong passwords with just one click.

- **Customization Options**  
  Choose password length and toggle character sets: uppercase, lowercase, numbers, and symbols.

- **Copy to Clipboard**  
  Easily copy the generated password with a single click.

- **Private by Design**  
  No data is stored, sent, or logged — everything runs locally in your browser.

- **Responsive & Accessible UI**  
  Works seamlessly across devices with an interface that’s clean, intuitive, and mobile-friendly.

---

##  Live Demo

Access the deployed application at:  
 [https://yourvaultpass.vercel.app/](https://yourvaultpass.vercel.app/)

---

## ⚙️ Getting Started

To run the project locally for development or personal use, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/YourVaultPass/YourVaultPass.git
cd YourVaultPass
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to use the app locally.

---

## 🛠 Tech Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Bundler**: Vite
- **Deployment**: Vercel

---

##  Project Structure

```
YourVaultPass/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── App.jsx          # Main application entry
│   ├── index.css        # Tailwind and global styles
│   └── main.jsx         # React root renderer
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project metadata and scripts
```

---

##  Privacy and Security

- All password generation is done client-side.
- No external APIs or tracking scripts are used.
- No signup, login, or cookies required.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
