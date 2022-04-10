function SectionLayout({ children, title }) {
  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-4">
        <h1 className="text-3xl font-bold text-gray-50">{title}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
    </div>
  );
}

export default SectionLayout;
