import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black text-white h-screen">
      <div className="flex w-full justify-around">
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
          <Link className="pr-4" href="/todoList">
            Assignment 1
          </Link>
        </Button>
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
          <Link className="pr-4" href="/summaryDepartment">
            Assignment 2
          </Link>
        </Button>
      </div>
    </div>
  );
}
