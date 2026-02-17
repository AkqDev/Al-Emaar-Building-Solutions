import React from 'react';

const categories = [
  { id: 1, title: 'Water Proofing', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop' },
  { id: 2, title: 'Lighting & Electrical', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=400&auto=format&fit=crop' },
  { id: 3, title: 'Paints & Adhesives', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=400&auto=format&fit=crop' },
  { id: 4, title: 'Construction Materials', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop' },
  { id: 5, title: 'Safety Products', image: 'https://images.unsplash.com/photo-1590483734724-3881744a338e?q=80&w=400&auto=format&fit=crop' },
  { id: 6, title: 'Plumbing Items', image: 'https://images.unsplash.com/photo-1581244276891-9977e407d251?q=80&w=400&auto=format&fit=crop' },
];

const TopCategories: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-8xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          <h2 className="text-3xl font-bold text-[#4A1D1D]">Top Categories</h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-lg">Browse Our Best-Selling Categories</p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="group cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
              {/* Image Container */}
              <div className="h-40 overflow-hidden bg-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-[15px] font-bold text-gray-800 h-10 flex items-center justify-center leading-tight">
                  {cat.title}
                </h3>
                <button className="mt-3 w-full bg-[#B38B4D] hover:bg-[#96733D] text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors">
                  View All
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;