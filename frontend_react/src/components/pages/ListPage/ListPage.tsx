import { useNavigate, useParams } from "react-router-dom";
import { List } from "../../../types/models/List.model";
import { Importance } from "../../../types/models/List.model";
import ListService from "../../../Services/ListService";
import ListForm from "../../molecules/ListForm/ListForm";
import {useContext, useEffect, useState} from "react";
import ActiveUserContext from "../../../Contexts/ActiveUserContext";

const ListPage = () => {
    const navigate = useNavigate();
    const { previousPage, listEntryId } = useParams();
    const { user } = useContext(ActiveUserContext);
    const [list, setList] = useState<List>({
        id: "",
        title: "",
        text: "",
        importance: Importance.LOW,
        createdAt: new Date(),
        user: user!
    });

    useEffect(() => {
        return () => {
            if (listEntryId) {
                ListService.getList(listEntryId).then((res) => {
                    return setList(res);
                });
            }
        };
    }, [listEntryId]);

    const submitActionHandler = (values: List) => {
        if (listEntryId !== undefined && listEntryId !== "") {
            ListService.updateList(values).then(() => {
                navigate(("../" + previousPage) as string);
            });
        } else {
            ListService.addList(values).then(() => {
                navigate(("/" + previousPage) as string);
            });
        }
    };

  return (
    <ListForm
      list={list}
      submitActionHandler={submitActionHandler}
      previousPage={previousPage as string}
    />
  );
};
export default ListPage;
