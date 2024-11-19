# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop View

![Screenshot 2024-11-19 at 10 40 08 AM](https://github.com/user-attachments/assets/629af9ee-9bad-4953-b6c1-0b7275f616e4)

#### Mobile View

![Screenshot 2024-11-19 at 10 44 22 AM](https://github.com/user-attachments/assets/8f3394a6-1e02-4fae-93c0-9267c4180b1b)

### Links

- [Solution URL](https://github.com/heejung-hong/insure-landing-page)
- [Live Site URL](https://heejung-hong.github.io/insure-landing-page/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/) - React framework
- [Tailwind](https://tailwindcss.com/) - For styles
- [Fontawesome](https://docs.fontawesome.com/web/use-with/react) - Icons

### What I learned

From this project I learned that the hover state does not work when the component z index is below the root. I had to remove the negative z index numbers so that the hover state would work.

I also learned to conditionally render different parts of the mobile nav.

```jsx
{
  nav ? (
    <FontAwesomeIcon
      icon={faXmark}
      className="text-black m-auto w-[16px] h-[16px] "
    />
  ) : (
    <FontAwesomeIcon
      icon={faBars}
      className="text-black m-auto w-[16px] h-[16px]"
    />
  );
}

{
  nav ? (
    <>
      <div className="static w-[375] h-[587px] bg-violet-dk-v pt-[40px] desktop:hidden">
        <div
          className=" static w-[327px] h-[56px] m-auto content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
          onClick={handleNav}
        >
          HOW WE WORK
        </div>
        <div
          className="w-[327px] h-[56px] m-auto mt-[20px] content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
          onClick={handleNav}
        >
          BLOG
        </div>
        <div
          className="w-[327px] h-[56px] m-auto mt-[20px]  content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
          onClick={handleNav}
        >
          ACCOUNT
        </div>
        <div
          className="w-[327px] h-[56px] m-auto mt-[20px]  content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
          onClick={handleNav}
        >
          VIEW PLANS
        </div>
        <img src={bgmobilenav} alt="wave lines" className="absolute bottom-0" />
      </div>
    </>
  ) : (
    <></>
  );
}
```

### Continued development

I would like to built the nav bar where the nav menu doesn't push down the content of the homepage but float on top of it.

### Useful resources

- [Mobile nav functionality](https://medium.com/@ryaddev/build-responsive-navbar-with-tailwind-css-and-react-icons-3b13a272dec4) - This helped me to create the mobile nav functionality.

## Author

- Website - [Heejung Hong](https://heejunghong.com/)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)
