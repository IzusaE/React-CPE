import React, { useEffect } from "react";
import { Part } from "../Interfaces/Part";
import PartCard from "./PartCard";
import { useSelector } from "react-redux";
import { partListSelector, robotSelectSelector } from "../reducers/selector";

export default function PartList() {
    const myPartList = useSelector(partListSelector);
    const myRobot = useSelector(robotSelectSelector);
    const [filteredPartList, setFilteredPartList] = React.useState<Part[]>([]);

    useEffect(() => {
        setFilteredPartList(myPartList.filter((part: Part) => myRobot.parts.includes(part.id)))
    }, [myRobot]);

    return (
        <div className="text-start d-flex flex-column gap-3">
            {filteredPartList.map((part: Part) => (
                <PartCard myPart={part} key={part.id} />
            ))}
        </div>
    );
}