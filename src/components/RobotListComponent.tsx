import RobotComponent from "./RobotComponent";
import { Robot } from "../Interfaces/Robot";

export default function RobotListComponent({ robotList, robotSelected, setSelected }: { robotList: Robot[], robotSelected?: Robot, setSelected: (robot: Robot) => void }) {
    return (
        <div className="text-start d-flex flex-column gap-3">
            {robotList.map((robot: Robot) => (
                <RobotComponent robot={robot} key={robot.id} robotSelected={robotSelected} setSelected={setSelected} />
            ))}
        </div>
    );
}
