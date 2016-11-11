function calc(){
    var jbf;
    var htjia = document.getElementById("htjia").value;
    var ssjia = document.getElementById("ssjia").value;
    var sdjia = document.getElementById("sdjia").value;
    var sfl = document.getElementById("sfl").value;
 
    if(htjia==""){
     alert("合同价为空！请重新输入");
     return false;
    }
    if(ssjia==""){
         alert("送审价为空！请重新输入");
         return false;
    }
    if(sdjia==""){
         alert("审定价为空！请重新输入");
         return false;
    }
 
    //计算核减额
    hje = sdjia - ssjia;
 
    //计算核减率
    hjlu = hje / ssjia * 100 ;
 
    //计算基本费
    if(ssjia <= 2000000){
        jbf = ssjia * 0.006 * sfl;
    } else if (ssjia > 2000000 && ssjia <= 5000000){
        jbf = (2000000 * 0.006 + (ssjia - 2000000) * 0.005) * sfl;
    } else if (ssjia > 5000000 && ssjia <= 10000000){
        jbf = (2000000 * 0.006 + 3000000 * 0.005 + (ssjia - 5000000) * 0.0045) * sfl;
    } else if (ssjia > 10000000 && ssjia <= 30000000){
        jbf = (2000000 * 0.006 + 3000000 * 0.005 + 5000000 * 0.0045 + (ssjia - 20000000) * 0.004) * sfl;
    } else if (ssjia > 30000000 && ssjia <= 50000000){
        jbf = (2000000 * 0.006 + 3000000 * 0.005 + 5000000 * 0.0045 + 20000000 * 0.004 + (ssjia - 30000000) * 0.0035) * sfl;
    } else if (ssjia > 50000000){
        jbf = (2000000 * 0.006 + 3000000 * 0.005 + 5000000 * 0.0045 + 20000000 * 0.004 + 20000000 * 0.0035 + (ssjia - 50000000) * 0.003) * sfl;
    }
 
    // 计算效益费
    if (hjlu > 5) {
        xyf = ssjia * (hjlu - 0.05) * 0.025;
    }else{
        xyf = 0;
    }
     
    //计算应收费
    ysf = jbf + xyf;
 
    //把算出来的值填到相应的表单中
    document.getElementById("hje").value = hje;
    document.getElementById("hjlu").value = hjlu;
    document.getElementById("jbf").value = jbf;
    document.getElementById("xyf").value = xyf;
    document.getElementById("ysf").value = ysf;
}
</script>
