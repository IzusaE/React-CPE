import RobotComponent from "./RobotComponent";
import { Robot } from "../Interfaces/Robot";
import { useContext } from "react";
import { LevelContext } from "../context/context";

export default function RobotListComponent() {
    const { state } = useContext(LevelContext);
    
    return (
        <div className="text-start d-flex flex-column gap-3">
            {state.robots.map((robot: Robot) => (
                <RobotComponent myRobot={robot} key={robot.id} />
            ))}
        </div>
    );
}
