(window.webpackJsonp=window.webpackJsonp||[]).push([[23,49],{409:function(t,e,a){},518:function(t,e,a){"use strict";a.r(e);a(93),a(29),a(59);var s=a(238),i=a.n(s),l={mixins:[i.a.mixins.blockMixin],data:function(){return{type:"template-card",filters:{},searchs:{},data:{},sortField:null,sortOrder:null,activeIndex:0}},computed:{},created:function(){console.log("---created---",this)},methods:{parseTime:function(t){return i.a.utils.parseTime(t,"yyyy-MM-dd HH:mm")},newCompute:function(t){return Date.parse(new Date)-t<2592e6},handleClassChange:function(t,e){this.activeIndex=e,this.data.searchs=this.data.searchs||{},this.data.searchs.classId=t.id,this.emitEvent("list")},handlerSearch:function(){console.log("handlerSearch",this.searchs),this.data.page=1,this.emitEvent("list")},handleSizeChange:function(){console.log("handleSizeChange"),this.data.page=1,this.emitEvent("list")},handleCurrentChange:function(t){console.log("handleCurrentChange"),this.emitEvent("list")},handleSortChange:function(t){var e=t.prop,a=t.order;console.log("handleSortChange",e,a),this.sortField=e,this.sortOrder=a,this.data.page=1,this.emitEvent("list")},handleFilterChange:function(t){var e=this;console.log("handleFilterChange",t);var a=!1;Object.keys(t).forEach(function(s){if(console.log("this.block.filters[key].remote",e.block.filters[s].remote),e.block.filters[s].remote){a=!0;var i=t[s].join(",");i?e.filters[s]=i:delete e.filters[s]}}),a&&(this.data.page=1,this.emitEvent("list"))}}},n=a(13),r=Object(n.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ready?a("div",{class:"ams-material-card ams-block-"+t.type,style:t.block.style},[a("ams-blocks",{attrs:{blocks:t.block.slotBlocks.top}}),t._v(" "),a("div",{staticClass:"ams-card-list"},t._l(t.data.list,function(e,s){return a("div",{key:s,staticClass:"card-item"},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{staticClass:"card-item-snapshoot"},[t.newCompute(e.updateTime)?a("span",{staticClass:"new-card-icon"},[t._v("NEW")]):t._e(),t._v(" "),a("img",{attrs:{src:e.image||"https://h5rsc.vipstatic.com/ams/ams-logo.png",alt:""}})]),t._v(" "),a("div",{staticClass:"card-item-bottom"},[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.parseTime(e.updateTime)))])]),t._v(" "),a("div",{staticClass:"card-item-mask"},[a("h5",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v("简介： "+t._s(e.description))]),t._v(" "),a("p",[t._v("分类： "+t._s(t.fields.classId.props.options[e.classId]))]),t._v(" "),a("p",[t._v("作者： "+t._s(e.creator))]),t._v(" "),t.block.operations?a("el-row",{staticClass:"card-oparation"},[a("ams-operations",{attrs:{name:t.name,context:e}})],1):t._e()],1)])],1)}),0),t._v(" "),t.data.list.length<=0?a("div",{staticClass:"empty"},[a("div",[t._v("暂无数据")])]):t._e(),t._v(" "),t.data.total?a("el-pagination",{attrs:{"current-page":t.data.page,"page-size":t.data.pageSize,total:t.data.total,layout:"prev, sizes, pager, next, jumper",background:"",align:"right"},on:{"update:currentPage":function(e){return t.$set(t.data,"page",e)},"update:current-page":function(e){return t.$set(t.data,"page",e)},"update:pageSize":function(e){return t.$set(t.data,"pageSize",e)},"update:page-size":function(e){return t.$set(t.data,"pageSize",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("ams-blocks",{attrs:{blocks:t.block.blocks}})],1):t._e()},[],!1,null,null,null);e.default=r.exports},967:function(t,e,a){"use strict";var s=a(409);a.n(s).a},983:function(t,e,a){"use strict";a.r(e);var s=a(238),i=a.n(s),l=(a(237),a(260)),n=a.n(l),r=a(511),o={options:{classList:[{id:0,class:"全部",num:"3000"},{id:1,class:"VIP模版库",num:"3000"},{id:2,class:"区块DEMO",num:"3000"},{id:3,class:"字段DEMO",num:"3000"},{id:4,class:"定制物料",num:"3000"}]},type:"template-card",resource:"resource-template",ctx:"edit",filters:{},sorts:{},operations:{title:{slot:"searchs",type:"field",label:"名称"},search:{slot:"searchs",type:"button",label:"搜索",props:{type:"primary"},event:"list"},reset:{slot:"searchs",type:"reset",label:"重置"},json:{type:"button",label:"查看配置",props:{type:"primary",size:"mini",round:!0,icon:"el-icon-edit-outline"},style:{"margin-top":"7px"}},view:{type:"button",label:"预览",props:{size:"mini",round:!0,icon:"el-icon-view"},style:{"margin-top":"7px"}}},data:{list:{},page:1,pageSize:100,total:0},events:{init:"@getList",json:"@templateJsonDialog.show @console",view:"@view"},actions:{view:function(t){var e=t.$prevReturn;window.open("/ams/market/template-preview.html?templateId=".concat(e.templateId),"_blank")},getList:function(){this.filters={},this.searchs={},this.sortField="id",this.sortOrder="descending",this.callAction("@list")},list:function(){this.data.list=r.a}},blocks:{templateJsonDialog:{type:"dialog",data:{visible:!1,title:"配置"},blocks:{templateJsonForm:{type:"form",ctx:"edit",resource:{fields:{json:{type:"ams-code",labelWidth:"0"}}},actions:{init:function(t){var e=t.$prevReturn;this.data.json=n()(e.templateContent,{indent_size:4,space_in_empty_paren:!0})}}}}}}},c=a(518),p={type:"template-card",view:c.default,install:function(t){t.component("ams-block-".concat(this.type),c.default)}};i.a.registerBlock(p),i.a.resource("resource-template",{key:"templateId",api:{successCode:0,contentType:"form"},fields:{templateId:{type:"text",ctx:"view",label:"模版Id"},title:{type:"text",label:"模板名称"},projectId:{type:"text",label:"项目id"},templateContent:{type:"textarea",label:"配置JSON"},description:{type:"textarea",label:"模版说明",props:{rows:3}},classId:{type:"select",label:"分类",props:{multiple:!1,options:{0:"全部",1:"列表",2:"表单",3:"异常页",4:"路由",5:"图表",6:"规划日历"}}},image:{type:"image",label:"展示图片",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url"},createTime:{type:"datetime",label:"创建时间",ctx:"view"},updateTime:{type:"datetime",label:"更新时间",ctx:"view"},creator:{type:"text",label:"创建者OA",ctx:"view"},editor:{type:"text",label:"编辑者OA",ctx:"view"}}});var d={data:function(){return{init:!1}},mounted:function(){i.a&&i.a.blocks&&i.a.blocks["market-template"]?this.init=!0:(i.a.block("market-template",o),this.init=!0)}},m=(a(967),a(13)),u=Object(m.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ams-material"},[this._m(0),this._v(" "),this.init?e("ams-block",{staticClass:"ams-material-main",attrs:{name:"market-template"}}):this._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar ams-sidebar"},[e("ul",{staticClass:"sidebar-links"},[e("li",[e("a",{staticClass:"active sidebar-link",attrs:{href:"/ams/market/"}},[this._v("模板物料")])]),this._v(" "),e("li",[e("a",{staticClass:"sidebar-link",attrs:{href:"/ams/market/block.html"}},[this._v("区块物料")])]),this._v(" "),e("li",[e("a",{staticClass:"sidebar-link",attrs:{href:"/ams/market/field.html"}},[this._v("字段物料")])])])])}],!1,null,null,null);e.default=u.exports}}]);