<template>
<div>
    <h3>Lifecycle Hooks</h3>
    <ul v-if="visible === 'hide'">
        <li v-for="list in lists" :key="list">{{ list }}</li>
    </ul>
    <v-btn
      color="primary"
      @click="showInfo"
      @dblclick="hideInfo"
    >
      {{ visible }}
    </v-btn>
    <v-text-field label="input" v-model="addmore" @keyup.enter="addList"></v-text-field>
    <v-spacer></v-spacer>
    <v-btn color="secondary" @click="addList">add</v-btn>
    <v-btn color="secondary" @click="deleteList">delete</v-btn>
</div>
</template>

<script>
export default {
    name: 'lifecycle',
    data() {
        return {
            lists: [1,2,3,4,11],
            visible: 'show',
            addmore: '',
        };
    },
    methods: {
        showInfo() {
            this.visible = 'hide';
        },
        hideInfo() {
            this.visible = 'show';
        },
        addList() {
            this.lists.push(this.addmore);
        },
        deleteList() {
            this.lists.pop();
        }
    },
    // beforeCreate() {
    //     alert('beforeCreate');
    // },
    // created() {
    //     alert('created');
    // },
    // beforeMount() {
    //     alert('beforeMount');
    // },
    // mounted() {
    //     alert('mounted')
    // },
    // beforeUpdate() {
    //     alert('beforeUpdate');
    // },
    // updated() {
    //     alert('updated');
    // },
    // beforeDestroy() {
    //     alert('are you sure to delete');
    // },
    // destroyed() {
    //     alert('destroyed');
    // },
    
}
</script>
