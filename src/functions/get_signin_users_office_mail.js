import firebase from "../utils/firebase";
export const getSigninUserMail = async () => {
  var mail = null;
  await firebase.auth().onAuthStateChanged(function(user) {
    mail = user.email;
    const db = firebase.firestore();
    db.collection("employees")
      .doc(mail)
      .get()
      .then(function(doc) {
        console.log(doc.data().o_mail);
        return doc.data().o_mail;
      })
      .catch(function(error) {
        // console.log(error);
      });
  });
};
