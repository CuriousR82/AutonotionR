import { ReactComponent as NotionLight } from "../logos/notion-light.svg";
import { ReactComponent as NotionDark } from "../logos/notion-dark.svg";
import { ReactComponent as JSLight } from "../logos/js-light.svg";
import { ReactComponent as JSDark } from "../logos/js-dark.svg";
import { ReactComponent as ThreeLight } from "../logos/threejs-light.svg";
import { ReactComponent as ThreeDark } from "../logos/threejs-dark.svg";
import { ReactComponent as ReactLight } from "../logos/react-light.svg";
import { ReactComponent as ReactDark } from "../logos/react-dark.svg";
import { ReactComponent as MongoLight } from "../logos/mongodb-light.svg";
import { ReactComponent as MongoDark } from "../logos/mongodb-dark.svg";
import { ReactComponent as NodeLight } from "../logos/nodejs-light.svg";
import { ReactComponent as NodeDark } from "../logos/nodejs-dark.svg";
import { ReactComponent as FirebaseLight } from "../logos/firebase-light.svg";
import { ReactComponent as FirebaseDark } from "../logos/firebase-dark.svg";
import { ReactComponent as SwiftLight } from "../logos/swift-light.svg";
import { ReactComponent as SwiftDark } from "../logos/swift-dark.svg";
import { ReactComponent as GoLight } from "../logos/go-light.svg";
import { ReactComponent as GoDark } from "../logos/go-dark.svg";
import { ReactComponent as ExpressLight } from "../logos/express-light.svg";
import { ReactComponent as ExpressDark } from "../logos/express-dark.svg";
import { ReactComponent as PythonLight } from "../logos/python-light.svg";
import { ReactComponent as PythonDark } from "../logos/python-dark.svg";
import { ReactComponent as CPPLight } from "../logos/cpp-light.svg";
import { ReactComponent as CPPDark } from "../logos/cpp-dark.svg";
import { ReactComponent as TailwindLight } from "../logos/tailwind-light.svg";
import { ReactComponent as TailwindDark } from "../logos/tailwind-dark.svg";

function strToLogo(str, isLight) {
    if (isLight) {
        switch (str) {
            case "NotionAPI":
                return <NotionLight className={"w-6 h-6"} />
            case "JavaScript":
                return <JSLight className={"w-6 h-6"} />
            case "Three.js":
                return <ThreeLight className={"w-6 h-6"} />
            case "React.js":
                return <ReactLight className={"w-6 h-6"} />
            case "MongoDB":
                return <MongoLight className={"w-6 h-6"} />
            case "Node.js":
                return <NodeLight className={"w-[26px] h-[26px]"} />
            case "Firebase":
                return <FirebaseLight className={"w-6 h-6"} />
            case "Swift":
                return <SwiftLight className={"w-[22px] h-[22px]"} />
            case "Go":
                return <GoLight className={"w-8 h-8"} />
            case "Express":
                return <ExpressLight className={"w-5 h-5"} />
            case "Python":
                return <PythonLight className={"w-[20px] h-[20px]"} />
            case "C++":
                return <CPPLight className={"w-[26px] h-[26px]"} />
            case "TailwindCSS":
                return <TailwindLight className={"w-[26px] h-[26px]"} />
            default:
                return <></>
        }
    } else {
        switch (str) {
            case "NotionAPI":
                return <NotionDark className={"w-6 h-6"} />
            case "JavaScript":
                return <JSDark className={"w-6 h-6"} />
            case "Three.js":
                return <ThreeDark className={"w-6 h-6"} />
            case "React.js":
                return <ReactDark className={"w-6 h-6"} />
            case "MongoDB":
                return <MongoDark className={"w-6 h-6"} />
            case "Node.js":
                return <NodeDark className={"w-[26px] h-[26px]"} />
            case "Firebase":
                return <FirebaseDark className={"w-6 h-6"} />
            case "Swift":
                return <SwiftDark className={"w-[22px] h-[22px]"} />
            case "Go":
                return <GoDark className={"w-8 h-8"} />
            case "Express":
                return <ExpressDark className={"w-5 h-5"} />
            case "Python":
                return <PythonDark className={"w-[20px] h-[20px]"} />
            case "C++":
                return <CPPDark className={"w-[26px] h-[26px]"} />
            case "TailwindCSS":
                return <TailwindDark className={"w-[26px] h-[26px]"} />
            default:
                return <></>
        }
    }
}

export default strToLogo;