# Javascript-Projects

## Git basics

1. working directory --> 2) local --> 3) Remote

### Working Directory

Any changes you have made to the repo (but havn't commited yet)

### Local

When you have staged and committed your changes they exist on the local repo

### Remote

Changes which you have made locally but subsequently 'pushed' to remote repo.
(When you work with other peoplethey can also make changes to the remote repo,
and you may need to 'pull' the changes)

## How to commit my changes

First I need to stage my changes in the working directory

- git add file_name

Then add a commit message

- git commit -m 'This is a commit message'

## How to make my local changes reflect in the remote repo

- git push

## How do I get other peoples changes that they have made in the remote repo?

- git pull

## How to create a new branch in Github

-git branch -b name-of-branch

## list the branch

-git branch

## how to merge a feature branch to the main branch

-you should be on the main branch in order to do this;
git merge name-of-feature-branch

## moving from one branch to another branch

-git checkout name-of-branch

## Pull request/ Merge Request
Some companies use continuous integration. This is when a new build of the application is triggered when changes are made to the main/master branch.  
When developing new features / modify the code base, we want to make sure that we don't break the live aplication. We do this by creating a feature branch. 

Any changes in code which you want to deploy in the live application you always put a pull or merge request, (where other developer check your work before approving) in order it to be added to the main branch.

## how to change the branch name
git branch -m old-name new-name   

## git pull:
git fetch and git merge