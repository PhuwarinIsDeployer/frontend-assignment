"use client";
import CardDepartment from "@/components/cardDepartment/CardDepartment";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";
import { useGroupUsersByDepartment } from "@/hooks/useGroupUsersByDepartment/useGroupUsersByDepartment";
import { getSummaryDepartmentService } from "@/services/summaryDepartment/summaryDepartment";
import { fetchDepartmentSuccess } from "@/store/action/departmentActions";
import { RootState } from "@/store/store";
import { User } from "@/types/summaryDepartment/summaryDepartmentType";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SummaryDepartment() {
  const users = useSelector((state: RootState) => state.department.users);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User[] | null>(null);

  const departmentData = useGroupUsersByDepartment(users);

  const handleOpen = (user: User[]) => {
    setSelectedUser(user);
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (!users.length) {
      setIsLoading(true);
      fetchUsers();
    }
  }, []);

  useEffect(() => {
    console.log("Redux :", users);
  }, [users]);

  const fetchUsers = async () => {
    try {
      const response = await getSummaryDepartmentService();

      dispatch(
        fetchDepartmentSuccess(response.users, response.total, response.skip)
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className="flex flex-wrap justify-center p-4 bg-black min-h-screen">
      {Object.entries(departmentData).map(([departmentName, details]) => (
        <CardDepartment
          key={departmentName}
          departmentName={departmentName}
          details={details}
          handleClose={handleClose}
          handleOpen={handleOpen}
          isOpenModal={isOpenModal}
          selectedUser={selectedUser ?? []}
        />
      ))}
    </div>
  );
}
