export default function Highlights({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</h4>
          <p className="u-text-p text-sm">{item.desc}</p>
        </div>
      ))}
    </>
  );
}
