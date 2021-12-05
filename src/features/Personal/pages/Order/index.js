import BuyHistory from './BuyHistory';
import Buying from './Buying';
import React, { useState } from 'react';


export default function Order() {
  const [activeId, setActiveId] = useState(1);

  const onTabClick = (id) => {
    setActiveId(id);
    
  };
  return (
    <div className = "">
        {tabBuys.map((tab) => (
          <div
            key={tab.id}
            className="tab-buy" 
            onClick={() => onTabClick(tab.id)}
          >
            {tab.name}
          </div>
        ))}
        <div>
          {tabBuys.map((tab) => (tab.id === activeId ? tab.component : null))}
        </div>
    </div>  
  );
}

const tabBuys = [
  {
    id: 1,
    name: 'Lịch sử mua hàng',
    component: <BuyHistory />,
  },
  {
    id: 2,
    name: 'Đang giao',
    component: <Buying />,
  }
];