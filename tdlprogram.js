    $("#additem").click(function(){

      var item = document.getElementById("listitem").value;
      document.getElementById("listitem").value="";
      
      //alert("Value: " + $("#listitem").val());
      $("#list").append("<li id='i1'>"+item+ "<div class='rembtn' id='remitem'><i class='fas fa-minus'></i></div></li>");
    
    
      $(document).on("click","#remitem",function(){
      $(this).parent().remove();
    });
     

    });

      $("#clear").click(function(){
        $("#list").empty();
      });