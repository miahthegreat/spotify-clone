function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionLayout({ children, title, heading, seeAll }) {
  return (
    <div className="py-4">
      <div
        className={classNames(
          seeAll ? "flex justify-between items-center" : "",
          "max-w-7xl mx-auto px-6 lg:px-8 mb-4"
        )}
      >
        <h1 className={`text-${heading} font-bold text-gray-50`}>{title}</h1>
        {seeAll && (
          <a
            href="#"
            className="text-gray-400 text-sm font-semibold hover:underline"
          >
            SEE ALL
          </a>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
    </div>
  );
}

export default SectionLayout;
