﻿var state = 0;
var table;
$(document).ready( function () {

		table=$('#table11').DataTable(
        {
        searching: false,//屏蔽datatales的查询框
        aLengthMenu:[5],
        "stateSave": true,
        "bRetrieve": true,
        "ordering": false,//关闭排序
        "pagingType":"simple_numbers",
        "bLengthChange": false,//屏蔽tables的一页展示多少条记录的下拉列表
        "processing": true, //打开数据加载时的等待效果
        "serverSide": true,//打开后台分页
		"bPaginate":true,
        " buttons": [
                   'selectAll',
                   'selectNone'
               ],
         "language": {
                 "lengthMenu": "每页 _MENU_ 条记录",
                 "zeroRecords": "没有找到记录",
                 "info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
                 "infoEmpty": "无记录",
                 "infoFiltered": "(从 _MAX_ 条记录过滤)",
                 "search":"搜索:",
                 "paginate": {
                    "first":      "第一页",
                    "last":       "最后一页",
                    "next":       "下一页",
                    "previous":   "上一页"
    },

             },
            // "scrollY": "300px",//滚动宽度
    		//"scrollCollapse": "false",//滚动条
    		"ajax":{
    			"url":"/sscm/admin/queryTeacher",
    		    "dataSrc": "aaData", 
    		    "data": function ( d ) {
                    if(state==1){
						d.tno = $('#tno').val();
					}
					else if(state==2){
						d.tdept = $('#tdept').val(); 
						d.tname = $('#tname').val();
						d.sdate = $('#sdate').val();
						d.edate = $('#edate').val();
					}
					d.state = state;
				}
    		},
//    		"aoColumnDefs": [
//            {
//               sDefaultContent: '',
//               aTargets: [ '_all' ]
//             }
//             ],
    		
    		"aoColumns" :[
				{"mDataProp":"tno"},
    			{"mDataProp":"tname"},
				{"mDataProp":"dt"},
    			{"mDataProp":"tdept"},
				{
                 "sClass": "text-center",
				 "mDataProp":"tno",
                 "render": function (mDataProp, type, full, meta) {
                     return '<button class="btns" onclick="detailFunc(' + full.tno +',\''+full.tname+'\',\''+ full.tpass +'\',\''+full.dt +'\',\''+full.sdept+'\')" >修改</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btns" onclick="deletefunc(' + mDataProp + ')" >删除</button>';
                 },
                 "bSortable": false
             },
    		],
            
        });
		$("#table_id_example_filter").hide();
		 //按钮查询
	$(document).on("click","#search2",function(){
		var sno = $('#outListNum').val();
		if(sno==""){
			alert("请输入工号！");
			return;
		}
		state = 1;
	    table.draw();
	    //table.search(args1+" "+args2).draw(false);//保留分页，排序状态

	});
	$(document).on("click","#search",function(){
		var sdept = $('#tdept').val(); 
		var sname = $('#tname').val();
		var sdate = $('#sdate').val();
		var edate = $('#edate').val();
		if(sdept==""&&sname==""&&sdate==""&&edate==""){
			alert("请正确输入查询条件！");
			return;
		}
		state = 2;
	    table.draw();
	    //table.search(args1+" "+args2).draw(false);//保留分页，排序状态

	});
	$("#deleteHaulBtn").click(function() {
		var sno = $("#deleteHaulId").val();
		if(sno=="") return;
		$.ajax({
			type: "POST",
			url: "/sscm//admin/delTeacher",
			data: { tno: sno },
			success: function(msg) {
				//$("#delcfmOverhaul").modal('hide')
				if(msg=="true"){
					table.draw();
					alert("删除成功");
				} else {
					alert("删除失败");
				}
				$("#deleteHaulId").val('');
			},
			error: function(a) {
				//$("#delcfmOverhaul").modal('hide')
				alert("删除失败");
			}
		});
	});
	$("#closemodel").click(function() {
		$("#deleteHaulId").val('');
	});
	$("#closemodelsend").click(function() {
		$("#modetno").val('');
		$("#modepass").val('');
		$("#modetname").val('');
		$("#modetdept").val('');
		$("#modetdate").val('');
	});
	$("#sendHaulBtn").click(function() {
		var sno = $("#modetno").val();
		var name = $("#modetname").val();
		var dept = $("#modetdept").val();
	    var dt = $("#modetdate").val();
		if(sno==""||name==""||dept==""||dt==""){
			alert("请正确输入");
			return;
		}
		$.ajax({
					type: "POST",
					url: "/sscm/admin/changeTeacher",
					data: { tno:sno,tname:name,tdept:dept,dt:dt },
						success: function(msg) {
							if (msg=="true"){
								alert("修改成功");
								table.draw();
							}else{
								alert("修改失败");
							}
						},
					error: function(a) {
						alert("修改失败");
					}
				});
	});
  
 });
 function detailFunc(sno,sname,password,dt,sdept){
	$("#modetno").val(sno);
	$("#modepass").val(password);
	$("#modetname").val(sname);
	$("#modetdept").val(sdept);
	$("#modetdate").val(dt);
	$("#updateOverhaul").modal({
        backdrop : 'static',
        keyboard : false
    });
 }
 function deletefunc(sno){
	$("#deleteHaulId").val(sno);
	$("#delcfmOverhaul").modal({
        backdrop : 'static',
        keyboard : false
    });
 }
	 


