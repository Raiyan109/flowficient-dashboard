import { useDispatch } from "react-redux";
import { changeLanuage } from "../redux/features/languages/languageSlice";

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(changeLanuage(event.target.value));
    };
    return (
        <div>
            <select class="styled-select" onChange={handleChange}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="bn">Bangla</option>
            </select>
        </div>
    )
}

export default LanguageSelector