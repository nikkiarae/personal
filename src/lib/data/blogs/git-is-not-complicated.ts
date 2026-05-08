import type { BlogPost } from '@/types/types';

export const gitIsNotComplicated: BlogPost = {
  slug: 'git-is-not-complicated',
  title: "Git Is Not Complicated. It's Just Badly Explained.",
  date: '2026-02-14T09:00:00.000Z',
  summary:
    'A beginner-friendly way to understand Git with the core commands, branches, and a practical daily workflow.',
  tags: ['Git', 'Version Control', 'Dev Tools', 'Beginners'],
  published: true,
  content: `Git is not complicated. It's just badly explained. Let me fix that.

You know that folder called \`final_v2_REAL_FINAL_USE_THIS.docx\`? Git exists because of that folder. It's a system for tracking changes to your code over time - so you never lose work, never overwrite something important, and can always go back.

## Think of it as a save game system

Every time you reach a good point in a video game, you save. If you die later, you reload. Git works the same way. You decide when to create a save point (called a **commit**). Each commit captures your code exactly as it was at that moment.

## The three commands you actually need

**\`git add\` - choose what to save**

~~~bash
git add app.js        # stage a specific file
git add .             # stage everything that changed
~~~

**\`git commit\` - create the save point**

~~~bash
git commit -m "Add user login page"
~~~

Write your message like a note to future-you. "Fixed stuff" is useless. "Fix null error when user logs in without email" is golden.

**\`git push\` - back it up to the cloud**

~~~bash
git push origin main
~~~

Your commits live on your laptop until you push. After pushing, they are on GitHub - safe, backed up, and visible to your team.

## What a branch is

A branch is a parallel save file. You want to try something without breaking the working version:

~~~bash
git checkout -b experiment-homepage
# make your changes...
git add .
git commit -m "Try new hero section layout"
~~~

The main branch is completely untouched. If it is a disaster, delete the branch. Nothing lost.

## The "I've broken everything" toolkit

~~~bash
git status          # what has changed?
git diff            # show me exactly what changed, line by line
git checkout .      # undo all uncommitted changes (careful - gone for good)
git log --oneline   # show recent commits with their IDs
git revert a3f9c12  # safely undo a specific commit
~~~

## A real workflow from scratch

~~~bash
git init                              # start tracking a new project
git add .                             # stage everything
git commit -m "Initial commit"        # first save point
git remote add origin https://github.com/you/your-project.git
git push -u origin main               # push to GitHub
~~~

After that, the loop is: make changes -> \`git add .\` -> \`git commit -m "..."\` -> \`git push\`.

## The thing nobody tells you

You don't need to understand everything about Git to use it productively. Learn the basic loop first. The advanced stuff (rebasing, cherry-picking, stashing) is there when you need it.

---
`,
};
