import {Link} from "react-router-dom";
import userPhoto from "../../../axios/images/user.png";
import {useSelector} from "react-redux";
import {appStateType} from "../../../Redux/redux-store";
import {photosType} from "../../../type/type";



/*const MyPhotoNavlink:FC = (props) => {

    const AuthUser =useSelector((state:appStateType)=>state.postPage.profile?.photos)

    return <div>
        <Link to="/profile">
            <img  ={AuthUser != null? AuthUser : userPhoto} />
        </Link>
    </div>
}*/
