import { Card } from "react-bootstrap";
import PriceComponent from "./PriceComponent";
import Youtube from "./Youtube";
import { useContext } from "react";
import { LevelContext } from "../context/context";

export default function PartDetail() {
    const { state, dispatch } = useContext(LevelContext);
    return (
        <Card className="text-start" style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{state.partSelected.title}</Card.Title>
                <Card.Text>{state.partSelected.description}</Card.Text>
            </Card.Body>
            {state.partSelected.visual_type === "img" ? <Card.Img variant="top" src={state.partSelected.visual_src} /> : <Youtube url={state.partSelected.visual_src} />}
            <Card.Body>
                <PriceComponent price="100" />
            </Card.Body>
        </Card>
    );
}
