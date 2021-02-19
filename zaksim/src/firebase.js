import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyDYsFCrrdwdn726KFHIfCGxw90-L38c3j4",
	authDomain: "ssafy-sub-project.firebaseapp.com",
	projectId: "ssafy-sub-project",
	storageBucket: "ssafy-sub-project.appspot.com",
	messagingSenderId: "138884423866",
	appId: "1:138884423866:web:1868b694b09f4ca8102283",
	measurementId: "G-PTCRVX5Y3C"
};

firebase.initializeApp(config)

export default firebase