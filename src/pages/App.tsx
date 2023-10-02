import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RobotListComponent from "../components/RobotListComponent";
import PartList from "../components/PartList";
import PartDetail from "../components/PartDetail";
import { Part } from "../Interfaces/Part";
import { Robot } from "../Interfaces/Robot";
import { LevelContext } from "../context/context";

export default function App() {
    const { state, dispatch } = useContext(LevelContext);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://www.robots.loiclegoff.com/robots');
            dispatch({ type: 'SET_ROBOTS', payload: response.data });
            const resp = await axios.get('https://www.robots.loiclegoff.com/parts');
            dispatch({ type: 'SET_PARTS', payload: resp.data });
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
                        {state.robotSelected && <PartList />}
                    </div>
                    <div className="col">
                        {state.partSelected && <PartDetail  />}
                    </div>
                </div>
            </div>
        </div>
    );
}