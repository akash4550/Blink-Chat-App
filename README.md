
Blink Chat App

A Lightning Fast, Secure, and Cross-Platform Real-Time Messaging Application
Blink is a modern, full-stack chat application engineered for speed and privacy. Leveraging robust real-time technologies, it provides a seamless, zero-delay messaging experience with a focus on end-to-end encryption and user security.

✨ Features


Real-time Communication: Utilizes WebSockets (likely Socket.IO) for instant, zero-delay message delivery and updates.

Security & Privacy: Built-in support for End-to-end encryption ensures private conversations.

Authentication: Secure user sign-up, sign-in, and profile management.

Contact Management: Displays a dynamic contact list with online/offline status indicators and an "Online only" filter.

Media Sharing: Supports sharing of images and videos directly within the chat interface.

Profile Customization: Users can update their name, email, and profile picture.

🔗 Links
Category	URL
Live Demo (Render)	https://blink-chat-api.onrender.com
GitHub Repository	https://github.com/akash4550/Blink-Chat-App

🛠️ Technology Stack
Blink is a Full-Stack application, most likely built on the MERN (MongoDB, Express, React, Node.js) or a similar JavaScript-based stack to optimize for real-time performance.

Frontend	React, HTML5/CSS3	Single Page Application (SPA) for the dynamic UI.

Backend	Node.js, Express.js	Handles API routing, business logic, and server-side operations.

Database	MongoDB	Flexible NoSQL database for efficient storage of users and chat messages.

Real-time	Socket.IO / WebSockets	Enables the core low-latency chat functionality.


⚙️ Installation & Local Setup
To get a local copy of Blink up and running, follow these steps.

Prerequisites
Node.js (LTS version)

npm or yarn

A running instance of MongoDB

Steps
Clone the Repository:

Bash

git clone https://github.com/akash4550/Blink-Chat-App.git
cd Blink-Chat-App
Install Dependencies:
Run the install command in both your client (frontend) and server (backend) directories.


Bash

# Run in the main directory or respective sub-directories
npm install 
Configure Environment Variables:

Create a .env file in your server directory and set up the following:

Bash

# Example .env configuration
PORT=5000
MONGO_URI=mongodb://localhost:27000/blink_chat
JWT_SECRET=your_strong_secret_key
Run the Application:
Start the server and client processes.

Bash

# Start the application (Commands will vary based on your package.json scripts)

npm run dev  # (or similar command to start both client and server)

🤝 Contributing
We welcome contributions! Please feel free to fork the repository, open an issue, or submit a pull request with any improvements or bug fixes.



<img width="1905" height="947" alt="Screenshot 2025-10-04 203231" src="https://github.com/user-attachments/assets/cdc85643-a4ac-43be-a817-f33a03efa580" />


<img width="1911" height="981" alt="Screenshot 2025-10-04 203313" src="https://github.com/user-attachments/assets/703f29da-25fa-4bde-a82f-f4a621415590" />





