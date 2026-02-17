export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "No Complicated rules",
      bgColor: "bg-blue-50",
    },
    {
      icon: "👥",
      title: "No challenges",
      bgColor: "bg-blue-50",
    },
    {
      icon: "💰",
      title: "One day payouts",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
            >
              <div
                className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center text-3xl`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
