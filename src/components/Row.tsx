import PriceComponent from "./PriceComponent";

export default function RowPrint({ title, text, type = "text" } : { title: string, text: string, type?: string }) {
    return (
        <tr>
            <th className="p-2">{title}</th>
            <td className="p-2">{type === "text" ? text : <PriceComponent price={text} /> }</td>
        </tr>
    );
}