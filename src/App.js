import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";
function App() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl:
      "games/react-unity-game-build/Build/react-unity-game-build.loader.js",
    dataUrl: "games/react-unity-game-build/Build/react-unity-game-build.data",
    frameworkUrl:
      "games/react-unity-game-build/Build/react-unity-game-build.framework.js",
    codeUrl: "games/react-unity-game-build/Build/react-unity-game-build.wasm",
  });

  return (
    <div className="game-container">
      {isLoaded ? (
        <h3 className="heading-text">React Unity Sample 😎</h3>
      ) : (
        <h3 className="heading-text">Please wait while the game is being loaded..</h3>
      )}
      <Unity
        style={{ height: 500, width: 900 }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
