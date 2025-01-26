const Plans = () => {
    const plans = [
      {
        name: "Basic",
        price: "$9/month",
        features: ["Basic Color Palettes", "5 Color Downloads/Day", "Community Access"],
      },
      {
        name: "Premium",
        price: "$29/month",
        features: [
          "Advanced Palettes",
          "Unlimited Downloads",
          "Exclusive Tutorials",
          "Priority Support",
        ],
      },
      {
        name: "Nove",
        price: "$49/month",
        features: [
          "Custom Palette Creation",
          "Team Collaboration",
          "Dedicated Account Manager",
          "Access to Beta Features",
        ],
      },
    ];
  
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-center mb-4">{plan.name}</h3>
              <p className="text-center text-2xl font-bold text-blue-500 mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Plans;
  