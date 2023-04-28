import React from 'react'
import { fetchIPAdress, fetchRegion, fetchRegionTime } from './utils'
import TimeDisplay from './components/TimeDisplay'
import Greeting from './components/Greeting'
import Quote from "./components/Quote";
import TimeZoneDetails from "./components/TimeZoneDetails";
import { IRegion, IRegionTime } from "./types";

const DAY_BG_URL = "/assets/mobile/bg-image-daytime.jpg";
const NIGHT_BG_URL = "/assets/mobile/bg-image-nighttime.jpg";

function App() {
  const [isMore, setIsMore] = React.useState(false);
  const [ipAddress, setIpAddress] = React.useState("");
  const [region, setRegion] = React.useState<IRegion>({});
  const [regionTime, setRegionTime] = React.useState<IRegionTime>({});

  React.useEffect(() => {
    const getIPAddress = async () => {
      const { ip } = await fetchIPAdress();
      setIpAddress(ip);
    };

    getIPAddress();

    if (ipAddress.length > 0) {
      const getRegion = async () => {
        const data = await fetchRegion(ipAddress);
        setRegion(data);
      };

      const getRegionTime = async () => {
        const data = await fetchRegionTime(ipAddress);
        setRegionTime(data);
      };

      getRegion();
      getRegionTime();
    }
  }, [ipAddress]);

  return (
    <div
      className="h-screen bg-cover bg-no-repeat font-inter text-white transition-all"
      style={{
        backgroundImage: `url('${isMore ? NIGHT_BG_URL : DAY_BG_URL}')`,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[#000] bg-opacity-40">
        <main className="relative z-10 flex h-full w-full flex-col">
          <div className="flex h-full flex-col justify-between px-[1.625rem] pb-10 pt-8">
            <Quote isVisible={!isMore} />
            <div>
              <Greeting />
              <div className="mt-4 flex items-end">
                <TimeDisplay />
                <p
                  className="font-light transition-opacity"
                  style={{
                    opacity: Object.keys(regionTime).length > 0 ? 1 : 0,
                  }}
                >
                  {regionTime.abbreviation || "-"}
                </p>
              </div>
              <p
                className="mt-4 text-[0.938rem] font-bold uppercase tracking-[0.25rem] transition-opacity"
                style={{ opacity: Object.keys(regionTime).length > 0 ? 1 : 0 }}
              >
                In {region.geoplugin_city || "-"},{" "}
                {region.geoplugin_countryCode || "-"}
              </p>
              <button
                className={`mt-12 flex items-center rounded-full bg-white py-1 pl-4 pr-1 font-bold transition-opacity`}
                style={{ opacity: Object.keys(regionTime).length > 0 ? 1 : 0 }}
                disabled={Object.keys(regionTime).length === 0}
                onClick={() => setIsMore((prevState: boolean) => !prevState)}
              >
                <p className="text-xs uppercase tracking-[0.234rem] text-[#000] opacity-50">
                  {isMore ? "Less" : "More"}
                </p>
                <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#303030]">
                  <img
                    src="/assets/desktop/icon-arrow-down.svg"
                    alt="arrow down"
                    className={`transition duration-300 ease-out ${
                      isMore ? "-scale-100" : "scale-100"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
          <TimeZoneDetails isOpen={isMore} regionTime={regionTime} />
        </main>
      </div>
    </div>
  );
}

export default App
