const obj_messages: {
  success: { message: string; status: number; id?: number };
  update: { message: string; status: number };
  delete: { message: string; status: number };
  not_found: { message: string; status: number };
  not_provided: { message: string; status: number };
  password: { message: string; status: number };
} = {
  success: { message: "Created successfully!", status: 201 },
  update: { message: "Updated successfully!", status: 200 },
  delete: { message: "Deleted successfully!", status: 200 },
  not_found: { message: "Not found!", status: 404 },
  not_provided: { message: "Not provided!", status: 403 },
  password: { message: "Password is incorrect", status: 401 },
};
export default obj_messages;
