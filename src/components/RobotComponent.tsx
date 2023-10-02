import { Card } from "react-bootstrap";
import Label from "./Label";
import { Robot } from "../Interfaces/Robot";
import Youtube from "./Youtube";
import { useContext } from "react";
import { LevelContext } from "../context/context";

export default function RobotComponent({ myRobot }: { myRobot: Robot }) {
    const { state, dispatch } = useContext(LevelContext);
    return (
        <Card className={`border ${state.robotSelected !== null && state.robotSelected !== undefined && state.robotSelected.id === myRobot.id && "border-primary"}`} style={{ width: "18rem" }} onClick={() => dispatch({ type: 'SET_ROBOT_SELECTED', payload: myRobot })}>
            <Label label="Robot description" />
            <Card.Body>
                <Card.Title>{myRobot.title}</Card.Title>
                <Card.Text>
                    ID: {myRobot.id} LABEL: {myRobot.title}
                </Card.Text>
            </Card.Body>
            {myRobot.visual_type === "img" ? <Card.Img variant="top" src={myRobot.visual_src} /> : <Youtube url={myRobot.visual_src} />}
        </Card>
    );
}
