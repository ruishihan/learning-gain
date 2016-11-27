PS部分和传统的处理器内部结构一致，包括CPU核、图像加速、浮点运算、存储控制器、各种通信接口外设记忆GPIO外设等。如果不使用PL，zynq的PL部分就是传统意义的FPGAPS部分和普通的ARM开发一样。


PL部分就是传统的可编程逻辑和支持多种标准的IO，它们之间通过内部告诉总线互联(AXI).zynq的PL部分就是传统意义的FPGA，可以很方便地定制相关外设IP，也可以进行相关的算法设计，和使用普通FPGA完全一样。