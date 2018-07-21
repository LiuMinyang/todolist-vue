<template>
    <div>
        <div>
            <input v-model="inputValue" type="text">
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
            <Item 
                v-for="(item,index) of list"
                v-bind:key="index"
                :content="item"
                :index = 'index'
                @handleDelet = 'handleDelet'
             >
             
             </Item>   
        </ul>
    </div>
</template>

<script>
import Item from './conmponents/item';

export default {
    components:{
        'Item':Item
    },
    data(){
        return {
            inputValue:'',
            list:[]
        }
    },
    methods:{
        handleSubmit(){
         this.list.push(this.inputValue);
         this.inputValue = '';
        },
        handleDelet(index){
            this.list.splice(index,1)
        }
    }
}
</script>

<style>
</style>
