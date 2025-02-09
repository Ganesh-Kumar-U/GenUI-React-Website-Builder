import React from "react";

export default function Widget() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/30x30"
            alt="Logo"
            className="rounded-full"
          />
          <span className="text-sm md:text-base">
            want a chatbot type like chatgpt where i want to give pr...
          </span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="bg-black text-white px-2 py-1 md:px-4 md:py-2 rounded">
            New Generation
          </button>
          <button className="bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white px-2 py-1 md:px-4 md:py-2 rounded">
            Feedback
          </button>
          <img
            src="https://placehold.co/30x30"
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r p-4 dark:border-zinc-700">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">History</h2>
            <div className="mt-2">
              <div className="border p-2 rounded cursor-pointer dark:border-zinc-700">
                <img
                  src="https://placehold.co/100x100"
                  alt="History Thumbnail"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://placehold.co/30x30"
              alt="User Avatar"
              className="rounded-full"
            />
            <input
              type="text"
              defaultValue="want a chatbot type like chatgpt where i want to give pr..."
              className="flex-1 p-2 border rounded dark:border-zinc-700"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="border p-8 rounded-lg text-center dark:border-zinc-700">
              <h1 className="text-xl font-bold mb-4">
                Failed to process the request
              </h1>
              <p>
                Please try adjusting your prompt to be more specific about the
                UI you want to create.
              </p>
              <p className="mt-2 font-semibold">
                No charges incurred for this generation.
              </p>
              <a href="#" className="text-blue-500 underline mt-4 block">
                Share your feedback
              </a>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                (ZZjTvBsZfID)
              </p>
            </div>
          </div>
        </main>
        <aside className="w-full md:w-1/4 border-t md:border-t-0 md:border-l p-4 dark:border-zinc-700">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Templates</h2>
            <div className="mt-2 space-y-4">
              <div className="border p-2 rounded cursor-pointer dark:border-zinc-700">
                <img
                  src="https://placehold.co/100x100"
                  alt="Template 1"
                  className="rounded"
                />
                <p className="mt-2 text-center">Template 1</p>
              </div>
              <div className="border p-2 rounded cursor-pointer dark:border-zinc-700">
                <img
                  src="https://placehold.co/100x100"
                  alt="Template 2"
                  className="rounded"
                />
                <p className="mt-2 text-center">Template 2</p>
              </div>
              <div className="border p-2 rounded cursor-pointer dark:border-zinc-700">
                <img
                  src="https://placehold.co/100x100"
                  alt="Template 3"
                  className="rounded"
                />
                <p className="mt-2 text-center">Template 3</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <footer className="flex flex-col md:flex-row justify-between p-4 border-t dark:border-zinc-700">
        <div className="flex items-center space-x-2">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full">
            Make the heading larger and darker
          </button>
        </div>
        <div className="flex space-x-2 md:space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-zinc-500 dark:text-zinc-400">
            FAQ
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400">
            Terms
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400">
            AI Policy
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
