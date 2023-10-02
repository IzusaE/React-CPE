import axios from "axios";
import { useEffect, useState } from "react";
import RobotListComponent from "../components/RobotListComponent";
import PartList from "../components/PartList";
import PartDetail from "../components/PartDetail";
import { Part } from "../Interfaces/Part";
import { Robot } from "../Interfaces/Robot";

export default function App() {
    const [robotList, setRobotList] = useState<Robot[]>([]);
    const [selecetdRobot, setSelectedRobot] = useState<Robot>();

    const [partList, setPartList] = useState<Part[]>([]);
    const [selectedPart, setSelectedPart] = useState<Part>();

    const [filteredPartList, setFilteredPartList] = useState<Part[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://www.robots.loiclegoff.com/robots');
            setRobotList(response.data);
            const resp = await axios.get('https://www.robots.loiclegoff.com/parts');
            setPartList(resp.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredPartList(partList.filter((part: Part) => selecetdRobot?.parts.includes(part.id)));
    }, [selecetdRobot]);

    return (
        <div className="App m-4">
            <h1 className="mb-4">Welcome to robot shop</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <RobotListComponent robotList={robotList} robotSelected={selecetdRobot} setSelected={setSelectedRobot} />
                    </div>
                    <div className="col">
                        {selecetdRobot && <PartList filteredPartList={filteredPartList} selectedPart={selectedPart} setSelected={setSelectedPart} />}
                    </div>
                    <div className="col">
                        {selectedPart && <PartDetail myPartDetail={selectedPart}  />}
                    </div>
                </div>
            </div>
        </div>
    );
}