import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { List, Importance } from "../../../types/models/List.model";
import ListService from "../../../Services/ListService";
import { useNavigate } from "react-router-dom";

const AdminListTable = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    ListService.getAllListsAdmin().then((data) => {
      setLists(data);
    });
  }, []);

  const handleAdd = () => {
    navigate("../list/edit/");
  };

  const handleEdit = (id: string) => {
    navigate("../list/edit/" + id);
  };

  const handleDelete = (id: string) => {
    ListService.deleteList(id);
    window.location.reload();
  };

  return (
    <>
      {lists.map((list) => (
        <div key={list.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ borderBottom: "1px solid" }}>
              Author: {list.user.firstName} {list.user.lastName} <br />
              Priority: {Importance[list.importance]} <br /> {list.title} <br />
              -------------------------------------- <br />
              {list.text}
              <br /><br />
              <CardActions>
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => handleEdit(list.id)}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => handleDelete(list.id)}
              >
                Delete
              </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      ))}
      <Button
        size="small"
        color="success"
        variant="contained"
        onClick={handleAdd}
      >
        Add
      </Button>
    </>
  );
};

export default AdminListTable;
