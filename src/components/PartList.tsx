import React from "react";
import { Part } from "../Interfaces/Part";
import PartCard from "./PartCard";

export default function PartList({ filteredPartList, selectedPart, setSelected }: { filteredPartList: Part[], selectedPart?: Part, setSelected: (part: Part) => void}) {
    return (
        <div className="text-start d-flex flex-column gap-3">
            {filteredPartList.map((part: Part) => (
                <PartCard myPart={part} key={part.id} selectedPart={selectedPart} setSelected={setSelected} />
            ))}
        </div>
    );
}