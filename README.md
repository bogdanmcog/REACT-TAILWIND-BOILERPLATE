# Getting Started with React Tailwind Boilerplate

### GitHub: git clone someone else's repository & git push to your own repository

###  1. Create a new repository at github.com. (this is your repository)
      Give it the same name as the other repository.
      Don't initialize it with a README, .gitignore, or license.
      
###  2. Clone the other repository to your local machine. (if you haven't done so already)
     `git clone https://github.com/other-account/other-repository.git`
     
###  3. Rename the local repository's current 'origin' to 'upstream'.
     `git remote rename origin upstream`
     
###  4. Give the local repository an 'origin' that points to your repository.
     `git remote add origin https://github.com/your-account/your-repository.git`
###  5. Push the local repository to your repository on github.
    `git push origin main`
    
###  Now 'origin' points to your repository & 'upstream' points to the other repository.
      
      Create a new branch for your changes with git checkout -b my-feature-branch.
      You can git commit as usual to your repository.
      Use git pull upstream main to pull changes from the other repository to your main branch.


![Screenshot 2024-01-26 at 16 42 32](https://github.com/bogdanmcog/REACT-TAILWIND-BOILERPLATE/assets/156916319/2cadd9aa-4267-43fa-a79a-7769a0cefffa)
