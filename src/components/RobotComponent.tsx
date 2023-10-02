import { Card } from "react-bootstrap";
import Label from "./Label";
import { Robot } from "../Interfaces/Robot";
import Youtube from "./Youtube";
import { useDispatch, useSelector } from "react-redux";
import { selectRobot } from "../actions";
import { robotSelectSelector } from "../reducers/selector";

export default function RobotComponent({ robot }: { robot: Robot }) {
    const dispatch = useDispatch();
    const robotSelected = useSelector(robotSelectSelector);

    return (
        <Card className={`border ${robotSelected !== null && robotSelected !== undefined && robotSelected.id === robot.id && "border-primary"}`} style={{ width: "18rem" }} onClick={() => dispatch(selectRobot(robot))}>
            <Label label="Robot description" />
            <Card.Body>
                <Card.Title>{robot.title}</Card.Title>
                <Card.Text>
                    ID: {robot.id} LABEL: {robot.title}
                </Card.Text>
            </Card.Body>
            {robot.visual_type === "img" ? <Card.Img variant="top" src={robot.visual_src} /> : <Youtube url={robot.visual_src} />}
        </Card>
    );
}
