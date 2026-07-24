import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../Data/products';
import { CartContext } from '../Context/CartContext';
import { FaCartPlus, FaCheck, FaMagnifyingGlass } from 'react-icons/fa6';

const ProductsArea = () => {
    const navigate = useNavigate();
    const { addtoCart } = useContext(CartContext);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [addedId, setAddedId] = useState(null);

    const categories = ['All', 'Casual', 'Formal', 'Oversized', 'Printed'];

    const filteredProducts = products.filter((item) => {
        const matchesCategory = 
            selectedCategory === 'All' || 
            item.name.toLowerCase().includes(selectedCategory.toLowerCase());
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleQuickAdd = (e, item) => {
        e.stopPropagation();
        addtoCart({
            ...item,
            size: 'M', // default size for quick add
            quantity: 1
        });
        setAddedId(item.id);
        setTimeout(() => setAddedId(null), 1200);
    };

    return (
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending Collection</h2>
                    <p className="text-sm text-gray-500 mt-1">Explore our latest styles designed for comfort and elegance.</p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                    <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all"
                    />
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                            selectedCategory === cat
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-gray-500 text-sm">No products found matching your search.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-800 shadow-2xs">
                                    New
                                </span>
                            </div>

                            {/* Info & Add to Cart */}
                            <div className="p-4 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-black line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">Premium Fabric • Unisex</p>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                    <span className="text-lg font-bold text-gray-900">{item.price}</span>
                                    
                                    <button
                                        type="button"
                                        onClick={(e) => handleQuickAdd(e, item)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                                            addedId === item.id 
                                                ? 'bg-emerald-600 text-white' 
                                                : 'bg-black text-white hover:bg-gray-800'
                                        }`}
                                    >
                                        {addedId === item.id ? (
                                            <>
                                                <FaCheck className="text-xs" />
                                                <span>Added</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaCartPlus className="text-xs" />
                                                <span>Add</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProductsArea;