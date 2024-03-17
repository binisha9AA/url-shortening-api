import { Link } from 'react-router-dom';
import LogoIcon from '../icon/logo-icon';

export default function FooterMain() {
  const footerNav = [
    {
      id: 0,
      title: 'Features',
      itemOne: 'link shortening',
      itemTwo: 'Branded Links',
      ItemThree: 'Analytics',
    },
    {
      id: 1,
      title: 'Resources',
      itemOne: 'Blog',
      itemTwo: 'Developers',
      ItemThree: 'Support',
    },
    {
      id: 2,
      title: 'Company',
      itemOne: 'About',
      itemTwo: 'Our Team',
      ItemThree: 'Careers',
      itemFour: 'Contact',
    },
  ];
  return (
    <>
      <div className="bg-neutral-very_dark_violet main-footer">
        <div className="flex gap-6 md:gap-52 items-center container py-5 flex-col md:flex-row ">
          <figure>
            <LogoIcon fillColor="#fff" />
          </figure>
          <div className="flex  w-full justify-between items-baseline flex-col md:flex-row">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 items-center w-full">
              {footerNav.map((fnav) => {
                return (
                  <div className="flex flex-col gap-4  text-white">
                    {' '}
                    <p className="font-semibold">{fnav.title}</p>
                    <ul className="font-normal text-neutral-gray_text space-y-2">
                      <li key={fnav.id}> {fnav.itemOne}</li>
                      <li> {fnav.itemTwo}</li>
                      <li> {fnav.ItemThree}</li>
                      <li>{fnav.itemFour}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <ul className="flex gap-2 w-full items-center justify-center md:justify-between">
              <li>
                <img src="/public/images/icon-facebook.svg" alt="facebook" />
              </li>
              <li>
                {' '}
                <img src="/public/images/icon-twitter.svg" alt="twitter" />
              </li>
              <li>
                {' '}
                <img src="/public/images/icon-pinterest.svg" alt="pinterest" />
              </li>
              <li>
                {' '}
                <img src="/public/images/icon-instagram.svg" alt="instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
