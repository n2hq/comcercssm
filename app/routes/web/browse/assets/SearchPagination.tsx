import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "@remix-run/react";
import Card from "./Card";
import SearchAd from "~/components/content/ads/SearchAd";
import { ListingType } from "~/lib/types";

interface PaginationProps<T> {
    data: T[];
    itemsPerPage?: number;
    resetPageKey?: string; // 👈 control reset (e.g. search query)
}

const SearchPagination = <T,>({
    data,
    itemsPerPage = 10,
    resetPageKey
}: PaginationProps<T>) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Get initial page from URL, default to 1
    const initialPage = Number(searchParams.get("page")) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const updatePage = (page: number) => {
        setCurrentPage(page);

        // ✅ For page 1 → no query param
        if (page === 1) {
            navigate(`/web/browse`, { replace: false });
        } else {
            navigate(`/web/browse?page=${page}`, { replace: false });
        }

        // ✅ Scroll to top after navigating
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goToPrevious = () => {
        if (currentPage > 1) updatePage(currentPage - 1);
    };

    const goToNext = () => {
        if (currentPage < totalPages) updatePage(currentPage + 1);
    };

    // ✅ Reset page when resetPageKey changes
    useEffect(() => {
        if (resetPageKey !== undefined) {
            updatePage(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resetPageKey]);

    return (
        <div>
            <div className="space-y-6">
                {currentItems?.map((item: T, index) => (
                    <div key={index}>
                        {(index + 1) % 2 ? (
                            <Card listing={item} index={index} />
                        ) : (
                            <>
                                <Card listing={item} index={index} />
                                <SearchAd />
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-[5px] mt-[60px]">
                    <button
                        onClick={goToPrevious}
                        disabled={currentPage === 1}
                        className="px-[12px] py-[8px] bg-white cursor-pointer border rounded-[4px]"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => updatePage(number)}
                            className={`px-[12px] py-[8px] cursor-pointer border rounded-[4px] ${currentPage === number
                                ? "bg-blue-500 text-white border-blue-500"
                                : "bg-white"
                                }`}
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="px-[12px] py-[8px] bg-white cursor-pointer border rounded-[4px]"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchPagination;
