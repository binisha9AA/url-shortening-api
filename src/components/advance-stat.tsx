import Stats from './stats';

export default function AdvanceStat() {
  const statistics = [
    {
      id: 0,
      title: 'Brand Recogition',
      details:
        "Boost your brand recognition with each click. Goncric links don't moan a thing. Branded links help instill confidence in your content.",
      img: '/public/images/icon-brand-recognition.svg',
    },
    {
      id: 1,
      title: '   Detailed recognition',
      details:
        ' Gain insights into who is clicking your links. Knowing when and where people engage with your content holps inform bottor decisions.',
      img: '/public/images/icon-detailed-records.svg',
    },
    {
      id: 2,
      title: ' Fully Customisable',
      details:
        'Improve brand awareness ond content discoverability through customizable links. suporcharging audience engagement.',
      img: '/public/images/icon-fully-customizable.svg',
    },
  ];

  return (
    <section className="container mt-14 flex flex-col space-y-9 min-h-600px">
      <div className="flex items-center justify-center flex-col space-y-3">
        {' '}
        <h4 className="text-primary-very_dark_violet font-bold text-4xl ">
          {' '}
          Advance Statistics
        </h4>
        <p className="max-w-[500px] text-center text-neutral-grayish_violet">
          Boost your brand recognition with each click Goncric links don't moan
          a thing. Branded links help instil confidence in your content
        </p>
      </div>

      <ul className="grid grid-cols-1 w-full md:grid-cols-3  relative advance-stat gap-5">
        {statistics.map((stat) => {
          return (
            <li
              className="bg-white p-12 text-primary-very_dark_violet  min-h-[225px] flex items-center justify-center flex-col gap-3 w-full 2xl:w-[400px] relative"
              key={stat.id}
            >
              <figure className="bg-neutral-very_dark_blue w-20 h-20 flex justify-center items-center rounded-[50%] absolute left-8 -top-12">
                <img src={stat.img} alt="" />
              </figure>
              <p className="text-primary-very_dark_violet font-semibold text-left w-full text-primary-dark_violet text-xl">
                {' '}
                {stat.title}
              </p>
              <p>{stat.details}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
