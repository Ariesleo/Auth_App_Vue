<template>
    <div>
        Logged In
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button  v-if="loggedIn" @click="signOut()" class="btn btn-secondary">Sign Out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    created() {
        firebase.auth().onAuthStateChanged(val=> {
            //this.loggedIn = !!user;
            if(val) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        })
    },
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut() {
            try {
            const data = firebase.auth().signOut();
            console.log(data);
            this.$router.replace({name: "login"});
        }catch(err) {
            console.log(err);
        }

        }
    }
}
</script>

<style scoped>
.btn {
    color: black;
}
</style>