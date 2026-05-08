import type { Insight } from '@/types/types';

export const settingUpYourFirstDevEnvironmentWithoutLosingYourMind: Insight = {
  slug: 'setting-up-your-first-dev-environment-without-losing-your-mind',
  title: 'Setting Up Your First Dev Environment (Without Losing Your Mind)',
  date: '2026-03-07T15:00:00.000Z',
  summary:
    'A no-fluff setup guide for VS Code, Node.js, Git, terminal basics, and browser DevTools.',
  tags: ['Dev Tools', 'Beginners', 'Node.js', 'Git', 'VS Code'],
  published: true,
  views: 0,
  content: `The first hour of coding should not be spent fighting your laptop. But it often is, because nobody gives you a clear, opinionated setup guide.

Here is mine. No options, no "it depends." Just what to install, in what order, and why.

## Step 1: VS Code (the code editor)

Download Visual Studio Code from [code.visualstudio.com](http://code.visualstudio.com). It is free, runs on Mac, Windows, and Linux, and is used by the majority of web developers worldwide.

Once installed, add these three extensions immediately (Ctrl+Shift+X to open extensions):

**Prettier** - automatically formats your code on save. Never argue about indentation again.

**ESLint** - highlights JavaScript errors and bad practices as you type, before you even run the code.

**GitLens** - shows who changed what and when, directly in your editor.

Set Prettier as your default formatter and turn on "Format on Save":

~~~json
// VS Code settings (Ctrl+Shift+P -> "Open Settings JSON")
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
~~~

## Step 2: Node.js

Even if you are doing frontend work, you need Node.js. It runs the development tools, package managers, and build processes that modern web development depends on.

Download the **LTS version** (Long Term Support) from [nodejs.org](http://nodejs.org). Not the latest. LTS.

Verify it installed correctly:

~~~bash
node --version   # should print something like v20.x.x
npm --version    # should print something like 10.x.x
~~~

\`npm\` (Node Package Manager) comes with Node. It is how you install JavaScript libraries.

## Step 3: Git

Git is how you track changes to your code and collaborate with others.

**Mac:** Run \`git --version\` in Terminal. If it is not installed, macOS will prompt you to install it.

**Windows:** Download from [git-scm.com](http://git-scm.com). During installation, choose "Git from the command line and also from 3rd-party software."

After installing, run these two lines (just once, ever):

~~~bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
~~~

This stamps your identity on every commit you make.

## Step 4: The terminal

VS Code has a built-in terminal. Use it (Ctrl+Tilde to open). You do not need a separate terminal app.

Learn these five commands and you will cover 90% of what you need:

~~~bash
pwd         # where am I? (print working directory)
ls          # what is in this folder?
cd folder   # move into a folder
cd ..       # go back up one level
mkdir name  # create a new folder
~~~

## Step 5: A browser with DevTools

Use Chrome or Firefox. Both have excellent developer tools built in.

Press **F12** (or right-click -> Inspect) to open DevTools. The things you will use most:

- **Console** tab - see JavaScript errors and run code snippets
- **Elements** tab - inspect and edit HTML/CSS live
- **Network** tab - see every HTTP request your page makes

## Your first project

Once everything is installed:

~~~bash
mkdir my-first-project
cd my-first-project
git init
touch index.html
code .          # opens the current folder in VS Code
~~~

You are set up. Everything from here is building.

---`,
};
