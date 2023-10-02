import React, { useContext, useEffect } from "react";
import { Part } from "../Interfaces/Part";
import PartCard from "./PartCard";
import { LevelContext } from "../context/context";

export default function PartList() {
    const { state, dispatch } = useContext(LevelContext);
    const [ filteredPartList, setFilteredPartList ] = React.useState<Part[]>([]);
    
    useEffect(() => {
        if (state.robotSelected === null || state.robotSelected === undefined || state.robotSelected.parts === undefined) return;
        setFilteredPartList(state.parts.filter((part: Part) => state.robotSelected?.parts.includes(part.id)));
    }, [state.robotSelected]);

    return (
        <div className="text-start d-flex flex-column gap-3">
            {filteredPartList.map((part: Part) => (
                <PartCard myPart={part} key={part.id} />
            ))}
        </div>
    );
}