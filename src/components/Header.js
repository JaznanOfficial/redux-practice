import React from 'react';

const Header = () => {
    return (
        <div>
                    <form
                        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                    >
                        <img
                            src="https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/3.1/html_template/images/notes.png"
                            class="w-6 h-6"
                            alt="Add todo"
                        />
                        <input
                            type="text"
                            placeholder="Type your todo"
                            class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                        />
                        <button
                            type="submit"
                            class="appearance-none w-8 h-8 bg-[url('https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/3.1/html_template/images/plus.png')] bg-no-repeat bg-contain"
                        ></button>
                    </form>

                    <ul class="flex justify-between my-4 text-xs text-gray-500">
                        <li class="flex space-x-1 cursor-pointer">
                            <img
                                class="w-4 h-4"
                                src="https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/3.1/html_template/images/double-tick.png"
                                alt="Complete"
                            />
                            <span>Complete All Tasks</span>
                        </li>
                        <li class="cursor-pointer">Clear completed</li>
                    </ul>
                </div>
    );
};

export default Header;