#概念理解
##0-1分布与二项分布

- 抛一枚正面朝上的概率为p的硬币就是0-1分布；
- 二项分布就是把0-1分布重复n次；

##二项分布与泊松分布

- 泊松分布可以认为是*连续域的二项分布*;
- 但是如果事件由离散变为连续发生，其期望Ex=np，就会变成无穷大，因此我们做一下变化，规定该事件在单位时间内发生的平均次数是lambda，那么在单个时间点上发生的概率为lambda/n，趋近于0，但是保证了在单位时间上发生的次数的期望为lambda.
- 由此，我们就可以导出泊松分布的概率分布公式的意义：在单位时间中发生该事件的次数为k的概率为`exp(-lambda)*[(lambda)^k/k!]`

##泊松分布与泊松过程

- 泊松分布是在单位时间中的分布，我们将这个分布进一步扩展到无限时间上，即为泊松过程；
- 泊松过程与泊松分布在本质上并没有变，泊松过程概率公式的意义为：在t长度上(单位时间的t倍)事件发生的次数为k的概率为`[(lambda*t)^k/k!]*exp(-lambda*t)`
- 显然当t取值为1(即把时间再次局限到单位时间中)，泊松过程退化为泊松分布。

##泊松过程与指数分布

- inter-arrival time xi~EXP(lambda)	Ex=1/lambda	var(x)=1/lambda^2
- 指数分布是memoryless 的，即P(x>t+s | x>s)=P(x>t)
- 对于泊松过程，在t时间中事件发生的次数为0的概率服从指数分布，即*在某个时段内一直没有事件发生的概率随时间的增长而呈指数衰减*。

##泊松过程与均匀分布

- the arrival time Si 如下所示
- 在事件发生一次的时间间隔中(第n-1次到第n+1次发生)，事件发生的时间等概率分布。这从泊松过程的含义中是很容易得出的。

[阮一峰 泊松分布与美国枪击案](http://www.ruanyifeng.com/blog/2013/01/poisson_distribution.html)
[二项分布与泊松分布](http://blog.csdn.net/lhyer/article/details/47832137)

##泊松过程与二项分布
P{N(t1)=k | N(t2)=n}~b(k;n,t1/t2)

#常用公式

##intensity	

Ex=lambda

##var(x)=lambda

##自相关系数
R(t1,t2)=......

##协方差
`C(t1,t2)=R(t1,t2)-m(t1)*m(t2)=lambda*min(t1,t2)`

##inter-arrival time xn

##the arrival time of the No.n event Sn=x1+x2+x3+...+xn

#Compound Possion Process
##generationg function 生成函数/矩母函数

#Random Walk

#Gambler's Ruin Problem

