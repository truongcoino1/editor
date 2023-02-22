type TLeftSidebar = {
  setTabBar: (param: string) => void;
  activeTab: string;
};

export const LeftSidebar = ({ setTabBar, activeTab }: TLeftSidebar) => {
  return (
    <div className="flex flex-col bg-[rgba(24,25,27)]">
      <div
        onClick={() => setTabBar("Theme")}
        className={`cursor-pointer w-[72px] h-[72px] flex flex-col items-center justify-center text-white ${
          activeTab === "Theme" ? "bg-[rgba(37,38,39)]" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.5 10V5a.5.5 0 0 0-.5-.5h-4.5V10h5zm0 1.5h-5v8H19a.5.5 0 0 0 .5-.5v-7.5zm-6.5-7H5a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h8v-15zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2z"
          ></path>
        </svg>
        <span className="text-white text-sm mt-1">Themes</span>
      </div>

      <div
        onClick={() => setTabBar("Element")}
        className={`cursor-pointer w-[72px] h-[72px] flex flex-col items-center justify-center text-white ${
          activeTab === "Element" ? "bg-[rgba(37,38,39)]" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
            d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
          ></path>
        </svg>
        <span className="text-white text-sm mt-1">Elements</span>
      </div>
    </div>
  );
};
