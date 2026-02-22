<div align="center">

<!-- Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=⚡%20Blink%20Chat&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Lightning-Fast%20Real-Time%20Messaging&descAlignY=58&descSize=20&descColor=a78bfa" width="100%"/>

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.IO"/>
</p>

<p>
  <img src="https://img.shields.io/badge/License-MIT-a78bfa?style=flat-square" alt="MIT License"/>
  <img src="https://img.shields.io/badge/Status-Live-4ade80?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-60a5fa?style=flat-square" alt="Version"/>
  <img src="https://img.shields.io/badge/PRs-Welcome-f472b6?style=flat-square" alt="PRs Welcome"/>
</p>

<br/>

> **Blink** — Where conversations happen at the speed of thought. A modern, full-stack real-time chat application built for the people who refuse to wait.

<br/>

<a href="https://blink-chat-api.onrender.com">
  <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Now-302b63?style=for-the-badge" alt="Live Demo"/>
</a>
&nbsp;&nbsp;
<a href="https://github.com/akash4550/Blink-Chat-App/issues">
  <img src="https://img.shields.io/badge/🐛%20Report%20Bug-Open%20Issue-ff6b6b?style=for-the-badge" alt="Report Bug"/>
</a>
&nbsp;&nbsp;
<a href="https://github.com/akash4550/Blink-Chat-App/fork">
  <img src="https://img.shields.io/badge/🍴%20Fork%20it-Get%20Started-4ade80?style=for-the-badge" alt="Fork"/>
</a>

</div>

---

## 📸 Screenshots


<img width="1905" height="947" alt="Screenshot 2025-10-04 203231" src="https://github.com/user-attachments/assets/cdc85643-a4ac-43be-a817-f33a03efa580" />


<img width="1911" height="981" alt="Screenshot 2025-10-04 203313" src="https://github.com/user-attachments/assets/703f29da-25fa-4bde-a82f-f4a621415590" />


---

## ✨ Features

<div align="center">

| ⚡ Real-Time Messaging | 🔐 Secure Auth | 👤 User Profiles |
|:---:|:---:|:---:|
| Zero-delay messaging powered by WebSockets & Socket.IO | JWT-based secure sign-up, sign-in & session management | Customize name, email & profile picture |

| 📡 Online Presence | 📎 Media Sharing | 🔒 End-to-End Encryption |
|:---:|:---:|:---:|
| Live online/offline indicators with "Online Only" filter | Share images & videos directly in chat | Built-in support for private, encrypted conversations |

</div>

---

## 🛠️ Tech Stack

```
Blink Chat App
│
├── 🎨 Frontend
│   ├── React.js          — Dynamic Single Page Application
│   ├── HTML5 / CSS3      — Structure & Styling
│   └── Socket.IO Client  — Real-time event handling
│
├── ⚙️  Backend
│   ├── Node.js           — JavaScript runtime
│   ├── Express.js        — REST API framework
│   └── Socket.IO Server  — WebSocket server
│
└── 🗄️  Database & Infrastructure
    ├── MongoDB           — NoSQL document database
    ├── JWT               — Secure authentication tokens
    └── Render            — Cloud deployment
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed before proceeding:

- ![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=node.js) **Node.js** (LTS version recommended)
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm) **npm** or **yarn**
- ![MongoDB](https://img.shields.io/badge/MongoDB-running-4EA94B?style=flat-square&logo=mongodb) A running **MongoDB** instance (local or Atlas)

---

### ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/akash4550/Blink-Chat-App.git
cd Blink-Chat-App
```

**2. Install all dependencies**

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

**3. Configure environment variables**

Create a `.env` file inside the `backend/` directory:

```env
# Server Configuration
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/blink_chat

# Authentication
JWT_SECRET=your_super_strong_secret_key_here

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000
```

> 💡 **Tip:** Never commit your `.env` file. It's already included in `.gitignore`.

**4. Start the application**

```bash
# Run both frontend and backend concurrently
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
Blink-Chat-App/
├── 📁 backend/
│   ├── controllers/      # Route handler logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API route definitions
│   ├── middleware/        # Auth & error middleware
│   └── server.js         # Express & Socket.IO entry point
│
├── 📁 frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # App pages/views
│   │   ├── context/      # Global state (Auth, Socket)
│   │   └── App.jsx       # Root component & routing
│   └── public/
│
├── package.json           # Root scripts
└── README.md
```

---

## 🌐 Live Demo

Try Blink right now — no setup needed:

<div align="center">
<a href="https://blink-chat-api.onrender.com">
  <img src="https://img.shields.io/badge/🌐%20Open%20Live%20App-blink--chat--api.onrender.com-302b63?style=for-the-badge" alt="Live App"/>
</a>
</div>

> ⚠️ *The app is hosted on Render's free tier — it may take 30–60 seconds to spin up after inactivity. Hang tight!*

---

## 🤝 Contributing

Contributions are what make open-source great. Any improvements you bring are **greatly appreciated**!

1. **Fork** the repository
2. **Create** your feature branch — `git checkout -b feature/AmazingFeature`
3. **Commit** your changes — `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch — `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

> Found a bug? Have an idea? Feel free to [open an issue](https://github.com/akash4550/Blink-Chat-App/issues).

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

## 👨‍💻 Author

<div align="center">

**Akash**

[![GitHub](https://img.shields.io/badge/GitHub-akash4550-181717?style=for-the-badge&logo=github)](https://github.com/akash4550)

*If you found this project helpful, please consider giving it a ⭐ — it means a lot!*

</div>

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer" width="100%"/>

<sub>Built with ❤️ and JavaScript — Blink Chat App © 2025</sub>
</div>



