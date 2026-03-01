# Portfolio Setup & Editing Guide for Hazem

**Complete roadmap - follow step by step. No coding experience needed.**

---

## **PART 1: FIRST-TIME SETUP (Do Once)**


### **Step : Install Dependencies**
This downloads all packages your site needs:
```bash
npm install
```
**Wait 2-3 minutes** for it to complete. You'll see lots of text - that's normal.

### **Step : Test Locally**
```bash
npm run dev
```
You'll see:
```
Local: http://localhost:5173
```
**Open that link in your browser.** You should see your portfolio!

Press `Ctrl+C` in Terminal to stop when done testing.

---

## **PART 2: EDITING YOUR PORTFOLIO (Do Anytime)**

### **Where to Edit: `src/data/portfolio.js`**

This file has ALL your portfolio content. Everything you see on the website comes from here.

**Structure:**
```javascript
export const portfolioData = {
  name: "Hazem AlTaamneh",
  title: "Architect",
  email: "your-email@example.com",
  bio: "Your professional summary here",
  
  projects: [
    {
      id: 1,
      name: "Project Name",
      description: "What you did",
      technologies: ["Tool 1", "Tool 2"],
      image: "image-url.jpg",
      link: "project-link.com",
      github: "github-link"
    }
  ],
  
  skills: ["AutoCAD", "Revit", "SketchUp", ...],
  
  education: [
    {
      degree: "Bachelor in Architecture",
      school: "University Name",
      year: "2023"
    }
  ],
  
  experience: [
    {
      title: "Junior Architect",
      company: "Company Name",
      duration: "2023 - Present"
    }
  ],
  
  social: {
    linkedin: "https://linkedin.com/in/hazemmt",
    github: "https://github.com/hazemmt1",
    instagram: "https://instagram.com/username",
    behance: "https://behance.net/username"
  }
};
```

### **How to Edit:**

1. Open VS Code
2. Open folder: `Portfolio`
3. Navigate to: `src/data/portfolio.js`
4. Find the section you want to edit (name, projects, skills, etc.)
5. Change the text between the quotes
6. **Save file** (Ctrl+S)
7. Changes appear automatically in your browser (http://localhost:5173)

### **Examples:**

**Change your name:**
```javascript
name: "Hazem AlTaamneh"  ← Change this
```

**Add a project:**
```javascript
projects: [
  {
    id: 1,
    name: "Modern Villa Design",  ← Your project name
    description: "Luxury residential project with...",  ← What you did
    technologies: ["AutoCAD", "Revit", "Photoshop"],  ← Tools used
    image: "https://example.com/image.jpg",  ← Project image URL
    link: "https://project-website.com",  ← Live link
    github: ""  ← Leave empty if no GitHub
  }
]
```

**Add a skill:**
```javascript
skills: ["AutoCAD", "Revit", "SketchUp", "Photoshop", "ArchiCAD"]  ← Add more here
```

**Update education:**
```javascript
education: [
  {
    degree: "Bachelor of Architecture",
    school: "Cairo University",
    year: "2023"
  }
]
```

**Update work experience:**
```javascript
experience: [
  {
    title: "Junior Architect",
    company: "Design Firm Name",
    duration: "2023 - Present"
  }
]
```

---

## **PART 3: TESTING LOCALLY (Before Pushing)**

After editing:

1. **Refresh your browser** (F5) at http://localhost:5173
2. **Check** if changes look correct
3. **Test contact form** - fill it and submit
4. **Check email** - you should receive the message

**If something breaks:**
- Check spelling and quotes in the file
- Make sure all values are in quotes: `"text"`
- Make sure brackets and braces match `{ }` `[ ]`
- Stop `npm run dev` (Ctrl+C) and restart it

---

## **PART 4: PUSH CHANGES TO GITHUB (Deploy)**

Once happy with changes:

### **Step 1: Add Files**
```bash
git add .
```

### **Step 2: Commit (Save Changes)**
```bash
git commit -m "Updated portfolio with new projects"
```
Change the message to describe what you changed.

### **Step 3: Push to GitHub**
```bash
git push
```

### **Step 4: Wait & Check**
1. Go to: https://github.com/hazemmt1/Portfolio
2. Click **Actions** tab
3. You'll see **Deploy to GitHub Pages** running
4. **Wait 2-3 minutes** for it to complete (green checkmark = done)
5. Your site updates at: https://hazemmt1.github.io/Portfolio/

---

## **PART 5: QUICK REFERENCE**

### **Test Locally**
```bash
npm run dev
```
Visit: http://localhost:5173

### **Stop Local Server**
```
Ctrl+C
```

### **Deploy (Push to GitHub)**
```bash
git add .
git commit -m "Your message"
git push
```

### **Check Deployment Status**
Go to GitHub repo → **Actions** tab

### **View Live Website**
https://hazemmt1.github.io/Portfolio/

---


## **WHEN YOU'RE DONE EDITING**

Always follow this flow:
1. Edit `src/data/portfolio.js`
2. Test locally: `npm run dev`
3. Check in browser
4. Push: `git add .` → `git commit -m "..."` → `git push`
5. Wait for GitHub Actions to finish (Actions tab)
6. View live site

**That's it!** You're a web developer now. 
