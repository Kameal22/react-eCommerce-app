import React, { useEffect, useState } from "react";
import "../../styles/searchResultStyles/searchResult.scss";

interface ResultProps {
    filterResult: (category: string, chosenOption: string) => void
}

const FilterResult: React.FC<ResultProps> = props => {
    return (
        <div className="filters">
            <h2>Filter products</h2>
            <div className="producent">
                <h4>Producent</h4>
            </div>
        </div>
    )
};

export default FilterResult;
