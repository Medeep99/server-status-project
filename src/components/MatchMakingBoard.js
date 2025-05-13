import React from "react";

export default function MatchMakingBoard(props) {
  const { matchmakingData, timeData } = props;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getNepaliTime = (timestamp) => {
    if (timestamp != null) {
      const date = new Date(timestamp * 1000);
	  // Convert to Nepal Time (UTC+5:45)
      const nepalTime = new Date(date.getTime());
      // Format the date (optional)
      const formatted = nepalTime.toLocaleString("en-US", {
        timeZone: "Asia/Kathmandu",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      return formatted;
    } else {
      return "No Data";
    }
  };

  return (
    <section>
      <div className="bg-gray-100">
        <div className="py-8 px-12 flex flex-col h-full w-full mx-auto  space-y-8">
          <section className="flex flex-col mx-auto bg-white rounded-lg p-8 shadow-md space-y-8">
            <div className="text-2xl font-medium text-black-500">
              Global Matchmaking Status <br />
              <span className="text-sm font-small text-gray-500">
                Time : {getNepaliTime(timeData)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full min-w-0">
              <div className="flex flex-col px-8 py-4 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">
                    {capitalizeFirstLetter(matchmakingData.scheduler)}
                  </div>
                  <div className="text-lg font-medium text-blue-500">
                    Schedular
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-8 py-4 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">
                    {matchmakingData.online_players}
                  </div>
                  <div className="text-lg font-medium text-amber-600">
                    Online Players
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-8 py-4 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-6xl font-bold tracking-tight leading-none text-red-500">
                    {matchmakingData.online_servers}
                  </div>
                  <div className="text-lg font-medium text-red-600">
                    Online Servers
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-8 py-4 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-6xl font-bold tracking-tight leading-none text-green-500">
                    {matchmakingData.search_seconds_avg} sec
                  </div>

                  <div className="text-lg font-medium text-primary-900">
                    Average Search Time
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
