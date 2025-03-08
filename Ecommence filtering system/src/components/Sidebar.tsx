import { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

function Sidebar() {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword
    } = useFilter();

    const [categories, setCategories] = useState<string[]>([]);
    const [keywords, setKeywords] = useState<string[]>([
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt",
    ]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data : FetchResponse = await response.json();
                //console.log(data).products; for testing purposes
                const uniqueCategories = Array.from(
                    new Set(data.products.map((product) => product.category))
                );
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };
        fetchCategories();
    },[]);

    const handleRadioChangeCategories = (category: string) => {
        setSelectedCategory(category);
    };

    const handleKeywordClick = (keyword: string) => {
        setKeyword(keyword);
    };

    const handleResetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("");
        setMinPrice(undefined);
        setMaxPrice(undefined);
        setKeyword("");
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value) : undefined);
    };
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value) : undefined);
    };

    return (
        <div className="w-64 p-5 h-screen">
            <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>

            <section>
                <input 
                    type="text"
                    className="border-2 rounded px-2 p-2 sm:mb-0"
                    placeholder="Search Product"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
                <div className="flex justify-center items-center">
                    <input
                        type="number"
                        className="border-2 mr-2 px-5 py-3 mb-3 w-full"
                        placeholder="Max"
                        value={maxPrice ?? ""}
                        onChange={handleMinPriceChange}
                    />
                    <input
                        type="number"
                        className="border-2 px-5 py-3 mb-5 mt-2 w-full"
                        placeholder="Max"
                        value={maxPrice ?? ""}
                        onChange={handleMaxPriceChange}
                    />
                </div>

                {/* Categories Section */}
                <div className="mb-5">
                    <h2 className="text-xl font-semibold mb-3">Categories</h2>
                    <div>
                        {categories.map((category, index) => (
                            <label key={index} className="block mb-2">
                                <input 
                                    type="radio"
                                    name="category"
                                    value={category}
                                    onChange={() => handleRadioChangeCategories(category)}
                                    checked={selectedCategory === category}
                                    className="mr-2 w-[16px] h-[16px]"
                                 />
                                 {category.toUpperCase()}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Keywords Section */}
                <div className="mb-5">
                    <h2 className="text-xl font-semibold mb-3">Keywords</h2>
                    <div>
                        {keywords.map((keyword, index) => (
                            <button
                                key={index}
                                onClick={() => handleKeywordClick(keyword)}
                                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
                            >
                                {keyword.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={handleResetFilters}
                    className="w-full mb-[4rem] py-2 bg-block text-white rounded mt-5"
                >
                    Reset Filters
                </button>
            </section>
        </div>
    );
};

export default Sidebar;