import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black text-white h-screen">
      <div className="flex w-full justify-around">
        <Link className="pr-4" href="/todoList">
          <Button
            variant="contained"
            sx={{
              fontSize: "32px",
              backgroundColor: "#FDAE38",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "white",
                color: "#FDAE38",
              },
            }}
          >
            Assignment 1
          </Button>
        </Link>
        <Link className="pr-4" href="/summaryDepartment">
          <Button
            variant="contained"
            sx={{
              fontSize: "32px",
              backgroundColor: "#FDAE38",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "white",
                color: "#FDAE38",
              },
            }}
          >
            Assignment 2
          </Button>
        </Link>
      </div>
    </div>
  );
}
