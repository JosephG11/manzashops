changes made part 1

changes made part 2

changes made 3

# ManzaShop

## Setup

### npm (node package manager)

1. Check If Node.js and npm Are Already Installed

   Run the following commands in your terminal or command prompt to see if Node.js and npm are installed:

   ```bash
   node -v
   npm -v
   ```

   If you see version numbers, you already have Node.js and npm installed. If not, proceed with the steps below.

2. Download and Install Node.js

   1. Visit the official Node.js website: https://nodejs.org.
   2. Choose the appropriate version:

      - LTS (Long-Term Support): Recommended for most users, especially for production use.
      - Current: Includes the latest features but may not be as stable as the LTS version.

   3. Download the installer for your operating system (Windows, macOS, or Linux).
   4. Run the installer and follow the installation steps:

      - On Windows, ensure the option "Add to PATH" is checked during installation.
      - On macOS or Linux, follow the instructions provided by the installer.

3. Verify Installation

   After installation, check that Node.js and npm are properly installed:

   ```bash
   node -v
   npm -v
   ```

   You should see version numbers for both.

### Running the project in development mode

1. Clone the Repository

   Open a terminal and run:

   ```bash
   git clone <repository-url>
   ```

   Replace **repository-url** with the URL of the repository.

2. Navigate to the Project Directory

   Move into the cloned project folder:

   ```bash
   cd <project-folder>
   ```

   Replace **project-folder** with the name of the folder created after cloning.

3. Install Dependencies

   Install the required dependencies using node package manager:

   ```bash
   npm install
   ```

4. Start the Development Server

   Run the development server to preview the project locally:

   ```bash
   npm run dev
   ```

   This will start a local development server, and the terminal will display the URL where the app is running, typically http://localhost:5173.

### Deployment to gh-pages

1. Run deploy commands

   Make sure you are on the main branch and have pushed all changes you wish to see.

   ```bash
   npm run deploy
   ```

   You should see **Published** in the command line

2. Enable GitHub Pages on your repository

   Go to your repository’s **Settings** on **GitHub**.
   Under **Pages**, select the **branch** as **gh-pages** (if not set automatically).
   **Save** the changes.

   It will be available at https://your-username.github.io/your-repository-name/.
