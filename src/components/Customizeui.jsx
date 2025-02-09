import React from "react";
import Logo from "../assets/Vector.svg";
import icon1 from "../assets/icon_1.svg";
import icon2 from "../assets/icon_2.svg";
import icon3 from "../assets/icon_3.svg";

const Customizeui = () => {
  return (
    <body class="bg-gray-100">
      <div class="flex">
        {/* Sidebar */}
        <div className="bg-blue-600 text-white w-full md:w-16 flex flex-row md:flex-col items-center py-4">
          <img
            src={Logo}
            alt="Logo"
            className="mb-6"
            style={{ marginbottom: "3.5rem" }}
          />
          <div className="flex flex-row md:flex-col space-y-0 md:space-y-6 space-x-6 md:space-x-0">
            <img src={icon1} alt="Icon 1" />
            <img src={icon3} alt="Icon 2" />
            <img src={icon2} alt="Icon 3" />
          </div>
        </div>

        {/* Main Content */}
        <div class="flex-1 flex flex-col">
          {/* Header */}
          <div
            class="bg-white flex items-center justify-between px-4 py-2 shadow"
            style={{ padding: "20px" }}
          >
            <div class="text-xl font-semibold">New Project</div>
            <div class="flex items-center space-x-4">
              <div class="relative">
                <input
                  class="border rounded-full py-1 px-4 pl-8"
                  placeholder="Search project"
                  type="text"
                />
                <i class="fas fa-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-bell text-gray-600"></i>
                <div class="w-8 h-8 rounded-full bg-gray-300"></div>
                <div class="text-gray-600">Account</div>
                <i class="fas fa-chevron-down text-gray-600"></i>
              </div>
            </div>
          </div>
          {/* Content */}
          <div class="flex-1 flex">
            {/* Left Panel */}
            <div class="bg-gray-200 w-64 p-4">
              <div class="mb-4">
                <div class="text-gray-700 font-semibold">Project Name</div>
                <input
                  class="w-full border rounded py-1 px-2 mt-1"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <div class="text-gray-700 font-semibold">Add Element</div>
                <input
                  class="w-full border rounded py-1 px-2 mt-1"
                  placeholder="Search ..."
                  type="text"
                />
              </div>
              <div class="mb-4">
                <div class="text-gray-700 font-semibold">
                  Most frequently used
                </div>
                <div class="grid grid-cols-2 gap-2 mt-2">
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="text-gray-700 font-semibold">Layout elements</div>
                <div class="grid grid-cols-2 gap-2 mt-2">
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="text-gray-700 font-semibold">Base elements</div>
                <div class="grid grid-cols-2 gap-2 mt-2">
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                  <div class="w-full h-16 bg-white border rounded"></div>
                </div>
              </div>
            </div>
            {/* Main Panel */}
            <div class="flex-1 p-4" style={{ padding: "30px" }}>
              <div class="bg-white p-8 rounded shadow">
                <div class="flex justify-between items-center mb-4">
                  <div class="text-2xl font-semibold">375px x 812px</div>
                  <div class="flex items-center space-x-2">
                    <i class="fas fa-mobile-alt text-gray-600"></i>
                    <i class="fas fa-tablet-alt text-gray-600"></i>
                    <i class="fas fa-desktop text-gray-600"></i>
                  </div>
                </div>
                <div class="text-center">
                  <img
                    alt="logo"
                    class="mx-auto mb-4"
                    height="50"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-l5J1WOzGFistYCwVm2PO7UMu/user-IzWY8R2ujLfTQooUElZy8Gig/img-R8e7PoFYYv7PBZtnU5w3zE7G.png?st=2024-05-28T06%3A55%3A24Z&se=2024-05-28T08%3A55%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-27T07%3A58%3A37Z&ske=2024-05-28T07%3A58%3A37Z&sks=b&skv=2021-08-06&sig=Zv%2B9xpZUMHALYAEN96BaTI0ssFMQSy07gcSbHijWPsA%3D"
                    width="100"
                  />
                  <div class="text-3xl font-bold">
                    Turn your testimonials into your most powerful{" "}
                    <span class="text-purple-600">marketing weapon</span>
                  </div>
                  <div class="text-gray-600 mt-2">
                    Collect text and video testimonials. Share them everywhere.
                    Convert more visitors and close more deals!
                  </div>
                  <div class="flex justify-center mt-4">
                    <input
                      class="border rounded-l py-2 px-4"
                      placeholder="Your email"
                      type="email"
                    />
                    <button class="bg-black text-white rounded-r py-2 px-4">
                      Sign up for free
                    </button>
                  </div>
                </div>
                <div class="mt-8">
                  <img
                    alt="Testimonials showcase"
                    class="mx-auto"
                    height="300"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-l5J1WOzGFistYCwVm2PO7UMu/user-IzWY8R2ujLfTQooUElZy8Gig/img-T8GNv6HTJMemwYFTRtI7M5cP.png?st=2024-05-28T06%3A55%3A25Z&se=2024-05-28T08%3A55%3A25Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-27T22%3A27%3A32Z&ske=2024-05-28T22%3A27%3A32Z&sks=b&skv=2021-08-06&sig=RezWDL6oM9zmaL41hKpawUftLaFWdaPbW/MnyragDXg%3D"
                    width="600"
                  />
                </div>
                <div class="flex justify-center space-x-8 mt-8">
                  <img
                    alt="Company logo 1"
                    height="50"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-l5J1WOzGFistYCwVm2PO7UMu/user-IzWY8R2ujLfTQooUElZy8Gig/img-ZEp30n06NwaMx4XXxDaXdRhh.png?st=2024-05-28T06%3A55%3A22Z&se=2024-05-28T08%3A55%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-27T22%3A27%3A04Z&ske=2024-05-28T22%3A27%3A04Z&sks=b&skv=2021-08-06&sig=1sjBi/eGRu/Jy3sQWzCDQeLanngoQIh/VahkYDy0pc0%3D"
                    width="100"
                  />
                  <img
                    alt="Company logo 2"
                    height="50"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-l5J1WOzGFistYCwVm2PO7UMu/user-IzWY8R2ujLfTQooUElZy8Gig/img-6trqLCwPzMTJ6PQgCwW2ZTk6.png?st=2024-05-28T06%3A55%3A23Z&se=2024-05-28T08%3A55%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-27T23%3A45%3A05Z&ske=2024-05-28T23%3A45%3A05Z&sks=b&skv=2021-08-06&sig=RioCLbyNPGzEs5E9MtKb8bABzqYDmC%2BFAWwv/uTYRXo%3D"
                    width="100"
                  />
                  <img alt="Company logo 3" src="https://placehold.co/100x50" />
                  <img alt="Company logo 4" src="https://placehold.co/100x50" />
                  <img
                    alt="Company logo 5"
                    height="50"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-l5J1WOzGFistYCwVm2PO7UMu/user-IzWY8R2ujLfTQooUElZy8Gig/img-ivFcU8xlShH5YehtcH8s1GGC.png?st=2024-05-28T06%3A55%3A23Z&se=2024-05-28T08%3A55%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-27T10%3A45%3A34Z&ske=2024-05-28T10%3A45%3A34Z&sks=b&skv=2021-08-06&sig=0uxRuIaWojAh985scdI7OZTcSc2zZHcs3V7w/MFfwQE%3D"
                    width="100"
                  />
                </div>
                <div class="flex justify-center space-x-8 mt-8">
                  <div class="text-center">
                    <div class="text-yellow-500 text-xl">★★★★★</div>
                    <div class="text-gray-700 mt-2">"A godsend"</div>
                    <div class="text-gray-500 mt-1">
                      Sara Watkins, CEO of Spoonzy
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-yellow-500 text-xl">★★★★★</div>
                    <div class="text-gray-700 mt-2">
                      "10/10, would recommend"
                    </div>
                    <div class="text-gray-500 mt-1">
                      Dries Augutyns, Founder of UserLink.com
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-yellow-500 text-xl">★★★★★</div>
                    <div class="text-gray-700 mt-2">
                      "Testimonials Made Easy"
                    </div>
                    <div class="text-gray-500 mt-1">
                      Roberto Robles, Founder of Kaziins
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div class="bg-gray-200 w-64 p-4">
              <div class="text-gray-700 font-semibold mb-4">
                Select Language
              </div>
              <select class="w-full border rounded py-1 px-2 mb-4">
                <option>React</option>
              </select>
              <div class="bg-white p-4 rounded shadow">
                <p class="text-xs">
                  <code>
                    {`import React, { useState } from 'react';

function Counter() {
  // Define a state variable named 'count' and a function to update it, 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to increment count when clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Button to decrement count when clicked */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
`}
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Customizeui;
