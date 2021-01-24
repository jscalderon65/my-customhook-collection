import {
    useState,
    useEffect
} from 'react'
const useFirebaseUser = (firebase) => {
    const [User, setUser] = useState(false);
    const [UserInfo, setUserInfo] = useState({});
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(true);
        } else {
            setUser(false);
        }
    });
    useEffect(() => {
        setUserInfo(firebase.auth().currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [User]);
    return [UserInfo, User]
}

export default useFirebaseUser;