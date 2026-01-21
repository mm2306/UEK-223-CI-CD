import Button from "@mui/material/Button";
import { List } from "../../../types/models/List.model";
import ListService from "../../../Services/ListService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListEntry from "../../molecules/ListEntry";

const ListTable = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState<List[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);


  useEffect(() => {
    ListService.getAllLists(page).then((data) => {
      setLists(data);
    });
  }, [page]);

  useEffect(() => {
    ListService.getAllListsPagesCount().then((count) => {
      setTotalPages(count);
    });
  }, []);
  const handleAdd = () => {
    navigate("../list/edit/list");
  };

  const handleEdit = (id: string) => {
    navigate("../list/edit/list/" + id);
  };

  const handleDelete = async (id: string) => {
    await ListService.deleteList(id);
    globalThis.location.reload();
    alert("You deleted you list entry!");
  };

  return (
    <>
      <Button
        id="linkToHome"
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#00d4ff",
          "&:hover": { backgroundColor: "#0f0fcf" },
        }}
        onClick={() => navigate("/")}
      >
        Homepage
      </Button>
      {"  "}
      {lists.map((list) => (
        <div key={list.id}>
          <ListEntry
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            list={list}
          />
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
        <Button
          variant="contained"
          disabled={page === 0}
          onClick={() => setPage(p => Math.max(0, p - 1))}
        >
          Previous
        </Button>
        <span style={{ display: 'flex', alignItems: 'center' }}>Page {page + 1}</span>
        <Button
          variant="contained"
          disabled={page >= totalPages - 1}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </Button>
      </div>

      <Button
        id="add"
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

export default ListTable;
