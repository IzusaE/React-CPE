import { Card } from "react-bootstrap";
import PriceComponent from "./PriceComponent";
import Youtube from "./Youtube";
import { useContext } from "react";
import { LevelContext } from "../context/context";

export default function PartDetail() {
    const { state } = useContext(LevelContext);

    const TypeVisual = () => {
        switch (state.partSelected?.visual_type) {
            case "img":
                return <Card.Img variant="top" src={state.partSelected?.visual_src} />;
            case "video":
                return <Youtube url={state.partSelected?.visual_src} />;
            default:
                return <></>;
        }
    }

    return (
        <Card className="text-start" style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{state.partSelected?.title}</Card.Title>
                <Card.Text>{state.partSelected?.description}</Card.Text>
            </Card.Body>
            {TypeVisual()}
            <Card.Body>
                <PriceComponent price="100" />
            </Card.Body>
        </Card>
    );
}
