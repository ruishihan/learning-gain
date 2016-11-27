#工控机git库使用说明

##预先安装openssh-server
		sudo apt-get install openssh-server


##工控机上已有的git库名称如下：

		Air
		Class
		MANET
		Matlab_sdr
		R7-OCM
		seafdma
		S-Ocean-Socket-0713
		TT1
		USRT


##以Air库为例：
**首先将自己电脑的网络连接设为DHCP模式，连接到路由器上**

##下载代码：
		git clone git@192.168.1.2:Air
192.168.1.2的登录密码是：`gituser`

*下载其他代码，则将* `Air` *替换成其他git库名*

###向工控机推送更改：
		git push origin master

