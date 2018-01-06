﻿$(document).ready( function () {
    a=new Array();

    var table=$('#table11').DataTable(
        {
        searching: false,//屏蔽datatales的查询框
        aLengthMenu:[10],//设置一页展示10条记录
        "stateSave": true,
        "bRetrieve": true,
          "ordering": false,//关闭排序
         "pagingType":"simple_numbers",
         "bLengthChange": false,//屏蔽tables的一页展示多少条记录的下拉列表
         "processing": true, //打开数据加载时的等待效果
         "serverSide": true,//打开后台分页
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
    			"url":"/sscm/queryStudents",
    		    "dataSrc": "aaData", 
    		    /*"data": function ( d ) {
                    var level1 = $('#table_id_example_filter input').val();
                    //添加额外的参数传给服务器
                    d.extra_search = level1;
                }*/
    		},
//    		"aoColumnDefs": [
//            {
//               sDefaultContent: '',
//               aTargets: [ '_all' ]
//             }
//             ],
    		
    		"aoColumns" :[
				{"mDataProp":"sno"},
    			{"mDataProp":"sname"},
    			{
                 "sClass": "text-center",
                 "mDataProp": "ssex",
                 "render": function (mDataProp, type, full, meta) {
                     if(mDataProp==true)
						 return '男';
					 else
						 return '女';
                 },
                 "bSortable": false
             },
    			{"mDataProp":"sage"},
				{"mDataProp":"dt"},
    			{"mDataProp":"sdept"},
				{
                 "sClass": "text-center",
                 "mDataProp": "sno",
                 "render": function (mDataProp, type, full, meta) {
                     return '<button class="btn disabled" value="' + mDataProp + '" >详情</button>';
                 },
                 "bSortable": false
             },
    		],
            
        });
  
 });


