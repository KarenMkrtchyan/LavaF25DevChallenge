'use client'
import { useState } from 'react'
import { UpDownArrows, Filter } from '@/components/icons/Icons'
import producitListings from './products.json' // TODO: Load this from DB
import MaterialListing from '@/components/materials/MaterialListing'

interface Material {
	id: number
	name: string
	image: string
	required: number
}

export default function Materials() {
	const [searchTerm, setSearchTerm] = useState('')
	console.log(producitListings)
	return (
		<div>
			{/* Header component */}
			<h1>Materials / Blanks</h1>
			<div>
				<div>
					{/* Search Component */}
					<input
						type='text'
						placeholder='Search materials...'
						className='border p-2 rounded w-full mb-4'
					/>
					<button>
						<UpDownArrows />
					</button>
					<button>
						<Filter />
					</button>
				</div>
				{/* Materials List Component */}
				<div>
					{producitListings.map((product: Material) => (
						<MaterialListing
							key={product.id}
							name={product.name}
							pic={product.image}
							inventoryCount={product.required}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
