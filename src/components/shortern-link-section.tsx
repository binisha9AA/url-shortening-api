import { useEffect, useState } from 'react';

export default function ShorternLink() {
  const [shortenLink, setShortenLink] = useState({});
  const fetchAddress = async () => {
    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten');
      const data = await response.json();
      setShortenLink(data);
    } catch (error) {
      console.log(error);
    }
    // console.log('here', data);
  };
  useEffect(() => {
    fetchAddress();
  }, []);
  return (
    <>
      <div className="flex items-center gap-4 h-full min-h-14 bg-url w-full justify-between p-10 rounded-xl">
        <input
          type="text"
          className="flex-grow rounded-md h-12 indent-3 outline-none "
          placeholder="Shorten a link here..."
        />
        <button className="bg-primary-cyan_btn p-2 text-white rounded-md text-base basis-[15%]">
          Shorten it!
        </button>
      </div>
      <ul className="flex flex-col gap-3 mt-2">
        <li className="bg-white p-2 flex justify-between">
          <p>snddnnakn</p>
          <div className="flex gap-3 items-center">
            <p>sdsdssjhjsh</p>
            <button className="bg-primary-cyan_btn p-2 text-white rounded-md text-base hover:bg-neutral-very_dark_violet min-w-[100px]">
              copy
            </button>
          </div>
        </li>
        <li className="bg-white p-2 flex justify-between">
          <p>snddnnakn</p>
          <div className="flex gap-3 items-center">
            <p>sdsdssjhjsh</p>
            <button className="bg-primary-cyan_btn p-2 text-white rounded-md text-base hover:bg-neutral-very_dark_violet min-w-[100px] ">
              copy
            </button>
          </div>
        </li>
        <li className="bg-white p-2 flex justify-between">
          <p>snddnnakn</p>
          <div className="flex gap-3 items-center">
            <p>sdsdssjhjsh</p>
            <button className="bg-primary-cyan_btn p-2 text-white rounded-md text-base hover:bg-neutral-very_dark_violet min-w-[100px]">
              copy
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
