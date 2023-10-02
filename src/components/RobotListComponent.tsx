import RobotComponent from "./RobotComponent";
import { useSelector } from "react-redux";
import { Robot } from "../Interfaces/Robot";
import { robotListSelector } from "../reducers/selector";

export default function RobotListComponent() {
    const robotList = useSelector(robotListSelector);

    return (
        <div className="text-start d-flex flex-column gap-3">
            {robotList.map((robot: Robot) => (
                <RobotComponent robot={robot} key={robot.id} />
            ))}
        </div>
    );
}
