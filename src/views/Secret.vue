<template>
    <div>
        Secret
        <p>This is secret page</p>
        <div class="containe">
            <P>{{ current_user_email }}</P>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            current_user_email: null
        }
    },
    created() {
        const user = firebase.auth().currentUser;
        this.current_user_email = user.email;
    }
    
}
</script>