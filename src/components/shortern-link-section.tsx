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
  const shortenLinks = [
    {
      id: 1,
      original_link: 'https://www.frontendmentor.io',
      shorten: 'https://rel.ink/k41Kyk',
    },
    {
      id: 2,
      original_link: 'https://www.frontendmensfsdfsdfgtor.io',
      shorten: 'https://sdfsdrel.ink/k41Kyk',
    },
    {
      id: 3,
      original_link: 'https://www.frontendmeiukjhgkjgntor.io',
      shorten: 'https://rel.ink/k41Kyk',
    },
  ];
  return (
    <>
      <div className="flex items-center gap-4 h-full min-h-14 bg-url w-full justify-between p-10 rounded-xl flex-col sm:flex-row">
        <input
          type="text"
          className="flex-grow rounded-md p-4 indent-3 outline-none w-full "
          placeholder="Shorten a link here..."
        />
        <button className="bg-primary-cyan_btn text-white rounded-md text-base basis-[30%] lg:basis-[20%] w-full p-4">
          Shorten it!
        </button>
      </div>
      <ul className="flex flex-col gap-3 mt-2">
        {shortenLinks.map((short, index) => (
          <li
            key={index}
            className="bg-white p-2 flex justify-between gap-4 flex-col md:flex-row"
          >
            <div className="flex justify-between w-full flex-wrap ">
              {' '}
              <p className="break-all">{short.original_link}</p>{' '}
              <p>{short.shorten}</p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="bg-primary-cyan_btn p-2 text-white rounded-md text-base hover:bg-neutral-very_dark_violet w-full min-w[unset] md:min-w-[100px] ">
                Copy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
