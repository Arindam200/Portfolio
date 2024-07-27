---
title: "Learn the Fundamentals of Git"
seoTitle: "Learn the Fundamentals of Git: A Step-by-Step Guide (Part-2)"
datePublished: Mon Oct 24 2022 08:02:24 GMT+0000 (Coordinated Universal Time)
cuid: cl9mhqr58000h09mm2zy729ka
slug: learn-the-fundamentals-of-git
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1694633646011/2006aeef-c29e-4428-9a9f-d255f4c46df3.png
tags: blogging, programming-blogs, git, beginners, blogswithcc

---

## Introduction

Git is one of the most important and most used open-source software packages on the internet. If you want to get started with Git, or if you want to improve your Git skills, this blog is for you. In this blog, we'll discuss the basics of Git for beginners. We'll cover the basics of Git, such as creating a repository, adding files, and committing changes. We'll also discuss some of the most common Git commands. So if you're ready to learn about Git, keep reading!

## Some Basic Linux Commands

* `mkdir folder/` : Make directory
    
* `cd folder/` : Change directory
    
* `rmdir folder/` : Remove directory
    
* `ls` : List directory
    
* `pwd` : Print working directory
    
* `touch text.txt` : Creates text.txt
    
* `rm text.txt` : Removes text.txt
    
* `mv a.txt folder` : moves a.txt to Folder
    
* `history` : History of commands
    
* `clear` : Clears terminal
    

## Git Configuration

For the first time, we use Git, we must tell Git about us.All commits we make have information about us.

* `git config -- global user.name` : provides our name to Git
    
* $ git config -- global user.name "User\_Name"
    
* `git config -- global user.email` : provides our email to Git
    
* $ git config -- global user.email "Useremail@test.com"
    
    > If you want to save details only on your system, change `--global` to `--system`.
    > 
    > If you want to save details only in current repository,change `--global` to `--local`.
    
* `git config –global alias` : Create a shortcut for the Git command.
    
* `git config --list` : displays a list of configured credentials
    

## Tracking Repository

After making files, we have to track them.

* `git status` : Displays the state of the current directory.A newly created project isn't initialized with git.
    
* `git init`: Initializes an empty git repository.A new .git folder is auto-generated. Use **ls-a** to list all files and folders in the directory.This folder (.git) is hidden.
    
* Now git status will say "files are untracked".
    
* `git add -A`: All files added to the staging area
    
* `git add file.py`: Only this file was added to the staging area.
    
* `git commit -m "Initial Commit"`: All files committed!
    
* Now git status says that the working tree is clean which means everything is fine.
    
    On modifying a file, the git status says the same.
    
* `git commit`: This opens up an active vim editor. Press 'i' them put the commit message
    
* `git log`: Displays a list of commits.
    

## Tagging

Git can tag some particular points in repository history as important. This marks a release version.

```plaintext
git tag -a v.1.0 -m "first version of software"
```

it creates a tag of v.1.0 with this name.

\*Note:\* We can do multiple tags

`git tag` : Displays list of tags.

`rm -rf .git` : Deletes .git folder {Use this command very carefully}

`git commit -a -m "My Commit"` : Add files to the staging area and commit them.

Untracked files do not support this command.

## Git Clone Command

The git clone is a command-line utility, used to make a local copy of a remote repository. It accesses the repository through a remote URL.

Usually, the original repository is located on a remote server, often from a Git service like GitHub, Bitbucket, or GitLab. The remote repository URL is referred to as the origin.

*Syntax:*

```plaintext
$ git clone
```

![](https://static.javatpoint.com/tutorial/git/images/git-clone.png align="left")

### Git Clone Repository

Suppose, you want to clone a repository from GitHub or have an existing repository owned by any other user to which you would like to contribute. The steps to clone a repository are as follows:

* Open GitHub and navigate to the main page of the repository.
    
* Under the repository name, click on Clone or Download.
    
* !\[\](https://static.javatpoint.com/tutorial/git/images/git-clone-1.png)
    
* Select the Clone with HTTPs section and copy the clone URL for the repository. For the empty repository, you can copy the repository page URL from your browser and skip to the next step.
    
* !\[\](https://static.javatpoint.com/tutorial/git/images/git-clone-2.png)
    
* Open Git Bash and change the current working directory to your desired location where you want to create the local copy of the repository.
    
* Use the git clone command with the repository URL to make a copy of the remote repository. See the below command:
    
* $ git clone https://github.com/ImDwivedi1/Git-Example.git Now, Press Enter. Hence, your local cloned repository will be created. See the below output: !\[\](https://static.javatpoint.com/tutorial/git/images/git-clone-3.png)
    

### Cloning a Repository into a Specific Local Folder

Git allows cloning the repository into a specific directory without switching to that particular directory. You can specify that directory as the next command-line argument in the git clone command. See the below command:

```plaintext
$ git clone https://github.com/ImDwivedi1/Git-Example.git "new folder(2)"
```

![asaf](https://static.javatpoint.com/tutorial/git/images/git-clone-4.png align="left")

The given command does the same thing as the previous one, but the target directory is switched to the specified directory.

### Git Clone Branch

To make a clone branch, you need to specify the branch name with the -b command. Below is the syntax of the command to clone the specific git branch: *Syntax:*

```plaintext
 $ git clone -b {branch name} {Repository URL}>
```

See the below command:

```plaintext
$ git clone -b master https://github.com/ImDwivedi1/Git-Example.git "new folder(2)"
```

![](https://static.javatpoint.com/tutorial/git/images/git-clone-5.png align="left")

In the given output, only the master branch is cloned from the principal repository Git -Example.

## Pushing file(s) to GitHub

We can push our code to GitHub from bash \[It is recommended that we have nothing to commit\]

1. \*Creating a new repository:\* You need to create a new repository and click on the plus sign. Fill up all the required details, i.e., repository name, and description, and also make the repository public this time as it is free.
    
2. !\[\](https://i.imgur.com/4EWFwBk.png) !\[\](https://i.imgur.com/9q1fUg1.png)
    
3. \*Open your Git Bash\*
    
4. \*Create your local project on your desktop directed towards a current working directory: Move to the specific path in your local computer by `cd 'path_name'` . The `cd` the command is used to change to the working directory in your operating system, and to locate your file, `'path_name'` , i.e., `C:/Users/Dell/Downloads/FaceDetect-master` needs to be given. This command can identify the required file that you are looking to work with.
    
5. !\[\](https://i.imgur.com/soIN2tK.png)
    
6. Initialize the git repository: Initialize the git repository using`git init` the command
    
7. !\[\](https://i.imgur.com/45YjU3E.png)
    
8. \*\*Add the file to the new local repository: Use `git add .` in your bash to add all the files to the given folder. Use `git status` in your bash to view all the files that are going to be staged to the first commit.
    
9. !\[\](https://i.imgur.com/ZqYEvxO.png)
    
10. Commit the files staged in your local repository by writing a commit message
    
11. !\[\](https://i.imgur.com/ogoyi2W.png)
    
12. Copy your remote repository's URL from GitHub:
    
13. The HTTPS or URL is copied from the given GitHub account, which is the place of the remote repository. !\[\](https://i.imgur.com/5GSsEnY.png)
    
14. Add the URL copied, which is your remote repository to where your local content from your repository is pushed
    
15. git remote add origin 'your\_url\_name'
    
16. Push the code in your local repository to GitHub
    
17. git push -u origin master Then Fill in your GitHub username and password. !\[ad\](https://i.imgur.com/gf9qMMK.png)
    
18. View your files in your repository hosted on GitHub
    
19. !\[\](https://i.imgur.com/fNUnnYJ.png)
    

## PULL Request

If you make a change in a repository, GIT PULL can allow others to view the changes.

The simple command to PULL from a branch is:

```plaintext
git pull 'remote_name' 'branch_name'
```

![](https://static.javatpoint.com/tutorial/git/images/git-pull.png align="left")

The below figure demonstrates how pull acts between different locations and how it is similar or dissimilar to other related commands

![](https://static.javatpoint.com/tutorial/git/images/git-pull2.png align="left")

### PULL Request through Command Line

1. Fork the Repository :
    
2. The "Fork' is a copy of the main Repository. We can change the Repo by adding & deleting something. The change will not affect the main repo. To add your changes to the main repo You have to make a Pull Request. !\[\](https://i.imgur.com/pX2aItX.png)
    
3. \*\*Open your bash in your computer: \*\*
    
4. You need to move to the required path or folder by using the cd command, and the content can be viewed by using the `ls` command, which will list all of the present files in the directory, and in our case you can see the 'README.md' is present. !\[\](https://i.imgur.com/amgiEzz.png)
    
5. \*\*Make a new branch: \*\*
    
6. You can create a new branch by using the
    
    ```plaintext
    git checkout -b 'branch_name'
    ```
    
    !\[\](https://i.imgur.com/qCgQIxu.png)
    
7. \*\*Make a change by using Vim from bash or direct replacement from the original README file\*\*
    
8. !\[\](https://i.imgur.com/ZyQApTE.png)
    
9. \*\*Adding and Committing a file to the repository\*\*
    
10. !\[\](https://i.imgur.com/yYYl30F.png)
    
11. \*\*Push the repository to the GitHub\*\*
    
12. You need to push the content by:
    
    ```plaintext
    git push origin 'branch_name'
    ```
    
    !\[\](https://i.imgur.com/Eq2viyX.png)
    
13. \*\*PULL request for a specific branch on GitHub: \*\*
    
14. You can move to your repository in GitHub and see that there is a new branch. Alternatively, you can do a \`\`\` git pull-request \`\`\` in the command line and complete the PULL Request to GitHub, where it will force push your current branch to a remote repository. !\[\](https://i.imgur.com/SwuYNpF.png)
    
15. \*\*Open a Pull request: \*\*
    
16. You need to click the button on "Create pull request," to finish the action. !\[\](https://i.imgur.com/gI0HoHX.png)
    

### PULL Request through GitHub Desktop

1. \*\*Cloning and Opening to Desktop: \*\*
    
2. A project is cloned and click to "Open in Desktop". !\[\](https://i.imgur.com/HIY445n.png)
    
3. \*\*Create a new branch : \*\*
    
4. A new branch, "fix-typo-imp" is created. !\[\](https://i.imgur.com/oiofHh0.png)
    
5. \*\*Make a change in the imp file from the text editor: \*\*
    
6. ou can change the content of the imp file, fix a typo, and add some text.
    
7. \*\*Commit the changes: \*\*
    
8. A commit message written and "Commit to fix-typo-imp" is clicked. !\[\](https://i.imgur.com/7Ft9iz1.png)
    
9. \*\*Publish the branch: \*\*
    
10. You can now publish the branch, which pushes the commit to GitHub. !\[\](https://i.imgur.com/M5QZwdG.png)
    
11. \*\*Create a PULL Request: \*\*
    
12. You can now make a PULL request by clicking "Create pull request". !\[\](https://i.imgur.com/p3pzYIa.png) !\[\](https://i.imgur.com/2flAXxO.png)
    

* You need to move to the main page of the repository and click "Pull requests".
    
* !\[\](https://i.imgur.com/i2wqIO5.png)
    
* You need to click 'Closed' to see the lists of all the PULL Requests that you've made, but there is only one at the moment which needs to be selected. It is the one related to your branch that you want to delete.
    
* !\[\](https://i.imgur.com/XyIxLdu.png)
    
* You can now click 'Delete branch' to complete the action.
    
* !\[\](https://i.imgur.com/tThThh6.png) The owner of the repository can view all the commits, pull request, etc., made by collaborators and others. The changes made by someone can be significant, quick fixes for a bug, errors, etc., and are added to the project. !\[\](https://i.imgur.com/J02pFZh.png)
    
* The owner now clicks "Merge pull request". Also, he/she will click "Confirm merge" through the following process.
    
* !\[\](https://i.imgur.com/rAuHU5X.png) !\[\](https://i.imgur.com/qjrf9Hf.png)
    
* The last change made to the README.md file with a corrected typo is below.
    
* !\[\](https://i.imgur.com/uz3VwSQ.png)
    

## Conclusion

Thank you for reading this complete guide to version control on Git. Whether you're a beginner or a more experienced user, we hope that this guide has helped you understand the basics of Git. We'll be adding more information on Git. If you found this guide helpful, please like, share, and follow us for more blog posts like this in the future.

If you found this blog interesting do tweet about it and tag me!

My Twitter: [https://twitter.com/intent/follow?screen\_name=Arindam\_1729](https://twitter.com/intent/follow?screen_name=Arindam_1729)