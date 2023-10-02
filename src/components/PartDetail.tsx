import { Card } from "react-bootstrap";
import PriceComponent from "./PriceComponent";
import Youtube from "./Youtube";
import { Part } from "../Interfaces/Part";

export default function PartDetail({ myPartDetail }: { myPartDetail: Part }) {
    return (
        <Card className="text-start" style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{myPartDetail.title}</Card.Title>
                <Card.Text>{myPartDetail.description}</Card.Text>
            </Card.Body>
            {myPartDetail.visual_type === "img" ? <Card.Img variant="top" src={myPartDetail.visual_src} /> : <Youtube url={myPartDetail.visual_src} />}
            <Card.Body>
                <PriceComponent price="100" />
            </Card.Body>
        </Card>
    );
}
