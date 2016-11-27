#FPGA与AXI总线

##S2A_controller
>负责控制地址
>一方面需要给AXI总线中的地址线上写要访问的地址信息，这个地址信息的低6位为零(64字节对齐)；
>另一方面需要给缓冲区`blk_mem_axi2s`写地址，这个地址是5位的(32)，对应64字节

##blk_mem_axi2s
>缓冲区，大小为16*64 Bytes，即16块缓冲区，一次突发会传64 Bytes
		blk_mem_axi2s s2axi (
		  .ena(Ien),         // input wire ena
		  .wea(s2a_wea),     // input wire [0 : 0] wea
		  .addra(Iaddr),     // input wire [4 : 0] addra
		  .dina(Sin),        // input wire [31 : 0] dina
		  .clka(Sclk),       // input wire clka
		  .clkb(AXI_clk),    // input wire clkb
		  .enb(s2a_en),      // input wire enb
		  .addrb(s2a_addr),  // input wire [4 : 0] addrb
		  .doutb(AXI_wdata)  // output wire [31 : 0] doutb
		);
>`s2axi`是FPGA通过AXI写存储器的
>`Sin` 输入到缓冲区的数据，来自AD9361(去差动后)
		Sin = {Rx_Q[11],Rx_Q[11],Rx_Q[11],Rx_Q[11],Rx_Q[11:0],Rx_I[11],Rx_I[11],Rx_I[11],Rx_I[11],Rx_I[11:0]};
>`s2a_addr`控制输出到AXI端口的数据，s2a_addr[4]指定输出缓冲区的哪一块，s2a_addr[3:0]指定输出哪个数据(一次4个字节)
>`Iaddr`控制把Sin输入的数据存储在缓冲区的哪个位置。
>`AXI_wdata`直接输出到AXI总线的数据接口


** FPGA对存储器的寻址和访问通过S_AXI_HP0总线进行，AXI总线连接`Programmable Logic to Memory interconnect`，如果是访问DDR，上述元件直接连接`Memory interface`，如果是访问OCM，上述元件通过`OCM interconnect`访问OCM。以上的这些连接器完成FPGA与ARM对物理地址的一致性处理(达成共识)**
