$(function(){
    $('#issue_tree a[href*="/issues/new"]').on('click', function() {
        var inputList = document.getElementsByName("issue[custom_field_values][1]");
        var checked;
        for(var i = 0; i < inputList.length; i++){
            if(inputList[i].checked){
                checked = inputList[i];
            }
        }

     localStorage.setItem('key1', checked.value);// ローカルストレージへの書き込み
     alert(checked.value);
    });
 });
 
 $(function(){
    var hikitugi = localStorage.getItem('key1');
    if (hikitugi){
       // 初期表示時に前回保存された値を読み込んでセット
       var inputList = document.getElementsByName("issue[custom_field_values][1]");
       var checked;
       for(var i = 0; i < inputList.length; i++){
           if(inputList[i].value === hikitugi){
               inputList[i].checked = true;
           }
       }

       // ローカルストレージのクリア
       localStorage.clear();
    }else{
    //何もしない
    }
 });