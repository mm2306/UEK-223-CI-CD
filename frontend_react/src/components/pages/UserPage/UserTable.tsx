import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { User } from '../../../types/models/User.model';
import UserService from '../../../Services/UserService';
import { useNavigate } from 'react-router-dom';
import roles from '../../../config/Roles';


const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const activeUser = JSON.parse(localStorage.getItem("user") as string);

  const isAdmin = (user: User) : boolean => {
    let returnValue : boolean = false;
    console.log("User", user);
    user.roles.map(role =>{
      console.log("Role Name", role.name);
      console.log("Admin Role", roles["ADMIN"]);
      if(role.name == roles["ADMIN"]) {
        returnValue = true;
      }
    })
    return returnValue;
  }

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleAdd = () => {
    navigate('../user/edit/');
  };

  const handleEdit = (id: string) => {
    navigate('../user/edit/' + id);
  };

  const handleDelete = async (id: string) => {
    await UserService.deleteUser(id);
    window.location.reload()
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {user.firstName} {user.lastName} {user.email}
              {isAdmin(activeUser) || user.id === activeUser.id ? (
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              ) : (
                <></>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
      <Button
        size='small'
        color='success'
        variant='contained'
        onClick={handleAdd}
      >
        Add
      </Button>
    </>
  );
};

export default UserTable;
