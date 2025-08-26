import { cn } from "@/lib/utils";
import React from "react";

interface GridColumnsProps<T> {
    cols: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap: 1 | 2 | 3 | 4;
    data: T[];
    renderItem: (item: T) => React.ReactNode;
}

interface GridRowsProps<T> {
    rows: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12;
    gap: 1 | 2 | 3 | 4;
    data: T[];
    renderItem: (item: T) => React.ReactNode;
}

const gapMap = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
}

const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    12: "grid-cols-12",
};

const rowsMap = {
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6",
    10: "grid-rows-10",
    12: "grid-rows-12",
};

function GridColumns({ cols, gap, renderItem, data }: GridColumnsProps<any>) {
    const colClass  = colsMap[cols];
    const gapClass = gapMap[gap];

    return (
        <div className={cn("grid", colClass, gapClass)}>
            {data.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
            ))}
        </div>
    );
}

function GridRows({ rows, gap, renderItem, data }: GridRowsProps<any>) {
    const rowClass = rowsMap[rows];
    const gapClass = gapMap[gap];

    return (
        <div className={cn("grid", rowClass, gapClass)}>
            {data.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
            ))}
        </div>
    );
}

export { GridColumns, GridRows };
