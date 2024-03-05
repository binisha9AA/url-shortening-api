export default function AdvanceStat() {
  return (
    <section className="container mt-14 flex flex-col space-y-9">
      <div className="flex items-center justify-center flex-col space-y-3">
        {' '}
        <h4 className="text-primary-very_dark_violet font-bold text-4xl ">
          {' '}
          Advance Statistics
        </h4>
        <p className="max-w-[500px] text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          ab impedit perferendis iusto, fugit consectetur!
        </p>
      </div>
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-3">
        <div className="bg-white p-3 text-primary-very_dark_violet w-full relative min-h-[250px] flex items-center justify-center flex-col gap-3 ">
          <figure className="bg-neutral-very_dark_blue w-24 h-24 flex justify-center items-center rounded-[50%] absolute left-8 -top-12">
            <img
              src="/public/images/icon-brand-recognition.svg
          "
              alt=""
            />
          </figure>
          <p className="text-primary-very_dark_violet font-semibold text-left w-full text-primary-dark_violet text-xl">
            {' '}
            Brand Recogition
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam exercitationem alias.
          </p>
        </div>
        <div className="bg-white p-3 text-primary-very_dark_violet min-w-[392px]">
          <p className="text-primary-very_dark_violet font-semibold">
            {' '}
            Detailed Record
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam exercitationem alias.
          </p>
        </div>
        <div className="bg-white p-3 text-primary-very_dark_violet min-w-[392px]">
          <p className="text-primary-very_dark_violet font-semibold">
            {' '}
            Fully Customizable
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam exercitationem alias.
          </p>
        </div>
      </div>
    </section>
  );
}
