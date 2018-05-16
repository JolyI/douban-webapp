export default {
namespaced:true,
   state:{
    navBar:true,    //  是否展示顶栏
    showBack:true,  //  顶栏返回
    showMore:true,  //  顶栏显示更多
    navTitle:'',    //  顶栏标题
    
   },
   mutations:{
       setnavBar(state,data){
        state.navBar = data
       },
       setshowBack(state,data){
        state.showBack = data
       },
       setshowMore(state,data){
        state.showMore = data
       },
       setnavTitle(state,data){
        state.navTitle = data
       },
   }
}