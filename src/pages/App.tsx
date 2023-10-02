import axios from "axios";
import { useEffect } from "react";
import RobotListComponent from "../components/RobotListComponent";
import PartList from "../components/PartList";
import PartDetail from "../components/PartDetail";
import { useDispatch, useSelector } from "react-redux";
import { partList, robotList } from "../actions";
import { partSelectSelector, robotSelectSelector } from "../reducers/selector";

export default function App() {
    const dispatch = useDispatch();
    
    const robotSelected = useSelector(robotSelectSelector);
    const partSelected = useSelector(partSelectSelector);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://www.robots.loiclegoff.com/robots');
            console.log(response.data)
            dispatch(
                robotList(response.data)
            );
            const resp = await axios.get('https://www.robots.loiclegoff.com/parts');
            dispatch(
                partList(resp.data)
            );
        }
        fetchData();
    }, []);

    return (
        <div className="App m-4">
            <h1 className="mb-4">Welcome to robot shop</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <RobotListComponent />
                    </div>
                    <div className="col">
                        {robotSelected && <PartList />}
                    </div>
                    <div className="col">
                        {partSelected && <PartDetail />}
                    </div>
                </div>
            </div>
        </div>
    );
}