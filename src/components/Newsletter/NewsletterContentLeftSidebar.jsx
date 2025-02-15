const NewsletterContentLeftSidebar = ({ links }) => (
  <div className="flex w-full shrink-0 flex-row items-center gap-2 bg-black xl:w-[320px] xl:flex-col xl:gap-4">
    <div className="w-fit pb-2 pl-2 pr-0 xl:w-full xl:pb-0 xl:pl-4 xl:pr-4">
      <p className="hidden text-nowrap rounded-[10px] bg-header px-8 py-4 text-white lg:flex">
        Trending - 20 list
      </p>
      <p className="flex text-nowrap rounded-[10px] bg-header px-8 py-4 text-white lg:hidden">
        Trending
      </p>
    </div>

    <div className="flex w-full flex-row gap-2 overflow-auto pb-2 pl-0 pr-2 xl:flex-col xl:pb-0 xl:pl-8 xl:pr-8">
      {links.map(({ href, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center text-nowrap rounded-[10px] border-[1px] border-white bg-header px-8 py-4 capitalize text-white hover:border-secondary"
        >
          {label}
        </a>
      ))}
    </div>
  </div>
);

export default NewsletterContentLeftSidebar;
