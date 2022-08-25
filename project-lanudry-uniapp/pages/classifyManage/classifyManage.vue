<template>
	<view class="container">
	<uni-section title="基础用法" type="line">
		<uni-list>
			<uni-list-item :title="item.classifyName" v-for="item in classifyList"/>
		</uni-list>
	</uni-section>
	
	<uni-swipe-action-item>
			<template v-slot:left>
				<view><text>置顶</text></view>
			</template>
			<view>
				<text >使用插槽</text>
			</view>
			<template v-slot:right>
				<view><text>删除</text></view>
			</template>
		</uni-swipe-action-item>
				
	</view>
</template>


<script>
	export default {
		data() {
			return {
				classifyList:[]
			}
		},
		methods: {
			init(){
				this.$axios.get('/classify/selectClassifyList',{params:{userId:3}}).then((res)=>{
					this.classifyList=res.obj
				})
			}
		},
		created() {
			this.init()
		},
		onNavigationBarButtonTap(){
			
		}
	}
</script>

<style>

</style>
