import DataFetched from "./Components/Action";
import { useDispatch, useSelector } from "react-redux";

function App(){
    const dispatch = useDispatch();
    const fetchedData = useSelector((state) => state);
    // console.log(fetchedData);

    return (
        <div>
            <div style={{textAlign:"center"}}>
            <button onClick={() => dispatch(DataFetched())}>Fetch Data</button>
            </div>
            {fetchedData.items.map((info, id) => {
                return (
                    <div key={id}>
                        <h1 style={{textAlign:"center"}}>{info.name}</h1>
                        <h2 style={{textAlign:"center"}}>{info.email}</h2>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default App;