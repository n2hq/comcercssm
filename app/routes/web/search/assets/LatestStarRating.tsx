import React from 'react';
import { BiArrowFromBottom, BiArrowToTop, BiRightArrow, BiSolidRightArrow, BiStar, BiUpArrow } from 'react-icons/bi';
import { BsCircle, BsCircleFill, BsStar, BsStarFill } from 'react-icons/bs';

type StarRatingProps = {
    rating: number; // rating between 0 and 5
    maxStars?: number;
};

const LatestStarRating = ({ rating = 0, maxStars = 5 }: StarRatingProps) => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        if (i <= rating) {
            stars.push(
                <span key={i} className="text-green-700 text-lg">
                    <BsCircleFill />
                </span>
            );
        } else {
            stars.push(
                <span key={i} className="text-green-900 text-lg">
                    <BsCircle />
                </span>
            );
        }
    }

    return (
        <div className=' flex w-full place-items-center gap-2 mt-0'>
            <div className={`flex  gap-x-[3px] -mt-[2px]`}>
                {stars}
            </div>
            <div className={`text-gray-400`}>
                <BiSolidRightArrow className={`text-[15px] text-green-900`} />
            </div>
            <div className={` text-sm`}>
                {Number(rating).toFixed(0)}
            </div>

        </div>
    )
};

export default LatestStarRating;