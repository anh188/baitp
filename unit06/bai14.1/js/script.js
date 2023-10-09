$(document).ready(function(){
  $("#addTask").on("click", function(){
      var task = $("#taskInput").val().trim();

      if (task !== "") {
          $("#error").text("");
          var listItem = $("<li>").text(task);
          listItem.append('<i class="fa-solid fa-xmark"></i>');
          $("#taskList").append(listItem);

          $("#taskInput").val("");
      } else {
          $("#error").text("Vui lòng nhập nội dung!!!");
      }
  });

  // Xử lý sự kiện click cho các công việc
  $("#taskList").on("click", "li", function(){
      $(this).toggleClass("completed");
      var listItem = $("<li>").text(task);
  });

  // Xử lý sự kiện click cho nút xóa
  $("#taskList").on("click", ".fa-solid", function(e){
      e.stopPropagation(); 
      $(this).parent().remove();
  });
});