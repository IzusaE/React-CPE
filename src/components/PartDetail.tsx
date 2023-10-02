import { Card } from "react-bootstrap";
import PriceComponent from "./PriceComponent";
import Youtube from "./Youtube";
import { useSelector } from "react-redux";
import { partSelectSelector } from "../reducers/selector";

export default function PartDetail() {
    const part = useSelector(partSelectSelector);

    return (
        <Card className="text-start" style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{part.title}</Card.Title>
                <Card.Text>{part.description}</Card.Text>
            </Card.Body>
            {part.visual_type === "img" ? <Card.Img variant="top" src={part.visual_src} /> : <Youtube url={part.visual_src} />}
            <Card.Body>
                <PriceComponent price="100" />
            </Card.Body>
        </Card>
    );
}
