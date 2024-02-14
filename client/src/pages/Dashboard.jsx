import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DasSidebar from "../components/DasSidebar";
import DasProfile from "../components/DasProfile";
import DashPosts from "../components/DashPosts";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* sidebar */}
      <div className="md:w-56">
        <DasSidebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DasProfile />}
      {tab === "posts" && <DashPosts />}
    </div>
  );
}
