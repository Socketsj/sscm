﻿$(document).ready( function () {
	$("#addsend").click(function() {
		$("#addsure").modal({
			backdrop : 'static',
			keyboard : false
		});
	});
	$("#addreset").click(function() {
		resetAttr();
	});
	$("#addHaulBtn").click(function() {
		var sno = $("#addtno").val();
		var name = $("#addtname").val();
		var dept = $("#addtdept").val();
		var dt = $("#adddt").val();
		var comment = $("#tcomment").val();
		if(sno==""||name==""){
			alert("请正确填写信息");
			return;
		}
		$.ajax({
			type: "POST",
			url: "/sscm/admin/addTeacher",
			data: { tno:sno,tname:name,tdept:dept,dt:dt,tcomment:comment },
					success: function(msg) {
						if (msg=="false"){
							alert("添加失败！");
						} else{
							alert("添加成功！");
						}
						
						resetAttr();
					},
					error: function(a) {
						alert("增加失败");
					}
		});
	});
});
function resetAttr() {
	$("#addtno").val('');
	$("#addtname").val('');
	$("#addtdept").val('');
	$("#adddt").val('');
	$("#tcomment").val('');
}