import React, { useState } from "react";
import Image from "next/image";
import ActionButtons from "../components/ActionButtons";

interface SubscriptionAction {
  id: number;
  title: string;
  imageSrc: string;
}

const SubscriptionAction: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<number | null>(null);

  const handleActionChange = (actionId: number) => {
    setSelectedAction(actionId);
  };

  const actions: SubscriptionAction[] = [
    {
      id: 1,
      title: "Buy assets",
      imageSrc: "/assets/img/buy-assets.svg",
    },
    {
      id: 2,
      title: "Sell assets",
      imageSrc: "/assets/img/3d-sold.svg",
    },
    {
      id: 3,
      title: "Add liquidity",
      imageSrc: "/assets/img/3d-hourglass.svg",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-sm font-medium mb-2">Subscription Action</h1>
      <h2 className="text-2xl font-bold mb-4">Please select an action</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto">
        {actions.map(action => (
          <div className="border border-gray-300 p-4 relative" key={action.id}>
            <label className="absolute top-2 right-2">
              <input
                type="radio"
                name="action"
                value={action.id}
                checked={selectedAction === action.id}
                onChange={() => handleActionChange(action.id)}
                className="form-radio h-4 w-4 text-blue-500 cursor-pointer"
              />
            </label>
            <Image src={action.imageSrc} alt={action.title} width={300} height={200} className="mb-2" />
            <p className="font-medium text-center">{action.title}</p>
          </div>
        ))}
      </div>
      <ActionButtons previousHref="/createSubscription" nextHref="/assetSelection" />
    </div>
  );
};

export default SubscriptionAction;
