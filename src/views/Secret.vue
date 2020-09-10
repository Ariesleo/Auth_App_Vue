<template>
    <div>
        Secret
        <p>This is secret page</p>
        <div class="containe">
            <P>Email: {{ current_user_email }}</P>
            <P>Name: {{ user_name }}</P>
            <P>Image_URL: {{ user_photoUrl }}</P>
            <p>Email_Verification: {{ emailVerified }}</p>
            <p>Email_ID: {{ uid }}</p>
            <img v-bind:src="user_photoUrl" width="100" height="100"/>
            <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
            <b-icon icon="lock"></b-icon>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            current_user_email: null,
            user_name:null,
            user_photoUrl: null,
            emailVerified: null

        }
    },
    created() {
        const user = firebase.auth().currentUser;
        // const user_name, current_user_email, user_photoUrl;

        if (user !=null) {
            this.user_name = user.displayName;
            this.current_user_email = user.email;
            this.user_photoUrl = user.photoURL;
            this.emailVerified = user.emailVerified;
            this.uid = user.uid;
        }
    }
    
}
</script>