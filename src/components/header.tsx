export default function Header() {
  return (
    <>
      <header className=" flex justify-between p-3 items-center">
        <div className="flex gap-4 items-center">
          <figure>
            <img src="/public/images/logo.svg" alt="" />
          </figure>
          <nav>
            <ul className="flex gap-2 items-center font-bold text-neutral-gray_text">
              <li className="hover:text-primary-dark_violet ">Features</li>
              <li className="hover:text-primary-dark_violet ">Pricing</li>
              <li className="hover:text-primary-dark_violet ">Resources</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-neutral-gray_text text-base">login</button>
          <button className="bg-primary-cyan_btn p-2 text-white rounded-2xl text-base w-[120px]">
            Signup
          </button>
        </div>
      </header>
    </>
  );
}
