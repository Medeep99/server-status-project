import React from 'react'

export default function MatchMakingBoard() {
  return (
    <div className='bg-gray-100'>
	<div className="py-6 px-12 flex flex-col h-full w-full mx-auto  space-y-6">
		<section className="flex flex-col mx-auto bg-white rounded-lg p-6 shadow-md space-y-6 w-full">
        <div className="text-2xl font-medium text-black-500">Global Matchmaking Status</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
			
				<div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
					<div className="flex flex-col items-center space-y-2">
						<div className="text-6xl font-bold tracking-tight leading-none text-blue-500">Normal</div>
						<div className="text-lg font-medium text-blue-500">Schedular</div>
					</div>
				</div>
				
				<div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
					<div className="flex flex-col items-center space-y-2">
						<div className="text-6xl font-bold tracking-tight leading-none text-amber-500">345062</div>
						<div className="text-lg font-medium text-amber-600">Online Players</div>
					</div>
				</div>
				
				<div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
					<div className="flex flex-col items-center space-y-2">
						<div className="text-6xl font-bold tracking-tight leading-none text-red-500">95062</div>
						<div className="text-lg font-medium text-red-600">Online Servers</div>
					</div>
				</div>
				
				<div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
					<div className="flex flex-col items-center space-y-2">
						<div className="text-6xl font-bold tracking-tight leading-none text-green-500">91 sec</div>
						<div className="text-lg font-medium text-primary-900">Average Search Time</div>
					</div>
				</div>
			</div>
		</section>
	</div>

    </div>
  )
}
