(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d37e6220"],{"0b44":function(t,e,s){"use strict";s("d6b2")},"72b0":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail",attrs:{id:"trash"}},[e("div",{staticClass:"note-sidebar"},[e("h3",{staticClass:"notebook-title"},[t._v("回收站")]),t._m(0),e("ul",{staticClass:"notes"},t._l(t.trashNotes,(function(s){return e("li",[e("router-link",{attrs:{to:"/trash?noteId="+s.id}},[e("span",{staticClass:"date"},[t._v(t._s(s.updatedAtFriendly))]),e("span",{staticClass:"title"},[t._v(t._s(s.title))])])],1)})),0)]),e("div",{staticClass:"note-detail"},[e("div",{staticClass:"note-bar"},[e("span",[t._v(" 创建日期: "+t._s(t.curTrashNote.createdAtFriendly))]),e("span",[t._v(" | ")]),e("span",[t._v(" 更新日期: "+t._s(t.curTrashNote.updatedAtFriendly))]),e("span",[t._v(" | ")]),e("span",[t._v(" 所属笔记本: "+t._s(t.belongTo))]),e("a",{staticClass:"btn action",on:{click:t.onRevert}},[t._v("恢复")]),e("a",{staticClass:"btn action",on:{click:t.onDelete}},[t._v("彻底删除")])]),e("div",{staticClass:"note-title"},[e("span",[t._v(t._s(t.curTrashNote.title))])]),e("div",{staticClass:"editor"},[e("div",{staticClass:"preview markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}})])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu"},[e("div",[t._v("更新时间")]),e("div",[t._v("标题")])])}],o=s("d4cd"),i=s.n(o),n=s("2f62");let c=new i.a;var h={name:"TrashDetail",data(){return{}},computed:{...Object(n["c"])(["trashNotes","curTrashNote","belongTo"]),compiledMarkdown(){return c.render(this.curTrashNote.content||"")}},created(){this.checkLogin({path:"/login"}),this.getNotebooks(),this.getTrashNotes().then(t=>{this.setCurTrashNote({curTrashNoteId:this.$route.query.noteId}),this.$router.replace({path:"/trash",query:{noteId:this.curTrashNote.id}})})},methods:{...Object(n["d"])(["setCurTrashNote"]),...Object(n["b"])(["checkLogin","deleteTrashNote","revertTrashNote","getTrashNotes","getNotebooks"]),onDelete(){this.$confirm("彻底删除后将无法恢复，是否要删除","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>this.deleteTrashNote({noteId:this.curTrashNote.id})).then(()=>{this.setCurTrashNote(),this.$router.replace({path:"/trash",query:{noteId:this.curTrashNote.id}})})},onRevert(){this.revertTrashNote({noteId:this.curTrashNote.id}).then(()=>{this.setCurTrashNote(),this.$router.replace({path:"/trash",query:{noteId:this.curTrashNote.id}})})}},beforeRouteUpdate(t,e,s){this.setCurTrashNote({curTrashNoteId:t.query.noteId}),s()}},d=h,u=(s("0b44"),s("2877")),l=Object(u["a"])(d,r,a,!1,null,"e0072830",null);e["default"]=l.exports},d6b2:function(t,e,s){}}]);
//# sourceMappingURL=chunk-d37e6220.e3b36d12.js.map