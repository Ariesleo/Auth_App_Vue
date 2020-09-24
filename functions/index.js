const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    // get user and add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(val => {
        return admin.auth().setCustomUserClaims(val.id, {
            admin: true
        });
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made admin`
        }
    }).catch(err => {
        return err;
    });
});