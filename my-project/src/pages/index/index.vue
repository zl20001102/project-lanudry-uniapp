<template>
	<view class="content">
		<view class="text-area">
			 <div class='projectOut'>

			    <div class='projectItem' v-for="(item,index) in items">
					<div class='project-img'>
						<img :src="item.icon" alt="">
					</div>
					<div>
						{{item.text}}
					</div>
				</div>

			  </div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					{id:'1',text:"项目管理",icon:'../../static/homeI-icons/project_man.png'},
					{id:'2',text:"衣物分类",icon:'../../static/homeI-icons/close_classify.png'},
					{id:'3',text:"用户管理",icon:'../../static/homeI-icons/user_man.png'},
					{id:'4',text:"财务管理",icon:'../../static/homeI-icons/amount_man.png'},
					{id:'5',text:"一键收衣",icon:'../../static/homeI-icons/get_close.png'},
					{id:'6',text:"一键取衣",icon:'../../static/homeI-icons/take_close.png'},
					{id:'7',text:"当日订单",icon:'../../static/homeI-icons/today_order.png'}
				],
				marriage: '2',
			}
		},
		onLoad() {
      this.init()
		},
		methods: {
			handelClick(value){
				console.log(value)
			},
			init(){
				this.$axios({
					methods:'get',
					url:'/tencentApi/test'
				}).then(res=>{
					console.log('数据',res)
				})
			}
		}
	}
</script>

<style>
	.projectItem{
		width: 33%;
		height: 100px;
		text-align: center;
		box-sizing: border-box;
		border: 0.5px solid rgb(247, 248, 249);
	}
	.projectOut{
		 display: flex;
		 flex-flow: wrap;
		 align-content: flex-start;
	}
	.project-img{
		margin-bottom: 5px;
		padding-top: 20px;
	}
  .project-img img{
    width: auto;
    height: auto;
  }
</style>
