import { Card, Table } from "react-bootstrap";
import { Part } from "../Interfaces/Part";
import Label from "./Label";
import RowPrint from "./Row";

export default function PartCard({ myPart, selectedPart, setSelected }: { myPart: Part, selectedPart?: Part, setSelected: (part: Part) => void }) {
    return (
        <Card className={`border ${selectedPart !== null && selectedPart !== undefined && selectedPart.id === myPart.id && "border-primary"}`} style={{ width: "18rem" }} onClick={() => setSelected(myPart)}>
            <Label label={`Part ${myPart.id}`} />
            <Card.Body>
                <Table>
                    <tbody>
                        <RowPrint title="ID" text={myPart.id.toString()} />
                        <RowPrint title="NAME" text={myPart.title} />
                        <RowPrint type="button" title="PRICE" text={myPart.price.toString()} />
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
