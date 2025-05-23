import React from "react";

const Card = ({username, profession, btnText="About Me"}) => {
    return (
        <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6 mb-2">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Woman's Face" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">{username}</p>
                    <p className="text-slate-500 font-medium">{profession}</p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{btnText}</button>
            </div>
        </div>
    )
}

export default Card;   