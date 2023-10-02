import { Card, Table } from "react-bootstrap";
import { Part } from "../Interfaces/Part";
import Label from "./Label";
import RowPrint from "./Row";
import { useDispatch, useSelector } from "react-redux";
import { selectPart } from "../actions";
import { partSelectSelector } from "../reducers/selector";

export default function PartCard({ myPart }: { myPart: Part }) {
    const selectedPart = useSelector(partSelectSelector);
    const dispatch = useDispatch()

    const onClickValue = () => {
        console.log(myPart)
        dispatch(selectPart(myPart))
    }

    return (
        <Card className={`border ${selectedPart !== null && selectedPart !== undefined && selectedPart.id === myPart.id && "border-primary"}`} style={{ width: "18rem" }} onClick={() => onClickValue()}>
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
