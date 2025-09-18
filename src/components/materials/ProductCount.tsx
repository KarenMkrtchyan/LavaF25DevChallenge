'use client'
import { useState } from 'react'


interface MyComponentProps {
  inventoryCount: number
}

export default function ProductCount({ inventoryCount }: MyComponentProps) {
    const [selectedCount, setSelectedCount] = useState(0)

    const handleMinusClick = () => {
        setSelectedCount(Math.max(0, selectedCount - 1))
    }

    const handlePlusClick = () => {
        setSelectedCount(selectedCount + 1)
    }

    return (
    <div>
        <div>
            <button onClick={handleMinusClick}>-</button>
        </div>
        <div>
            <p>{selectedCount}</p>
            <p>{inventoryCount}</p>
        </div>
        <div>
            <button onClick={handlePlusClick}>+</button>
        </div>
    </div>
    )
}