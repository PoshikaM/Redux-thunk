import axios from "axios"

const DataFetched = () => async (dispatch) => {
    
    dispatch({ type: "REQUEST" });
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "UNSUCCESS", error });
    }
};

export default DataFetched;