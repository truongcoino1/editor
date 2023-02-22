import Theme1 from "../assets/theme_1.svg";
import Theme2 from "../assets/theme_2.svg";

type TThemes = {
  selectTheme: (param: any) => void;
};

const data = [
  {
    id: 1,
    background: Theme1,
    objects: [
      {
        id: 1,
        type: "image",
        width: 96,
        height: 96,
        left: 86,
        top: 86,
        shape: "circle",
        src: "https://trinhvantuyen.com/wp-content/uploads/2022/03/anh-trai-dep-ngau-2.jpg",
      },
      {
        id: 2,
        type: "image",
        width: 96,
        height: 96,
        left: 247,
        top: 86,
        shape: "circle",
        src: "https://vnn-imgs-f.vgcloud.vn/2019/03/05/10/nhan-sac-xinh-dep-cua-thieu-nu-bat-ngo-noi-tieng-nho-mot-buc-anh.jpg",
      },
      {
        id: 3,
        type: "text",
        width: 100,
        height: 24,
        left: 175,
        top: 336,
        color: "rgb(232, 9, 236)",
        fontStyle: "montecarlo",
        size: 0.16,
        value: "T & T",
      },
      {
        id: 4,
        type: "text",
        width: 100,
        height: 24,
        left: 104,
        top: 391,
        color: "#fff",
        fontStyle: "stix-two-text",
        value: "SEPTEMBER",
        size: 0.16,
      },
      {
        id: 5,
        type: "text",
        width: 100,
        height: 24,
        left: 211,
        top: 391,
        color: "#fff",
        fontStyle: "stix-two-text",
        value: "SATURDAY",
        size: 0.16,
      },
    ],
  },
  {
    id: 1,
    background: Theme2,
    objects: [],
  },
];

export const Themes = ({ selectTheme }: TThemes) => {
  return (
    <div className=" flex flex-wrap gap-2 w-full h-fit pt-4 justify-center">
      <div
        onClick={() => selectTheme(data[0])}
        className="cursor-pointer  h-[100px] w-[80px]"
      >
        <img className="h-full w-full object-cover" alt="" src={Theme1} />
      </div>
      <div
        onClick={() => selectTheme(data[1])}
        className="cursor-pointer h-[100px] w-[80px]"
      >
        <img className="h-full w-full object-cover" alt="" src={Theme2} />
      </div>
    </div>
  );
};
