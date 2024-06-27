import { useEffect } from "react";

// https://dash.elfsight.com/widget/30b6ed57-be38-442a-8318-84b322caf39a

const Facebook = () => {
  useEffect(() => {
    // Load ElfSight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-30b6ed57-be38-442a-8318-84b322caf39a"
      data-elfsight-app-lazy
    ></div>
  );
};

export default Facebook;
