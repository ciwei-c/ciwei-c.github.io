---
sidebar: auto
---
# git 常用操作

## 拉分支

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

## 回退

### reset
回到某个目标版本，且目标版本之后的版本记录全部删除，HEAD指向目标版本

    1、查看历史版本号
      $git log

    2、选择目标版本号

    3、使用 "git reset --hard 目标版本号" 命令回退
      $git reset --hard 版本号

    4、使用 "git push -f" 提交更改，"git push" 会报错，因为我们本地库HEAD指向的版本比远程库的要旧
      $git push -f

### revert
创建一个新的版本，且版本内容与目标版本一样，HEAD指向新版本

    1、查看历史版本号
      $git log

    2、选择目标版本号

    3、使用 "git revert -n 目标版本号" ，可能会出现冲突，那么需要手动修改冲突的文件。 而且要git add 文件名。
      $git revert -n 版本号

    4、提交
      $git commit -m "xxxx"