import { Button } from "react-bootstrap";

export default function PriceComponent({ price }: { price: string }) {
    return (
        <Button variant="outline-primary">Price {price}</Button>
    )
}