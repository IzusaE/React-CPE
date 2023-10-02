import { Card } from "react-bootstrap";
import Label from "./Label";
import { Robot } from "../Interfaces/Robot";
import Youtube from "./Youtube";

export default function RobotComponent({ robot, robotSelected, setSelected }: { robot: Robot, robotSelected?: Robot, setSelected: (robot: Robot) => void }) {
    return (
        <Card className={`border ${robotSelected !== null && robotSelected !== undefined && robotSelected.id === robot.id && "border-primary"}`} style={{ width: "18rem" }} onClick={() => setSelected(robot)}>
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
