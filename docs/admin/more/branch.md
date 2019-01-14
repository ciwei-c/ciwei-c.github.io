---
sidebar: auto
---
# git从已有分支拉新分支开发

    1. 切换到被copy的分支（master），并且从远端拉取最新版本
    
    $git checkout master
    
    $git pull
    
    2. 从当前分支拉copy开发分支
    
    $git checkout -b dev
    
    Switched to a new branch 'dev'
    
    3. 把新建的分支push到远端
    $git push origin dev
    
    4. 拉取远端分支
    $git pull
    
    There is no tracking information for the current branch.
    Please specify which branch you want to merge with.
    See git-pull(1) for details.
    
    git pull <remote> <branch>
    
    If you wish to set tracking information for this branch you can do so with:
    
    git branch --set-upstream-to=origin/<branch> dev
    
    经过验证，当前的分支并没有和本地分支关联，根据提示进行下一步：
    5. 关联
    
    $git branch --set-upstream-to=origin/dev
    6. 再次拉取 验证
    
    $git pull