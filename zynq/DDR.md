DDR直接连向外部的DRAM，ARM访问DRAM只需要访问预留给DDR的地址空间


`inout [14:0]DDR_addr;`//DDR_addr为什么只有15位？？

##基本概念
[DDR概念介绍](http://blog.csdn.net/njuitjf/article/details/18360741)
>BANK
>Row
>Colume
>Bank地址与相应的行地址是同时发出的，此时这个命令称之为“行激活”（Row Active）。
>发送列地址寻址命令与具体的操作命令（是读还是写），这两个命令也是同时发出的，所以一般都会以“读/写命令”来表示列寻址。
>行有效到读/写命令发出之间的间隔被定义为tRCD，即RAS to CAS Delay（RAS至CAS延迟，RAS就是行地址选通脉冲，CAS就是列地址选通脉冲），我们可以理解为行选通周期。
>CL（CAS Latency，列地址脉冲选通潜伏期）

>目前内存的读写基本都是连续的，因为与CPU交换的数据量以一个Cache Line（即CPU内Cache的存储单位）的容量为准，一般为64字节。而现有的Rank位宽为8字节（64bit），那么就要一次连续传输8次，这就涉及到我们也经常能遇到的突发传输的概念。突发（Burst）是指在同一行中相邻的存储单元连续进行数据传输的方式，连续传输的周期数就是突发长度（Burst Lengths，简称BL）。

>DQS 是DDR中的重要功能，它的功能主要用来在一个时钟周期内准确的区分出每个传输周期，并便于接收方准确接收数据。每一颗芯片都有一个DQS信号线，它是双向的，在写入时它用来传送由北桥发来的DQS信号，读取时，则由芯片生成DQS向北桥发送。完全可以说，它就是数据的同步信号。
>DM
>>谈到了突发长度时。如果BL=4，那么也就是说一次就传送4×64bit的数据。但是，如果其中的第二笔数据是不需要的，怎么办？还都传输吗？为了屏蔽不需要的数据，人们采用了数据掩码（Data I/O Mask，简称DQM）技术。通过DQM，内存可以控制I/O端口取消哪些输出或输入的数据。这里需要强调的是，在读取时，被屏蔽的数据仍然会从存储体传出，只是在“掩码逻辑单元”处被屏蔽。DQM由北桥控制，为了精确屏蔽一个P-Bank位宽中的每个字节，每个DIMM有8个DQM 信号线，每个信号针对一个字节。这样，对于4bit位宽芯片，两个芯片共用一个DQM信号线，对于8bit位宽芯片，一个芯片占用一个DQM信号，而对于 16bit位宽芯片，则需要两个DQM引脚。
*DM是与数据总线的位宽相关的，数据线一次读多少个字节，DM就有多少个引脚*
*DM是与芯片位宽相关的话，这个芯片应该是16bit位宽的，应该有2个DQM引脚啊？？？？*
*芯片位宽与数据线位宽有什么关系吗？？可以不相等吗？？*

##容量计算
bank address 3bits
row address 15bits
col address 10bits
DRAM IC Bus Width(Width of individual DRAM components) 16bits

2^(3+15+10)*16=4096 Gbits =512MBytes

[内存手册](http://wenku.baidu.com/link?url=-vm0zDgOysptMW5oe3i3gKrEwZjjCICGEWJ24fLS5YNr35anzwpIOcEGZbpewhVEy1IFu-JBnFQSqqeIviKZ4RNeUJjnM0WRsFUWGxH61Sq)


MT41K256M16	256M表示 bank address+rowaddress+col address总共28bits，16表示一个单元(cell)有16bits(即芯片位宽为16bits)

##芯片位宽 物理bank位宽 数据线位宽

##突发

与CPU交换的数据量以一个`Cache Line`（即CPU内Cache的存储单位）的容量为准，一般为64字节。而现有的Rank位宽为8字节（64bit），那么就要一次连续传输8次，这就涉及到我们也经常能遇到的突发传输的概念。
>BL设定为8，因此一次会读取64 Bytes
##ARM对DDR的寻址地址设定
*在哪里设置DDR控制相关 寄存器？？？* `Xilinx Zynq-7000嵌入式系统设计与实现 (P184 表6.10) (P185 表6.12)`
##FPGA对DDR的寻址
FPGA对存储器的寻址和访问通过S_AXI_HP0总线进行，AXI总线连接`Programmable Logic to Memory interconnect`，如果是访问DDR，上述元件直接连接`Memory interface`，如果是访问OCM，上述元件通过`OCM interconnect`访问OCM。以上的这些连接器完成FPGA与ARM对物理地址的一致性处理(达成共识)
*详见文件 `R7OCM_rtl.md` *
