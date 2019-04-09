import firebase from "../utils/firebase";
const db = firebase.firestore();
export const EMPLOYEES = db.collection("employees");
export const GUARD = db.collection("guards");
export const OFFICES = db.collection("offices");
export const UNUSERS = db.collection("unusers");
export const VISITORS = db.collection("visitors");
export const ADMINS = db.collection("admins");
export const NOTICES = db.collection("notices");
