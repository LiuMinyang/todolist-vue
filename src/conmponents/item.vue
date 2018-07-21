<template>
    <li @click="handleDeletItem" class='item'>{{content}}</li>
</template>

<script>
export default {
    props:['content','index'],
    methods:{
        handleDeletItem(index){
            this.$emit('handleDelet',this.index)
        }
    }
}
</script>

<style scoped>
/* scoped为定义局部样式 */
.item{
    color:darkcyan;
}
</style>
