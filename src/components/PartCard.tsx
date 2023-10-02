import { Card, Table } from "react-bootstrap";
import { Part } from "../Interfaces/Part";
import Label from "./Label";
import RowPrint from "./Row";
import { LevelContext } from "../context/context";
import { useContext } from "react";

export default function PartCard({ myPart }: { myPart: Part }) {
    const { state, dispatch } = useContext(LevelContext);
    return (
        <Card className={`border ${state.partSelected !== null && state.partSelected !== undefined && state.partSelected.id === myPart.id && "border-primary"}`} style={{ width: "18rem" }} onClick={() => dispatch({ type: 'SET_PART_SELECTED', payload: myPart })}>
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
